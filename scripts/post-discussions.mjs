import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function getToken() {
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  const out = execSync(
    'git credential fill',
    {
      input: "protocol=https\nhost=github.com\n\n",
      encoding: "utf8",
    }
  );
  const m = out.match(/^password=(.+)$/m);
  if (!m) throw new Error("No GitHub token from git credential");
  return m[1].trim();
}

const REPO_ID = "R_kgDOSsUZow";
const posts = [
  {
    categoryId: "DIC_kwDOSsUZo84C-KKm",
    title:
      "Welcome: Two species in the AI age — how should Homo Promptus grow?",
    bodyFile: ".tmp-body-01.md",
  },
  {
    categoryId: "DIC_kwDOSsUZo84C-KKn",
    title:
      "Call for Museum cards: share your Promptus / Delegans moment (PR-ready)",
    bodyFile: ".tmp-body-02.md",
  },
  {
    categoryId: "DIC_kwDOSsUZo84C-KKk",
    title:
      "Satire & Copy: vote on Delegans UI lines (Promptus lines welcome)",
    bodyFile: ".tmp-body-03.md",
  },
];

const mutation = `
mutation($repoId: ID!, $catId: ID!, $title: String!, $body: String!) {
  createDiscussion(input: {repositoryId: $repoId, categoryId: $catId, title: $title, body: $body}) {
    discussion { url number id }
  }
}
`;

const pinMutation = `
mutation($id: ID!) {
  pinDiscussion(input: {discussionId: $id}) {
    discussion { url }
  }
}
`;

const token = getToken();
const urls = [];

for (const p of posts) {
  const body = readFileSync(join(root, p.bodyFile), "utf8");
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        repoId: REPO_ID,
        catId: p.categoryId,
        title: p.title,
        body,
      },
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(JSON.stringify(json.errors, null, 2));
    process.exit(1);
  }
  const d = json.data.createDiscussion.discussion;
  urls.push(d);
  console.log("Created:", d.url);
}

// Pin first discussion
const first = urls[0];
const pinRes = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: pinMutation,
    variables: { id: first.id },
  }),
});
const pinJson = await pinRes.json();
if (pinJson.errors) {
  console.warn("Pin failed:", JSON.stringify(pinJson.errors));
} else {
  console.log("Pinned:", first.url);
}

writeFileSync(
  join(root, "docs/discussions-posted.json"),
  JSON.stringify(urls, null, 2)
);
console.log("Done.");
