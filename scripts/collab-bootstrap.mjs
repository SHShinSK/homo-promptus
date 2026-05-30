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
const REPO = "SHShinSK/homo-promptus";

async function gql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors, null, 2));
  return json.data;
}

const labels = [
  { name: "good first issue", color: "7057ff", description: "Good for newcomers" },
  { name: "satire", color: "d876e3", description: "Satire copy or museum card" },
  { name: "content", color: "0e8a16", description: "content/ cards or docs" },
  { name: "i18n", color: "1d76db", description: "English + Korean copy" },
];

for (const l of labels) {
  try {
    await fetch(`https://api.github.com/repos/${REPO}/labels`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(l),
    });
    console.log("Label:", l.name);
  } catch {
    /* exists */
  }
}

const issues = [
  {
    title: "Add Museum card #011 (EN + KO JSON)",
    labels: ["good first issue", "content", "satire"],
    body: `## EN
Add one card under \`content/cards/011-your-slug.json\` following [card-schema.md](https://github.com/SHShinSK/homo-promptus/blob/main/docs/card-schema.md).

- Species: \`promptus\` or \`delegans\`
- Satire **habits/UX only** — no real-name mockery
- License: CC0

See [Discussion #2](https://github.com/SHShinSK/homo-promptus/discussions/2) for examples.

## KO
\`content/cards/011-슬러그.json\` 카드 1장 PR. 스키마 준수, en+ko, 습관·UX 풍자만.`,
  },
  {
    title: "Propose one new Delegans loading line (i18n.ts)",
    labels: ["good first issue", "satire", "i18n"],
    body: `## EN
Add one Delegans loading string to \`src/lib/i18n.ts\` (and optionally \`docs/copy-delegans.md\`).

- EN + KO (\`bi("...", "...")\`)
- Tone: *too convenient*, never insulting

Vote context: [Discussion #3](https://github.com/SHShinSK/homo-promptus/discussions/3)

## KO
Delegans 로딩 문구 1개를 \`src/lib/i18n.ts\`에 추가 (en+ko). 비하 금지, 편의 과장 톤.`,
  },
  {
    title: "Add 6th species diagnosis quiz question (EN + KO)",
    labels: ["good first issue", "i18n"],
    body: `## EN
Add a 5th or 6th question to \`src/lib/quiz.ts\` with \`text: { en, ko }\` and weights.

Keep it about **habits** (prompting vs delegating), not intelligence.

## KO
\`src/lib/quiz.ts\`에 종 진단 문항 1개 추가 (en+ko, 습관 기반).`,
  },
];

for (const issue of issues) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
    }),
  });
  const json = await res.json();
  if (json.message) throw new Error(json.message);
  console.log("Issue:", json.html_url);
}

const welcomeComment = `### Welcome, contributors! / 기여자 환영

**EN:** This thread is the front door. Say hi, tell us which species you are today (Promptus / Delegans / hybrid), or drop one idea. **First PRs are welcome** — Museum card JSON, one line of copy, typo fixes. See [good first issues](https://github.com/SHShinSK/homo-promptus/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and [CONTRIBUTING.md](https://github.com/SHShinSK/homo-promptus/blob/main/CONTRIBUTING.md).

**KO:** 여기서 인사하고, 오늘의 종(Promptus/Delegans/hybrid)이나 아이디어를 남겨 주세요. **첫 PR 환영** — Museum 카드 JSON, 카피 한 줄, 오타 수정. [good first issues](https://github.com/SHShinSK/homo-promptus/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) · [CONTRIBUTING](https://github.com/SHShinSK/homo-promptus/blob/main/CONTRIBUTING.md)

Maintainer: @SHShinSK`;

const data = await gql(
  `query { repository(owner: "SHShinSK", name: "homo-promptus") { discussion(number: 1) { id } } }`
);
const discussionId = data.repository.discussion.id;

await gql(
  `mutation($id: ID!, $body: String!) {
    addDiscussionComment(input: {discussionId: $id, body: $body}) {
      comment { url }
    }
  }`,
  { id: discussionId, body: welcomeComment }
);
console.log("Comment added on discussion #1");

console.log("Done.");
