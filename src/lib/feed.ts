import type { FeedPost } from "./types";

/** MVP: mock feed. Wire Discussions URL in settings later */
export const mockFeedPosts: FeedPost[] = [
  {
    id: "f1",
    species: "delegans",
    author: { en: "Anonymous delegator", ko: "익명 위임자" },
    title: { en: "Fix the bug", ko: "버그 고쳐줘" },
    body: {
      en: "No repro steps. Surely fixed.",
      ko: "재현 단계 없음. 잘 됐겠지.",
    },
    reactions: ["trusted-the-bot", "didnt-read"],
  },
  {
    id: "f2",
    species: "promptus",
    author: { en: "Four-field filler", ko: "네 칸 채운 사람" },
    title: { en: "Refactor scope question", ko: "리팩터링 범위 질문" },
    body: {
      en: "Stack: Vite+React. Tried: eslint --fix. Plan: add 3 tests.",
      ko: "스택: Vite+React. 이미 시도: eslint 자동수정. 검증: 테스트 3개 추가 예정.",
    },
    reactions: ["verified", "needs-context"],
  },
  {
    id: "f3",
    species: "delegans",
    author: { en: "Approve All", ko: "Approve All" },
    title: { en: "12 files changed", ko: "12 files changed" },
    body: { en: "Skipped diff. CI knows.", ko: "diff 안 봄. CI가 알아서." },
    reactions: ["trusted-the-bot"],
  },
];

export const DEFAULT_DISCUSSIONS_URL =
  "https://github.com/SHShinSK/homo-promptus/discussions";
