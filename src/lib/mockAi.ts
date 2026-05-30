import { bi } from "./i18n";
import type { Species } from "./types";

export interface PlayInput {
  purpose?: string;
  context?: string;
  constraint?: string;
  verify?: string;
  oneLiner?: string;
}

import type { Bi } from "./i18n";

function formatBiLine(label: Bi, value: string): string {
  return `${label.en}: ${value}\n${label.ko}: ${value}`;
}

const labels = {
  purpose: bi("Purpose", "목적"),
  context: bi("Context", "맥락"),
  constraint: bi("Constraints", "제약"),
  verify: bi("Verification", "검증"),
};

export function mockRespond(species: Species, input: PlayInput): string {
  if (species === "delegans") {
    const line = input.oneLiner?.trim() || "Just handle it / 알아서 해줘";
    return `✓ Marked complete / 완료된 것으로 표시됨

Summary / 요약: Optimal result for "${line}".

(47-page details · 0 sources · verification skipped)
(상세 47페이지 · 출처 0개 · 검증 생략됨)`;
  }
  const parts = [
    input.purpose && formatBiLine(labels.purpose, input.purpose),
    input.context && formatBiLine(labels.context, input.context),
    input.constraint && formatBiLine(labels.constraint, input.constraint),
    input.verify && formatBiLine(labels.verify, input.verify),
  ].filter(Boolean);
  if (parts.length === 0) {
    return `Add a bit more context. (mock response)
맥락을 조금 더 채워 주세요. (목업 응답)`;
  }
  return `Draft result / 결과 초안

${parts.join("\n\n")}

[Uncertain] Some parts are guesses. Verify yourself.
[불확실] 일부는 추정입니다. 직접 확인을 권장합니다.

[Source] Rule-based mock — no LLM
[근거] 내부 규칙 기반 목업 — LLM 미연동`;
}
