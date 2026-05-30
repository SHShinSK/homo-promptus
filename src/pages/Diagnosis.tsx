import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { useSpecies } from "@/context/SpeciesContext";
import { common, diagnosis as d } from "@/lib/i18n";
import { quizQuestions, scoreQuiz } from "@/lib/quiz";
import { setDiagnosis } from "@/lib/storage";
import type { DiagnosisResult } from "@/lib/types";

export function Diagnosis() {
  const navigate = useNavigate();
  const { setSpecies, refreshStats } = useSpecies();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const q = quizQuestions[step];
  const finished = step >= quizQuestions.length;

  function answer(yes: boolean) {
    const next = [...answers, yes];
    setAnswers(next);
    if (step + 1 >= quizQuestions.length) {
      const r = scoreQuiz(next);
      setResult(r);
      setDiagnosis(r);
      if (r === "delegans") setSpecies("delegans");
      else if (r === "promptus") setSpecies("promptus");
      refreshStats();
    } else {
      setStep(step + 1);
    }
  }

  if (result) {
    const desc =
      result === "hybrid"
        ? d.hybridDesc
        : result === "delegans"
          ? d.delegansDesc
          : d.promptusDesc;

    return (
      <div className="species-surface rounded-2xl p-8 text-center space-y-4">
        <Bi text={d.resultTitle} variant="heading" as="h1" className="m-0" />
        <SpeciesBadge species={result} />
        <Bi text={desc} variant="block" className="species-muted" />
        <button
          type="button"
          className="species-accent px-4 py-2 rounded-lg border-0 cursor-pointer text-white"
          onClick={() => navigate("/play")}
        >
          <Bi text={d.goPlay} variant="block" />
        </button>
      </div>
    );
  }

  if (!q || finished) return null;

  return (
    <div className="species-surface rounded-2xl p-8 max-w-lg mx-auto">
      <p className="text-sm species-muted">
        {d.questionOf.en} {step + 1} / {quizQuestions.length} · {d.questionOf.ko}{" "}
        {step + 1} / {quizQuestions.length}
      </p>
      <Bi text={q.text} variant="heading" as="h2" className="mt-2 mb-6" />
      <Bi text={d.instruction} variant="block" className="text-sm species-muted mb-4" />
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 species-accent py-3 rounded-lg border-0 cursor-pointer text-white"
          onClick={() => answer(true)}
        >
          <Bi text={common.yes} variant="block" />
        </button>
        <button
          type="button"
          className="flex-1 species-accent-outline py-3 rounded-lg cursor-pointer bg-transparent"
          onClick={() => answer(false)}
        >
          <Bi text={common.no} variant="block" />
        </button>
      </div>
    </div>
  );
}
