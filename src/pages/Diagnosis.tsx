import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { useSpecies } from "@/context/SpeciesContext";
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
    return (
      <div className="species-surface rounded-2xl p-8 text-center space-y-4">
        <h1 className="m-0">종 진단 결과</h1>
        <SpeciesBadge species={result} />
        <p className="species-muted">
          {result === "hybrid"
            ? "상황에 따라 두 종을 오갑니다. 헤더에서 모드를 바꿔 보세요."
            : result === "delegans"
              ? "위임의 극치에 가깝습니다. (풍자입니다 — 습관을 비웁니다)"
              : "최소한의 생각을 남기는 편입니다."}
        </p>
        <button
          type="button"
          className="species-accent px-4 py-2 rounded-lg border-0 cursor-pointer"
          onClick={() => navigate("/play")}
        >
          체험하러 가기
        </button>
      </div>
    );
  }

  if (!q || finished) return null;

  return (
    <div className="species-surface rounded-2xl p-8 max-w-lg mx-auto">
      <p className="text-sm species-muted">
        문항 {step + 1} / {quizQuestions.length}
      </p>
      <h2 className="mt-2 mb-6">{q.text}</h2>
      <p className="text-sm species-muted mb-4">해당되면 「예」, 아니면 「아니오」</p>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 species-accent py-3 rounded-lg border-0 cursor-pointer"
          onClick={() => answer(true)}
        >
          예
        </button>
        <button
          type="button"
          className="flex-1 species-accent-outline py-3 rounded-lg cursor-pointer bg-transparent"
          onClick={() => answer(false)}
        >
          아니오
        </button>
      </div>
    </div>
  );
}
