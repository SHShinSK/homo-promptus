# Discussion starter — Museum card call

**Category:** 🎭 Show and Tell  
**Title (copy):** `Call for Museum cards: share your Promptus / Delegans moment (PR-ready)`  
**Title (참고):** `Museum 카드 모집: Promptus / Delegans 순간을 공유해 주세요 (PR 가능)`

---

## Body (paste below) / 본문 (아래 전체 복사)

### EN

The **Species Museum** is the easiest way to contribute: one JSON file = one card in the portal.

**What makes a good card?**

- A **specific habit or UI moment** (not “AI is bad” or “users are dumb”)  
- Plain text `title` + `body` in **both** `en` and `ko` ([schema](https://github.com/SHShinSK/homo-promptus/blob/main/docs/card-schema.md))  
- Species tag: `promptus` or `delegans`  
- Optional tags: `work`, `agent`, `meeting`, `ci`, …

**Examples already in the repo**

- Delegans: “Surely fixed already” / “이미 고쳐졌겠지”  
- Promptus: “Four fields are enough” / “네 칸이면 충분”  
- See all: [`content/cards/`](https://github.com/SHShinSK/homo-promptus/tree/main/content/cards)

**How to submit**

1. Comment here with your draft (EN + KO) — we can refine tone together  
2. Or open a PR: `content/cards/011-your-slug.json`  
3. Or open issue [**Museum card** template](https://github.com/SHShinSK/homo-promptus/issues/new?template=satire-card.yml)

**License:** CC0 — cards are public-domain humor material.

---

#### Template (copy for your comment)

```json
{
  "id": "011-your-slug",
  "species": "delegans",
  "title": {
    "en": "English title",
    "ko": "한국어 제목"
  },
  "body": {
    "en": "One or two sentences. What happened? What was delegated or skipped?",
    "ko": "한두 문장. 무슨 일이었나요? 무엇을 위임·생략했나요?"
  },
  "tags": ["work"],
  "locale": "en",
  "author": "your-github-handle",
  "created": "2026-05-30"
}
```

---

**Seed ideas (pick one and write your version)**

| # | EN hook | KO 훅 |
|---|---------|--------|
| A | “Summarize the contract” — never opened the PDF | “계약서 요약해줘” — PDF는 didnt-read |
| B | Agent fixed lint; human fixed nothing | 린트는 에이전트, 의미는 미검토 |
| C | Wrote four fields, then still said “just handle it” | 네 칸 채우고도 “알아서 해줘” |
| D | Cross-species reply flipped the whole UI | 반대 종으로 답하니 UI가 바뀜 |

Post your A/B/C/D or a new letter below. **Top voted drafts** may become official seed cards in the next release.

---

### KO

**Species Museum**은 가장 쉬운 기여 경로입니다. JSON 파일 하나 = 포털 카드 한 장.

**좋은 카드의 조건**

- **구체적인 습관·UI 순간** (“AI 나쁨” / “사용자 멍청” X)  
- `title`·`body`에 **en·ko 모두** ([스키마](https://github.com/SHShinSK/homo-promptus/blob/main/docs/card-schema.md))  
- `species`: `promptus` 또는 `delegans`  
- `tags` 선택: `work`, `agent`, `meeting` …

**저장소 예시:** [`content/cards/`](https://github.com/SHShinSK/homo-promptus/tree/main/content/cards)

**제출 방법**

1. 이 글에 초안 댓글 (영어+한국어) — 톤 같이 다듬기  
2. PR: `content/cards/011-your-slug.json`  
3. 이슈: [Museum card 템플릿](https://github.com/SHShinSK/homo-promptus/issues/new?template=satire-card.yml)

**라이선스:** CC0

---

#### 댓글용 템플릿

위 JSON 블록을 복사해 `011-` 슬러그와 본문만 바꿔 주세요.

---

**시드 아이디어:** 위 표 A~D 중 하나를 골라 **본인 버전**을 써 주세요. **추천 많은 초안**은 다음 릴리스 시드 카드 후보가 됩니다.

---

### Reactions to use / 추천 반응

`promptus` `delegans` `needs-context` `trusted-the-bot` (as labels in reply text or emoji story)
