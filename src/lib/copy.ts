import { copy as i18nCopy } from "@/lib/i18n";
import type { Species } from "./types";

export type CopySet = (typeof i18nCopy)["promptus"];

export function getCopy(species: Species): CopySet {
  return i18nCopy[species];
}
