import type { Species } from "./types";

export interface PlayInput {
  purpose?: string;
  context?: string;
  constraint?: string;
  verify?: string;
  oneLiner?: string;
}

export function mockRespond(species: Species, input: PlayInput): string {
  if (species === "delegans") {
    const line = input.oneLiner?.trim() || "알아서 해줘";
    return `✓ 완료된 것으로 표시됨\n\n요약: "${line}"에 대한 최적의 결과를 생성했습니다.\n\n(상세 47페이지 · 출처 0개 · 검증 생략됨)`;
  }
  const parts = [
    input.purpose && `목적: ${input.purpose}`,
    input.context && `맥락: ${input.context}`,
    input.constraint && `제약: ${input.constraint}`,
    input.verify && `검증: ${input.verify}`,
  ].filter(Boolean);
  if (parts.length === 0) {
    return "맥락을 조금 더 채워 주세요. (목업 응답)";
  }
  return `결과 초안\n\n${parts.join("\n")}\n\n[불확실] 일부는 추정입니다. 직접 확인을 권장합니다.\n[근거] 내부 규칙 기반 목업 — LLM 미연동`;
}
