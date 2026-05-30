import { SpeciesBadge } from "@/components/SpeciesBadge";
import { DEFAULT_DISCUSSIONS_URL, mockFeedPosts } from "@/lib/feed";

export function Feed() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="m-0">Homo Feed</h1>
        <p className="species-muted m-0">
          MVP: 목업 타임라인 + GitHub Discussions 연동 예정
        </p>
      </div>

      <a
        href={DEFAULT_DISCUSSIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="block species-surface rounded-xl p-4 no-underline font-medium"
        style={{ color: "var(--color-accent)" }}
      >
        GitHub Discussions에서 토론하기 →
      </a>

      <ul className="space-y-4 list-none p-0 m-0">
        {mockFeedPosts.map((post) => (
          <li key={post.id} className="species-surface rounded-xl p-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm species-muted">{post.author}</span>
              <SpeciesBadge species={post.species} />
            </div>
            <h2 className="m-0 text-lg">{post.title}</h2>
            <p className="m-0 mt-2 text-sm">{post.body}</p>
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
