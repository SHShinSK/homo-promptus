import type { FeedPost } from "./types";

/** MVP: 목업 피드. Discussions URL은 설정에서 연결 */
export const mockFeedPosts: FeedPost[] = [
  {
    id: "f1",
    species: "delegans",
    author: "익명 위임자",
    title: "버그 고쳐줘",
    body: "재현 단계 없음. 잘 됐겠지.",
    reactions: ["trusted-the-bot", "didnt-read"],
  },
  {
    id: "f2",
    species: "promptus",
    author: "네 칸 채운 사람",
    title: "리팩터링 범위 질문",
    body: "스택: Vite+React. 이미 시도: eslint 자동수정. 검증: 테스트 3개 추가 예정.",
    reactions: ["verified", "needs-context"],
  },
  {
    id: "f3",
    species: "delegans",
    author: "Approve All",
    title: "12 files changed",
    body: "diff 안 봄. CI가 알아서.",
    reactions: ["trusted-the-bot"],
  },
];

export const DEFAULT_DISCUSSIONS_URL =
  "https://github.com/SHShinSK/homo-promptus/discussions";
