import type { DiagnosisResult, Species } from "@/lib/types";

const labels: Record<Species | "hybrid", string> = {
  promptus: "Homo Promptus",
  delegans: "Homo Delegans",
  hybrid: "Homo Promptus × Delegans",
};

export function SpeciesBadge({
  species,
}: {
  species: Species | DiagnosisResult;
}) {
  const isDelegans = species === "delegans";
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
        isDelegans ? "bg-fuchsia-600 text-white" : species === "hybrid" ? "bg-violet-500 text-white" : "bg-teal-600 text-white"
      }`}
    >
      {labels[species]}
    </span>
  );
}
