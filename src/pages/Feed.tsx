import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { DEFAULT_DISCUSSIONS_URL, mockFeedPosts } from "@/lib/feed";
import { feed } from "@/lib/i18n";

export function Feed() {
  return (
    <div className="space-y-6">
      <div>
        <Bi text={feed.title} variant="heading" as="h1" className="m-0" />
        <Bi text={feed.subtitle} variant="block" className="species-muted mt-2" />
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
        {mockFeedPosts.map((post) => (
          <li key={post.id} className="species-surface rounded-xl p-5">
            <div className="flex justify-between items-center mb-2 gap-2">
              <Bi text={post.author} variant="block" className="text-sm species-muted" />
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
          </li>
        ))}
      </ul>
    </div>
  );
}
