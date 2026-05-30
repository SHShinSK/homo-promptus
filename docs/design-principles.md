# 디자인 원칙

## 1. 한 포털, 두 의식

같은 URL, 같은 기능, **다른 카피·기본값·밀도**.

## 2. Promptus는 동료, Delegans는 거울

Promptus UI는 차분하고 문서형. Delegans는 과장된 CTA와 패러디 — 사용자를 비하하지 않음.

## 3. 로컬·정적 우선

- 상태: `localStorage`
- 행동 로그: 옵트인, 서버 미전송
- Feed 1차: GitHub Discussions

## 4. 기여 = 콘텐츠 PR

밈 카드 JSON, 카피, i18n이 제품과 동일한 가치.

## 5. 접근성

모드 전환은 키보드·스크린리더에서도 명확한 라벨 제공.

## 6. AI는 두 종의 거울 / AI as a mirror

`/reactions`는 같은 요청에 대해 AI가 Promptus·Delegans 각각에게 어떻게 의견을 내고 반응하는지를 **나란히** 보여 준다. 핵심은 **AI가 사람을 평가하는 것이 아니라, 요청·습관에 반응**한다는 점이다. 의견 템플릿은 `content/ai-opinions/*.json`으로 분리해 누구나 PR로 기여할 수 있다.
