import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { reactions as r } from "@/lib/i18n";
import type { AiSpeciesResponse } from "@/lib/types";

export function AIOpinionPanel({ data }: { data: AiSpeciesResponse }) {
  return (
    <article className="species-surface rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <SpeciesBadge species={data.species} />
        <Bi
          text={data.species === "promptus" ? r.forPromptus : r.forDelegans}
          variant="inline"
          className="text-xs species-muted"
        />
      </div>

      <div>
        <Bi text={r.opinionLabel} variant="label" className="mb-1" />
        <Bi text={data.opinion} variant="block" className="text-sm" />
      </div>

      <div>
        <Bi text={r.reactionLabel} variant="label" className="mb-1" />
        <Bi text={data.reaction} variant="block" className="text-sm" />
      </div>

      {data.tags && data.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border"
              style={{ borderColor: "var(--color-border)" }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
