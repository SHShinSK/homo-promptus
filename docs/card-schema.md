# Museum 카드 JSON 스키마

파일 위치: `content/cards/NNN-slug.json`

```json
{
  "id": "001-example",
  "species": "delegans",
  "title": "카드 제목",
  "body": "짧은 설명 또는 가상 대화",
  "tags": ["work", "agent"],
  "locale": "ko",
  "author": "community",
  "created": "2026-05-30"
}
```

| 필드 | 필수 | 설명 |
|------|------|------|
| `id` | ✓ | 고유 ID (파일명과 일치 권장) |
| `species` | ✓ | `promptus` \| `delegans` |
| `title` | ✓ | 제목 |
| `body` | ✓ | 본문 (마크다운 불가, plain text) |
| `tags` | | 문자열 배열 |
| `locale` | | `ko` \| `en` |
| `author` | | 기여자 표시 |
| `created` | | ISO 날짜 |

CC0로 기여됩니다. 개인·기업 실명 조롱 금지.
