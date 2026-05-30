import { execSync } from "child_process";

function getToken() {
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  const out = execSync("git credential fill", {
    input: "protocol=https\nhost=github.com\n\n",
    encoding: "utf8",
  });
  const m = out.match(/^password=(.+)$/m);
  if (!m) throw new Error("No GitHub token");
  return m[1].trim();
}

const token = getToken();
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function gql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) console.warn("GraphQL:", JSON.stringify(json.errors));
  return json;
}

const repoQ = await gql(
  `query { repository(owner: "SHShinSK", name: "homo-promptus") {
    id
    discussionCategories(first: 20) { nodes { id name } }
  }}`
);
const repoId = repoQ.data?.repository?.id;
const existing = repoQ.data?.repository?.discussionCategories?.nodes ?? [];

// Governance category (skip if exists)
if (!existing.some((c) => c.name === "Governance") && repoId) {
  const create = await gql(
    `mutation($repoId: ID!, $name: String!, $desc: String!) {
      createDiscussionCategory(input: {
        repositoryId: $repoId
        name: $name
        description: $desc
        emoji: ":scales:"
      }) {
        discussionCategory { id name }
      }
    }`,
    {
      repoId,
      name: "Governance",
      desc:
        "CoC, moderation, controversial cards / 행동 강령·모더레이션·논란 카드",
    }
  );
  console.log("Governance category:", create.data?.createDiscussionCategory?.discussionCategory?.name ?? "failed");
} else {
  console.log("Governance category already exists");
}

// Comment on #1
const commentBody = `### Update / 업데이트

**EN:** \`/reactions\` is live on the demo — compare how AI **opinion** and **reaction** differ for Homo Promptus vs Homo Delegans requests. Try the scenario chips (no typing needed).

**Demo:** https://shshinsk.github.io/homo-promptus/#/reactions

**KO:** 데모에 **AI 반응** 페이지가 올라갔습니다. 같은 요청에 대해 Promptus / Delegans 각각 AI가 어떻게 **생각**하고 **행동**하는지 나란히 비교해 보세요. 시나리오 칩으로 바로 체험할 수 있습니다.

Maintainer @SHShinSK`;

const d1 = await gql(
  `query { repository(owner: "SHShinSK", name: "homo-promptus") {
    discussion(number: 1) { id }
  }}`
);
const id = d1.data?.repository?.discussion?.id;
if (id) {
  const c = await gql(
    `mutation($id: ID!, $body: String!) {
      addDiscussionComment(input: {discussionId: $id, body: $body}) {
        comment { url }
      }
    }`,
    { id, body: commentBody }
  );
  console.log("Comment:", c.data?.addDiscussionComment?.comment?.url ?? "failed");
}

// Pin via REST (GraphQL pinDiscussion unavailable)
const pinRes = await fetch(
  "https://api.github.com/repos/SHShinSK/homo-promptus/discussions/1",
  {
    method: "GET",
    headers: { ...headers, Accept: "application/vnd.github+json" },
  }
);
if (pinRes.ok) {
  const pinPut = await fetch(
    "https://api.github.com/repos/SHShinSK/homo-promptus/discussions/1",
    {
      method: "PATCH",
      headers: {
        ...headers,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ pinned: true }),
    }
  );
  const pinJson = await pinPut.json();
  console.log("Pin attempt:", pinPut.status, pinJson.pinned ?? pinJson.message ?? "ok");
}

console.log("Done.");
