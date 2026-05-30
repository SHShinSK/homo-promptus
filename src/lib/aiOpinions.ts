import type {
  AiSpeciesResponse,
  InputTier,
  OpinionTemplate,
} from "./types";
import type { PlayInput } from "./mockAi";

import empty from "../../content/ai-opinions/empty.json";
import oneLine from "../../content/ai-opinions/one-line.json";
import fullContext from "../../content/ai-opinions/full-context.json";

const templates = [empty, oneLine, fullContext] as OpinionTemplate[];

const fallback: OpinionTemplate = {
  id: "fallback",
  match: "oneLine",
  promptus: {
    opinion: { en: "I can work with this once the goal is clear.", ko: "목적이 분명해지면 진행할 수 있습니다." },
    reaction: { en: "Asks one clarifying question first.", ko: "먼저 확인 질문 하나를 던집니다." },
    tags: ["needs-context"],
  },
  delegans: {
    opinion: { en: "Good enough — proceeding.", ko: "충분합니다 — 진행하죠." },
    reaction: { en: "Returns a confident summary.", ko: "자신감 있는 요약을 돌려줍니다." },
    tags: ["trusted-the-bot"],
  },
};

/** 입력 단계 판정: 빈 입력 / 한 줄 / 충분한 맥락 */
export function classifyInput(input: PlayInput): InputTier {
  const fields = [
    input.purpose,
    input.context,
    input.constraint,
    input.verify,
  ]
    .map((v) => (v ?? "").trim())
    .filter(Boolean);
  const oneLiner = (input.oneLiner ?? "").trim();

  if (fields.length === 0 && oneLiner.length === 0) return "empty";
  if (fields.length >= 3) return "fullContext";
  if (fields.length >= 2 && (input.context ?? "").trim().length > 40) {
    return "fullContext";
  }
  return "oneLine";
}

export function getAiOpinionsForBoth(input: PlayInput): {
  promptus: AiSpeciesResponse;
  delegans: AiSpeciesResponse;
} {
  const tier = classifyInput(input);
  const t = templates.find((x) => x.match === tier) ?? fallback;
  return {
    promptus: { species: "promptus", ...t.promptus },
    delegans: { species: "delegans", ...t.delegans },
  };
}
