# 기여 가이드

감사합니다. 작은 PR이 가장 환영됩니다.

## 시작하기

1. 저장소를 Fork 합니다.
2. `npm install` && `npm run dev`로 로컬 확인합니다.
3. 브랜치를 만든 뒤 PR을 엽니다.

## 기여 유형

| 유형 | 위치 | 라벨 예시 |
|------|------|-----------|
| 밈·Museum 카드 | `content/cards/*.json` | `satire`, `good first issue` |
| Delegans 카피 | `docs/copy-delegans.md`, `src/lib/copy.ts` | `satire` |
| Promptus 카피 | `src/lib/copy.ts` | `serious` |
| i18n | `src/lib/i18n.ts` | `good first issue` |
| UI 모드 분기 | `src/` | `mode:promptus`, `mode:delegans` |
| 아이디어 | Discussions → Ideas | — |

## Museum 카드 PR

1. [docs/card-schema.md](docs/card-schema.md) 스키마를 따릅니다.
2. `content/cards/NNN-slug.json` 파일을 추가합니다.
3. PR 설명에 카드 요약과 풍자 톤(습관·UX)을 한 줄로 적습니다.

## 톤 가이드

- 풍자 대상: **위임 습관**, **UI 편의의 극단**, **검증 생략**
- 금지: 개인 비하, “멍청함” 프레이밍

## 커밋 메시지

- `feat:`, `docs:`, `content:`, `fix:` 접두사 권장
- 한국어·영어 모두 가능

## 라이선스

코드 기여는 MIT, 콘텐츠 기여는 CC0로 제공되는 것으로 간주합니다.
