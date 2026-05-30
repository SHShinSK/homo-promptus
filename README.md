# Homo Promptus

**AI 시대 인간의 두 종(種)** — 조금 생각하는 *Homo Promptus*와 생각까지 맡기는 *Homo Delegans*를 한 포털에서 체험하는 가벼운 풍자 오픈소스 프로젝트입니다.

> *Think a little, or think for me.*  
> *조금 생각할까, 생각까지 맡길까.*

[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![License: CC0-1.0](https://img.shields.io/badge/content-CC0-lightgrey.svg)](LICENSE-content)

## 비전

AI와 에이전트가 발전하면서 인간은 점점 **시키거나 묻기만** 하는 존재가 될 수 있다는 관찰을, 비난이 아닌 **습관·UX의 풍자**로 돌아보는 플랫폼입니다.

- **Homo Promptus** — 프롬프트에 의도·맥락·검증을 남기는 사람 (진지한 “요즘 말”)
- **Homo Delegans** — 생각·형식·결과 확인까지 위임하는 사람 (가벼운 풍자)

## 빠른 시작

```bash
git clone https://github.com/SHShinSK/homo-promptus.git
cd homo-promptus
npm install
npm run dev
```

배포 미리보기: `npm run build` 후 `dist/`를 GitHub Pages에 게시합니다.

## 저장소 구조

```
docs/              Manifesto, 디자인 원칙, 카드 스키마
content/cards/     Species Museum JSON (PR로 기여)
src/               Vite + React 포털
.github/           이슈·Discussion 템플릿, Pages 워크플로
```

## 기여하기

[CONTRIBUTING.md](CONTRIBUTING.md)를 읽어 주세요. 카피 한 줄, 밈 카드 JSON, i18n, UI 모드 분기 등 작은 PR을 환영합니다.

- **Ideas** — [Discussions](https://github.com/SHShinSK/homo-promptus/discussions)에서 아이디어 토론
- **밈 카드** — `content/cards/*.json` 추가 PR
- **풍자 카피** — `docs/copy-delegans.md` 또는 UI `src/lib/copy.ts`

## 라이선스

- **코드**: [MIT](LICENSE)
- **콘텐츠·밈·카드**: [CC0 1.0](LICENSE-content)

## 로드맵

[ROADMAP.md](ROADMAP.md) 참고.

## 행동 강령

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — 개인·기업 실명 조롱 금지, “Delegans = 멍청함” 프레이밍 금지.
