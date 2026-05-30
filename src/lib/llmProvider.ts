import type { AiSpeciesResponse } from "./types";
import type { PlayInput } from "./mockAi";

export interface LlmProvider {
  name: string;
  opinionsForBoth(
    input: PlayInput
  ): Promise<{ promptus: AiSpeciesResponse; delegans: AiSpeciesResponse }>;
}

/**
 * Phase 2 BYOK 스텁. 정적 데모에서는 CORS로 비활성.
 * 추후 로컬(dev 프록시) 또는 serverless 프록시에서 구현.
 */
export function createLlmProvider(_apiKey: string): LlmProvider {
  return {
    name: "not-implemented",
    async opinionsForBoth() {
      throw new Error(
        "LLM provider not implemented in the static build. Mock is used. / 정적 빌드에서는 LLM 미구현, 목업 사용."
      );
    },
  };
}
