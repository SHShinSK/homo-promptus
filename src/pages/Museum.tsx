import { SpeciesBadge } from "@/components/SpeciesBadge";
import { museumCards } from "@/lib/cards";

export function Museum() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="m-0">Species Museum</h1>
        <p className="species-muted m-0">
          전형적인 Promptus / Delegans 순간 — PR로 카드를 추가하세요 (
          <code>content/cards/</code>)
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {museumCards.map((card) => (
          <article key={card.id} className="species-surface rounded-xl p-5">
            <div className="flex justify-between items-start gap-2 mb-2">
              <h2 className="m-0 text-base">{card.title}</h2>
              <SpeciesBadge species={card.species} />
            </div>
            <p className="text-sm m-0 mb-3">{card.body}</p>
            {card.tags && (
              <div className="flex flex-wrap gap-1">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded species-muted"
                    style={{ background: "var(--color-accent-soft)" }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
