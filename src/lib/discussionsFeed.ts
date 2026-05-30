import { bi } from "./i18n";
import type { FeedPost, Species } from "./types";
import { DEFAULT_DISCUSSIONS_URL, mockFeedPosts } from "./feed";

const REPO_OWNER = "SHShinSK";
const REPO_NAME = "homo-promptus";

type GqlDiscussion = {
  number: number;
  title: string;
  body: string;
  url: string;
  createdAt: string;
  author: { login: string } | null;
  category: { name: string } | null;
};

function inferSpecies(d: GqlDiscussion): Species {
  const text = `${d.title} ${d.body}`.toLowerCase();
  const cat = d.category?.name?.toLowerCase() ?? "";
  if (cat.includes("satire") || cat.includes("show")) {
    if (
      text.includes("delegat") ||
      text.includes("approve") ||
      text.includes("알아서") ||
      text.includes("버그 고쳐")
    ) {
      return "delegans";
    }
  }
  if (
    text.includes("context") ||
    text.includes("verify") ||
    text.includes("맥락") ||
    text.includes("검증")
  ) {
    return "promptus";
  }
  if (
    text.includes("just handle") ||
    text.includes("skip") ||
    text.includes("trusted-the-bot") ||
    text.length < 80
  ) {
    return "delegans";
  }
  return "promptus";
}

function inferReactions(d: GqlDiscussion, species: Species): string[] {
  if (species === "promptus") {
    return d.body.length > 200 ? ["verified"] : ["needs-context"];
  }
  return ["trusted-the-bot", "didnt-read"];
}

function truncate(s: string, max: number): string {
  const t = s.replace(/\r\n/g, "\n").trim();
  if (t.length <= max) return t;
  return t.slice(0, max).trim() + "…";
}

function mapDiscussion(d: GqlDiscussion): FeedPost {
  const species = inferSpecies(d);
  const bodyShort = truncate(d.body || d.title, 280);
  const authorLogin = d.author?.login ?? "community";
  return {
    id: `gh-${d.number}`,
    species,
    author: bi(authorLogin, authorLogin),
    title: bi(d.title, d.title),
    body: bi(bodyShort, bodyShort),
    reactions: inferReactions(d, species),
  };
}

const DISCUSSIONS_QUERY = `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      discussions(first: 15, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          number
          title
          body
          url
          createdAt
          author { login }
          category { name }
        }
      }
    }
  }
`;

export type FeedLoadResult = {
  posts: FeedPost[];
  source: "github" | "mock";
};

export async function fetchDiscussionsFeed(): Promise<FeedLoadResult> {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: DISCUSSIONS_QUERY,
        variables: { owner: REPO_OWNER, name: REPO_NAME },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    const nodes: GqlDiscussion[] =
      json.data?.repository?.discussions?.nodes ?? [];
    if (nodes.length === 0) throw new Error("No discussions");
    return {
      posts: nodes.map(mapDiscussion),
      source: "github",
    };
  } catch {
    return { posts: mockFeedPosts, source: "mock" };
  }
}

export function discussionUrl(number: number): string {
  return `${DEFAULT_DISCUSSIONS_URL}/${number}`;
}
