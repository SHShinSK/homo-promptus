# Museum 카드 JSON 스키마

파일 위치: `content/cards/NNN-slug.json`

```json
{
  "id": "001-example",
  "species": "delegans",
  "title": { "en": "Card title", "ko": "카드 제목" },
  "body": {
    "en": "Short description or fictional dialogue",
    "ko": "짧은 설명 또는 가상 대화"
  },
  "tags": ["work", "agent"],
  "locale": "en",
  "author": "community",
  "created": "2026-05-30"
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✓ | Unique ID (match filename) |
| `species` | ✓ | `promptus` \| `delegans` |
| `title` | ✓ | `{ "en", "ko" }` — English primary, Korean parallel |
| `body` | ✓ | `{ "en", "ko" }` plain text |
| `tags` | | string array |
| `locale` | | default locale for PR (`en` recommended) |
| `author` | | 기여자 표시 |
| `created` | | ISO 날짜 |

CC0로 기여됩니다. 개인·기업 실명 조롱 금지.

---

## AI Opinion 템플릿 스키마

파일 위치: `content/ai-opinions/*.json` — `/reactions`에서 사용. `match` 단계별로 1개씩.

```json
{
  "id": "tier-one-line",
  "match": "oneLine",
  "promptus": {
    "opinion": { "en": "...", "ko": "..." },
    "reaction": { "en": "...", "ko": "..." },
    "tags": ["needs-context"]
  },
  "delegans": {
    "opinion": { "en": "...", "ko": "..." },
    "reaction": { "en": "...", "ko": "..." },
    "tags": ["trusted-the-bot"]
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✓ | Unique ID |
| `match` | ✓ | `empty` \| `oneLine` \| `fullContext` (입력 단계) |
| `promptus` / `delegans` | ✓ | 각 종에 대한 `opinion`·`reaction`(둘 다 `{ en, ko }`) + 선택 `tags` |
| `tags` | | `verified` \| `needs-context` \| `trusted-the-bot` \| `didnt-read` |

**원칙**: `opinion`/`reaction`은 **요청·습관**에 대한 것. 사람 비하·실명 금지. `opinion`은 AI의 생각, `reaction`은 AI의 행동/답변 스타일.
