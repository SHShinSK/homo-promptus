import { speciesLabels } from "@/lib/i18n";
import type { DiagnosisResult, Species } from "@/lib/types";

export function SpeciesBadge({
  species,
}: {
  species: Species | DiagnosisResult;
}) {
  const isDelegans = species === "delegans";
  const text = speciesLabels[species];
  return (
    <span
      className={`inline-flex flex-col px-2 py-1 rounded text-xs font-medium ${
        isDelegans
          ? "bg-fuchsia-600 text-white"
          : species === "hybrid"
            ? "bg-violet-500 text-white"
            : "bg-teal-600 text-white"
      }`}
    >
      <span>{text.en}</span>
      <span className="text-[0.85em] opacity-90 font-normal">{text.ko}</span>
    </span>
  );
}
