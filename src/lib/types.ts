import type { Bi } from "./i18n";

export type Species = "promptus" | "delegans";
export type DiagnosisResult = Species | "hybrid";

export interface MuseumCard {
  id: string;
  species: Species;
  title: Bi;
  body: Bi;
  tags?: string[];
  locale?: string;
  author?: string;
  created?: string;
}

export interface FeedPost {
  id: string;
  species: Species;
  author: Bi;
  title: Bi;
  body: Bi;
  reactions: string[];
}

export interface BehaviorLog {
  promptusActions: number;
  delegansActions: number;
  lastUpdated: string;
}

export type ReactionTag =
  | "verified"
  | "needs-context"
  | "trusted-the-bot"
  | "didnt-read";

export type InputTier = "empty" | "oneLine" | "fullContext";

export interface AiSpeciesResponse {
  species: Species;
  opinion: Bi;
  reaction: Bi;
  tags?: ReactionTag[];
}

export interface OpinionTemplate {
  id: string;
  match: InputTier;
  promptus: { opinion: Bi; reaction: Bi; tags?: ReactionTag[] };
  delegans: { opinion: Bi; reaction: Bi; tags?: ReactionTag[] };
}
