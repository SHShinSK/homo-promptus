import { useEffect, useState } from "react";
import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { DEFAULT_DISCUSSIONS_URL, mockFeedPosts } from "@/lib/feed";
import {
  discussionUrl,
  fetchDiscussionsFeed,
  type FeedLoadResult,
} from "@/lib/discussionsFeed";
import { feed } from "@/lib/i18n";

export function Feed() {
  const [load, setLoad] = useState<FeedLoadResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchDiscussionsFeed().then((result) => {
      if (!cancelled) setLoad(result);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const posts = load?.posts ?? mockFeedPosts;
  const source = load?.source ?? "mock";
  const loading = load === null;

  return (
    <div className="space-y-6">
      <div>
        <Bi text={feed.title} variant="heading" as="h1" className="m-0" />
        <Bi text={feed.subtitle} variant="block" className="species-muted mt-2" />
        {loading && (
          <p className="text-sm species-muted mt-2">
            <Bi text={feed.loading} variant="inline" />
          </p>
        )}
        {!loading && source === "github" && (
          <p className="text-sm species-muted mt-2">
            <Bi text={feed.liveFromGithub} variant="inline" />
          </p>
        )}
        {!loading && source === "mock" && (
          <p className="text-sm species-muted mt-2">
            <Bi text={feed.fallbackMock} variant="inline" />
          </p>
        )}
      </div>

      <a
        href={DEFAULT_DISCUSSIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="block species-surface rounded-xl p-4 no-underline font-medium"
        style={{ color: "var(--color-accent)" }}
      >
        <Bi text={feed.discuss} variant="block" />
      </a>

      <ul className="space-y-4 list-none p-0 m-0">
        {posts.map((post) => {
          const ghMatch = post.id.match(/^gh-(\d+)$/);
          const discussHref = ghMatch ? discussionUrl(Number(ghMatch[1])) : null;
          const inner = (
            <>
              <div className="flex justify-between items-center mb-2 gap-2">
                <Bi
                  text={post.author}
                  variant="block"
                  className="text-sm species-muted"
                />
                <SpeciesBadge species={post.species} />
              </div>
              <Bi text={post.title} variant="heading" as="h2" className="text-lg m-0" />
              <Bi text={post.body} variant="block" className="mt-2 text-sm" />
              <div className="flex flex-wrap gap-2 mt-3">
                {post.reactions.map((r) => (
                  <span
                    key={r}
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              {discussHref && (
                <p className="text-xs mt-3 m-0" style={{ color: "var(--color-accent)" }}>
                  <Bi text={feed.openDiscussion} variant="inline" /> →
                </p>
              )}
            </>
          );
          return (
            <li key={post.id} className="species-surface rounded-xl p-5">
              {discussHref ? (
                <a
                  href={discussHref}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline text-inherit block"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
