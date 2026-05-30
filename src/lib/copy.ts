import type { Species } from "./types";

type CopySet = {
  tagline: string;
  modeLabel: string;
  playTitle: string;
  playSubtitle: string;
  submit: string;
  loading: string;
  resultTitle: string;
};

export const copy: Record<Species, CopySet> = {
  promptus: {
    tagline: "조금 생각하는 종",
    modeLabel: "Homo Promptus",
    playTitle: "Prompt Lab",
    playSubtitle: "목적 · 맥락 · 제약 · 검증",
    submit: "생각 포함하여 실행",
    loading: "맥락을 반영하는 중…",
    resultTitle: "결과 (근거·불확실성 표시)",
  },
  delegans: {
    tagline: "생각까지 맡기는 종",
    modeLabel: "Homo Delegans",
    playTitle: "Delegate Dock",
    playSubtitle: "한 줄이면 충분합니다™",
    submit: "알아서 해줘",
    loading: "AI가 생각 중… (당신은 쉬세요)",
    resultTitle: "요약 (상세는 접혀 있음)",
  },
};

export function getCopy(species: Species): CopySet {
  return copy[species];
}
