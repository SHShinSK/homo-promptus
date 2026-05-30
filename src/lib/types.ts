export type Species = "promptus" | "delegans";
export type DiagnosisResult = Species | "hybrid";

export interface MuseumCard {
  id: string;
  species: Species;
  title: string;
  body: string;
  tags?: string[];
  locale?: string;
  author?: string;
  created?: string;
}

export interface FeedPost {
  id: string;
  species: Species;
  author: string;
  title: string;
  body: string;
  reactions: string[];
}

export interface BehaviorLog {
  promptusActions: number;
  delegansActions: number;
  lastUpdated: string;
}
