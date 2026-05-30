# Homo Promptus

**Two species of humans in the AI age (AI 시대 인간의 두 종)** — a gentle satire OSS portal for *Homo Promptus* and *Homo Delegans*. **UI: English primary + Korean parallel** on all copy.

> *Think a little, or think for me.*  
> *조금 생각할까, 생각까지 맡길까.*

[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![License: CC0-1.0](https://img.shields.io/badge/content-CC0-lightgrey.svg)](LICENSE-content)
[![Discussions](https://img.shields.io/github/discussions/SHShinSK/homo-promptus?label=discussions)](https://github.com/SHShinSK/homo-promptus/discussions)
[![Good first issues](https://img.shields.io/github/issues/SHShinSK/homo-promptus/good%20first%20issue?label=good%20first%20issues)](https://github.com/SHShinSK/homo-promptus/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

**Repo:** [github.com/SHShinSK/homo-promptus](https://github.com/SHShinSK/homo-promptus) · **Demo:** [shshinsk.github.io/homo-promptus](https://shshinsk.github.io/homo-promptus/)

---

## Collaborate — we welcome your PRs / 협업 환영

**This project is open for collaboration.** You do not need permission to start — comment, discuss, or open a small PR.

| Start here | EN | KO |
|------------|----|----|
| **Guide** | [CONTRIBUTING.md](CONTRIBUTING.md) | 기여 방법·톤·PR 크기 |
| **Talk** | [Discussions](https://github.com/SHShinSK/homo-promptus/discussions) | 아이디어·카드·카피 토론 |
| **Easy tasks** | [Good first issues](https://github.com/SHShinSK/homo-promptus/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) | 첫 PR용 이슈 |
| **Welcome thread** | [Discussion #1](https://github.com/SHShinSK/homo-promptus/discussions/1) | 소개·방향 제안 |

**Fastest contributions (≈15 min)**

1. **Museum card** — add `content/cards/012-your-slug.json` ([schema](docs/card-schema.md)) · [call thread #2](https://github.com/SHShinSK/homo-promptus/discussions/2) · example: `011-delegation-chain.json`
2. **AI Reactions** — add `content/ai-opinions/*.json` ([template](https://github.com/SHShinSK/homo-promptus/issues/7)) · try **[`/reactions`](https://shshinsk.github.io/homo-promptus/#/reactions)** on the demo
3. **Satire line** — propose EN+KO copy in [Discussion #3](https://github.com/SHShinSK/homo-promptus/discussions/3) or `src/lib/i18n.ts`
4. **Fix typo / i18n** — pick a [good first issue](https://github.com/SHShinSK/homo-promptus/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

**Code of conduct:** [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — satire targets **habits & UX**, not people. No “Delegans = stupid” framing.

---

## Vision / 비전

As AI and agents grow, humans may increasingly **only ask or only delegate**. We respond with **gentle satire** of habits and UX — not shame.

- **Homo Promptus** — leaves intent, context, verification in prompts  
- **Homo Delegans** — delegates even thinking and checking  

Switch species mode in the app: *which species was I today?*

---

## Quick start

```bash
git clone https://github.com/SHShinSK/homo-promptus.git
cd homo-promptus
npm install
npm run dev
```

## Structure

```
docs/              Manifesto, design, discussion starters
content/cards/     Species Museum (PR a JSON file)
src/               Vite + React portal
.github/           Issue & Discussion templates, Pages workflow
```

## License

- **Code:** [MIT](LICENSE)
- **Content / cards / memes:** [CC0](LICENSE-content)

## Roadmap

[ROADMAP.md](ROADMAP.md)
