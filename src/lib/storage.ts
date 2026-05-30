import { common } from "./i18n";
import type { BehaviorLog, DiagnosisResult, Species } from "./types";

const KEYS = {
  species: "homo_species",
  diagnosis: "homo_diagnosis",
  behavior: "homo_behavior",
  tracking: "homo_tracking_optin",
  nickname: "homo_nickname",
} as const;

export function getSpecies(): Species {
  const v = localStorage.getItem(KEYS.species);
  return v === "delegans" ? "delegans" : "promptus";
}

export function setSpecies(s: Species): void {
  localStorage.setItem(KEYS.species, s);
}

export function getDiagnosis(): DiagnosisResult | null {
  const v = localStorage.getItem(KEYS.diagnosis);
  if (v === "promptus" || v === "delegans" || v === "hybrid") return v;
  return null;
}

export function setDiagnosis(d: DiagnosisResult): void {
  localStorage.setItem(KEYS.diagnosis, d);
}

export function getTrackingOptIn(): boolean {
  return localStorage.getItem(KEYS.tracking) === "true";
}

export function setTrackingOptIn(on: boolean): void {
  localStorage.setItem(KEYS.tracking, on ? "true" : "false");
}

export function getNickname(): string {
  return localStorage.getItem(KEYS.nickname) || common.anonymousSpecies.en;
}

export function setNickname(n: string): void {
  localStorage.setItem(
    KEYS.nickname,
    n.trim() || common.anonymousSpecies.en
  );
}

export function getBehaviorLog(): BehaviorLog {
  try {
    const raw = localStorage.getItem(KEYS.behavior);
    if (raw) return JSON.parse(raw) as BehaviorLog;
  } catch {
    /* ignore */
  }
  return { promptusActions: 0, delegansActions: 0, lastUpdated: new Date().toISOString() };
}

export function recordAction(species: Species): void {
  if (!getTrackingOptIn()) return;
  const log = getBehaviorLog();
  if (species === "promptus") log.promptusActions += 1;
  else log.delegansActions += 1;
  log.lastUpdated = new Date().toISOString();
  localStorage.setItem(KEYS.behavior, JSON.stringify(log));
}

export function getDelegansRatio(): number {
  const log = getBehaviorLog();
  const total = log.promptusActions + log.delegansActions;
  if (total === 0) return 0;
  return Math.round((log.delegansActions / total) * 100);
}
