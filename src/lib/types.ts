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
