import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { museumCards } from "@/lib/cards";
import { museum } from "@/lib/i18n";

export function Museum() {
  return (
    <div className="space-y-6">
      <div>
        <Bi text={museum.title} variant="heading" as="h1" className="m-0" />
        <Bi text={museum.subtitle} variant="block" className="species-muted mt-2" />
        <code className="text-xs">content/cards/</code>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {museumCards.map((card) => (
          <article key={card.id} className="species-surface rounded-xl p-5">
            <div className="flex justify-between items-start gap-2 mb-2">
              <Bi text={card.title} variant="heading" as="h2" className="text-base m-0" />
              <SpeciesBadge species={card.species} />
            </div>
            <Bi text={card.body} variant="block" className="text-sm" />
            {card.tags && (
              <div className="flex flex-wrap gap-1 mt-3">
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
