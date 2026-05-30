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
