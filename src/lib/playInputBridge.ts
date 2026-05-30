import type { PlayInput } from "./mockAi";

const KEY = "homo_play_input_bridge";

export function stashPlayInput(input: PlayInput): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function takePlayInput(): PlayInput | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    sessionStorage.removeItem(KEY);
    return JSON.parse(raw) as PlayInput;
  } catch {
    return null;
  }
}
