import type { Bi } from "./i18n";
import type { DiagnosisResult } from "./types";

export interface QuizQuestion {
  id: number;
  text: Bi;
  promptusWeight: number;
  delegansWeight: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: {
      en: "I usually write purpose and context before asking AI to work",
      ko: "AI에게 일을 시킬 때 목적·맥락을 먼저 적는 편이다",
    },
    promptusWeight: 2,
    delegansWeight: 0,
  },
  {
    id: 2,
    text: {
      en: "I have sent only “just handle it” with no context",
      ko: "'알아서 해줘'만 보낸 적이 있다",
    },
    promptusWeight: 0,
    delegansWeight: 2,
  },
  {
    id: 3,
    text: {
      en: "I open source links in AI answers",
      ko: "AI 답변의 출처·근거 링크를 열어본다",
    },
    promptusWeight: 2,
    delegansWeight: 0,
  },
  {
    id: 4,
    text: {
      en: "I have Approved a PR without reading the diff",
      ko: "PR diff를 읽지 않고 Approve 한 적이 있다",
    },
    promptusWeight: 0,
    delegansWeight: 2,
  },
  {
    id: 5,
    text: {
      en: "I switch between careful mode and full delegation",
      ko: "상황에 따라 꼼꼼함과 위임을 오간다",
    },
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
