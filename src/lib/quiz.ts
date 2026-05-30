import type { DiagnosisResult } from "./types";

export interface QuizQuestion {
  id: number;
  text: string;
  promptusWeight: number;
  delegansWeight: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "AI에게 일을 시킬 때 목적·맥락을 먼저 적는 편이다",
    promptusWeight: 2,
    delegansWeight: 0,
  },
  {
    id: 2,
    text: "'알아서 해줘'만 보낸 적이 있다",
    promptusWeight: 0,
    delegansWeight: 2,
  },
  {
    id: 3,
    text: "AI 답변의 출처·근거 링크를 열어본다",
    promptusWeight: 2,
    delegansWeight: 0,
  },
  {
    id: 4,
    text: "PR diff를 읽지 않고 Approve 한 적이 있다",
    promptusWeight: 0,
    delegansWeight: 2,
  },
  {
    id: 5,
    text: "상황에 따라 꼼꼼함과 위임을 오간다",
    promptusWeight: 1,
    delegansWeight: 1,
  },
];

export function scoreQuiz(answers: boolean[]): DiagnosisResult {
  let p = 0;
  let d = 0;
  answers.forEach((yes, i) => {
    if (!yes) return;
    const q = quizQuestions[i];
    if (q) {
      p += q.promptusWeight;
      d += q.delegansWeight;
    }
  });
  if (p > 0 && d > 0 && Math.abs(p - d) <= 2) return "hybrid";
  if (d > p) return "delegans";
  return "promptus";
}
