/** English primary + Korean parallel (default UI language) */
export type Bi = { en: string; ko: string };

export const bi = (en: string, ko: string): Bi => ({ en, ko });

export const common = {
  siteTitle: bi("Two species of humans in the AI age", "AI 시대 인간의 두 종"),
  slogan: bi(
    "Think a little, or think for me.",
    "조금 생각할까, 생각까지 맡길까."
  ),
  diagnosisLabel: bi("Your diagnosis", "당신의 진단"),
  diagnosisHeader: bi("Diagnosis", "진단"),
  delegansRatio: bi("Delegans ratio today ~", "오늘 Delegans 비율 ~"),
  switchMode: bi("Switch mode", "모드 전환"),
  footer: bi(
    "Homo Promptus · open-source satire · tracking is local & opt-in",
    "Homo Promptus · 오픈소스 풍자 · 행동 추적은 로컬·옵트인"
  ),
  yes: bi("Yes", "예"),
  no: bi("No", "아니오"),
  save: bi("Save", "저장"),
  anonymousSpecies: bi("Anonymous species", "익명 종"),
};

export const nav = {
  home: bi("Home", "홈"),
  diagnosis: bi("Diagnosis", "종 진단"),
  play: bi("Play", "체험"),
  reactions: bi("AI Reactions", "AI 반응"),
  feed: bi("Feed", "피드"),
  museum: bi("Museum", "박물관"),
  scoreboard: bi("Scoreboard", "순위"),
  about: bi("About", "소개"),
  settings: bi("Settings", "설정"),
};

export const copy = {
  promptus: {
    tagline: bi("A species that thinks a little", "조금 생각하는 종"),
    modeLabel: bi("Homo Promptus", "Homo Promptus"),
    playTitle: bi("Prompt Lab", "Prompt Lab"),
    playSubtitle: bi(
      "Purpose · Context · Constraints · Verification",
      "목적 · 맥락 · 제약 · 검증"
    ),
    submit: bi("Run with thinking", "생각 포함하여 실행"),
    loading: bi("Applying context…", "맥락을 반영하는 중…"),
    resultTitle: bi("Result (sources & uncertainty shown)", "결과 (근거·불확실성 표시)"),
    desc: bi(
      "Leaves intent, context, and verification in prompts. Try the four fields in Prompt Lab.",
      "프롬프트에 의도·맥락·검증을 남기는 종. Prompt Lab에서 네 칸을 채워 보세요."
    ),
  },
  delegans: {
    tagline: bi("A species that delegates even thinking", "생각까지 맡기는 종"),
    modeLabel: bi("Homo Delegans", "Homo Delegans"),
    playTitle: bi("Delegate Dock", "Delegate Dock"),
    playSubtitle: bi("One line is enough™", "한 줄이면 충분합니다™"),
    submit: bi("Just handle it", "알아서 해줘"),
    loading: bi("AI is thinking… (you rest)", "AI가 생각 중… (당신은 쉬세요)"),
    resultTitle: bi("Summary (details collapsed)", "요약 (상세는 접혀 있음)"),
    desc: bi(
      "Asks or orders only. Delegate in one line at Delegate Dock.",
      "시키거나 묻기만 하는 종. Delegate Dock에서 한 줄로 위임해 보세요."
    ),
  },
} as const;

export const home = {
  takeDiagnosis: bi("Take species diagnosis", "종 진단 받기"),
  tryPlay: bi("Try", "체험"),
  discussGithub: bi("Discuss & contribute on GitHub", "GitHub에서 토론·기여하기"),
  collaborateTitle: bi("Open for collaboration", "협업을 환영합니다"),
  collaborateBody: bi(
    "PRs welcome: Museum cards, satire copy (EN+KO), small fixes. No permission needed.",
    "PR 환영: Museum 카드, 풍자 카피(영·한), 작은 수정. 허락 없이 시작해도 됩니다."
  ),
  contributing: bi("Contributing guide", "기여 가이드"),
  discussions: bi("Discussions", "토론"),
  goodFirstIssues: bi("Good first issues", "첫 PR 이슈"),
};

export const diagnosis = {
  resultTitle: bi("Diagnosis result", "종 진단 결과"),
  hybridDesc: bi(
    "You swing between both species. Switch mode in the header.",
    "상황에 따라 두 종을 오갑니다. 헤더에서 모드를 바꿔 보세요."
  ),
  delegansDesc: bi(
    "Close to peak delegation. (Satire — we mock habits, not people.)",
    "위임의 극치에 가깝습니다. (풍자입니다 — 습관을 비웁니다)"
  ),
  promptusDesc: bi(
    "You tend to leave a minimum of thought behind.",
    "최소한의 생각을 남기는 편입니다."
  ),
  goPlay: bi("Go to Play", "체험하러 가기"),
  questionOf: bi("Question", "문항"),
  instruction: bi("Yes if it applies, No if not", "해당되면 예, 아니면 아니오"),
};

export const play = {
  fields: {
    purpose: bi("Purpose", "목적"),
    context: bi("Context", "맥락"),
    constraint: bi("Constraints", "제약"),
    verify: bi("Verification question", "검증 질문"),
  },
  placeholder: bi("Enter", "입력"),
  checklist: bi(
    "Thinking checklist: Is intent one sentence? Do you have a way to verify?",
    "생각 체크리스트: 의도가 한 문장인가요? 검증 방법이 있나요?"
  ),
  delegatePlaceholder: bi("Just handle it", "알아서 해줘"),
};

export const reactions = {
  title: bi("AI Reactions", "AI 반응"),
  subtitle: bi(
    "One request, two species — see how AI treats each.",
    "한 요청, 두 종 — AI가 각각을 어떻게 대하는지 보세요."
  ),
  guardrail: bi(
    "AI reacts to the request and the habit, not the person.",
    "AI는 사람이 아니라 요청과 습관에 반응합니다."
  ),
  presetLabel: bi("Try a scenario", "시나리오를 골라 보세요"),
  inputLabel: bi("Your request (one line)", "당신의 요청 (한 줄)"),
  contextLabel: bi("Optional context", "선택적 맥락"),
  contextToggle: bi("Add context", "맥락 추가"),
  compare: bi("Compare AI reactions", "AI 반응 비교"),
  comparing: bi("Comparing…", "비교하는 중…"),
  opinionLabel: bi("AI opinion", "AI 의견"),
  reactionLabel: bi("AI reaction", "AI 행동"),
  forPromptus: bi("For a Homo Promptus request", "Homo Promptus 요청에 대해"),
  forDelegans: bi("For a Homo Delegans request", "Homo Delegans 요청에 대해"),
  fromPlay: bi("See how AI treats both species →", "AI가 두 종을 어떻게 대하는지 보기 →"),
  presets: [
    bi("Fix the bug", "버그 고쳐줘"),
    bi("Summarize the contract", "계약서 요약해줘"),
    bi("Plan our meeting", "회의 정리해줘"),
    bi("Write the release notes", "릴리스 노트 써줘"),
    bi("Review this PR", "이 PR 리뷰해줘"),
  ],
};

export const museum = {
  title: bi("Species Museum", "Species Museum"),
  subtitle: bi(
    "Typical Promptus / Delegans moments — add cards via PR",
    "전형적인 Promptus / Delegans 순간 — PR로 카드를 추가하세요"
  ),
};

export const feed = {
  title: bi("Homo Feed", "Homo Feed"),
  subtitle: bi(
    "MVP: mock timeline + GitHub Discussions coming soon",
    "MVP: 목업 타임라인 + GitHub Discussions 연동 예정"
  ),
  discuss: bi("Discuss on GitHub Discussions →", "GitHub Discussions에서 토론하기 →"),
};

export const scoreboard = {
  title: bi("Delegation Scoreboard", "Delegation Scoreboard"),
  subtitle: bi(
    "Species diligence parody — not good/bad. Data stays on device only.",
    "종 성실도 패러디 — 점수는 좋다/나쁘다가 아닙니다. 데이터는 기기 로컬만."
  ),
  optIn: bi("Opt in to behavior log (no server upload)", "행동 로그 수집 옵트인 (서버 전송 없음)"),
  promptusActions: bi("Promptus actions", "Promptus 행동"),
  delegansActions: bi("Delegans actions", "Delegans 행동"),
  ratio: bi("Delegans ratio", "Delegans 비율"),
  lastUpdated: bi("Last updated", "마지막 갱신"),
  optInHint: bi("Opt in to accumulate local stats when using /play.", "옵트인하면 /play 사용 시 로컬 통계가 쌓입니다."),
  leaderboardNote: bi(
    'Example title: "Most Homo Delegans team this week" — public sharing via snapshot later.',
    "리더보드 제목 예: 「이번 주 가장 Homo Delegans한 팀」— 공개는 추후 스냅샷 공유만."
  ),
};

export const about = {
  title: bi("About", "소개"),
  promptusHeading: bi("Homo Promptus manifesto", "Homo Promptus 선언"),
  promptusBody: bi(
    "We do not give up a minimum of thought in the AI age. We leave intent, context, and verification in prompts.",
    "AI 시대에 최소한의 생각을 포기하지 않습니다. 의도, 맥락, 검증을 프롬프트에 남깁니다."
  ),
  promptusQuote: bi(
    "A prompt is not delegation; it is the residue of thought.",
    "프롬프트는 위임이 아니라, 생각의 잔여물이다."
  ),
  delegansHeading: bi("Homo Delegans manifesto (satire)", "Homo Delegans 선언 (풍자)"),
  delegansBody: bi(
    "We satirize the habit of delegating even thinking — never the person.",
    "생각까지 맡기는 편의를 익숙하게 만든 습관을 풍자합니다. 사용자를 비하하지 않습니다."
  ),
  delegansQuote: bi(
    "Thinking was a choice; now delegation is the default.",
    "생각은 선택이었는데, 이제 기본값이 위임이다."
  ),
  fullDocs: bi("Full text", "전문"),
  contributing: bi("Contributing guide", "기여 가이드"),
};

export const settings = {
  title: bi("Settings", "설정"),
  nickname: bi("Nickname (local)", "닉네임 (로컬)"),
  defaultMode: bi("Default mode", "기본 모드"),
  aiTitle: bi("AI provider (optional)", "AI 제공자 (선택)"),
  aiMockOnly: bi("Use mock only (default)", "목업만 사용 (기본)"),
  aiKeyLabel: bi("API key (stored in this browser only)", "API 키 (이 브라우저에만 저장)"),
  aiKeyHint: bi(
    "BYOK is not active in the static demo (CORS). Stored locally for future local/proxy use. Never sent to our servers.",
    "정적 데모에서는 BYOK가 비활성입니다(CORS). 추후 로컬·프록시용으로 브라우저에만 저장되며, 우리 서버로 전송되지 않습니다."
  ),
};

export const speciesLabels = {
  promptus: bi("Homo Promptus", "Homo Promptus"),
  delegans: bi("Homo Delegans", "Homo Delegans"),
  hybrid: bi("Homo Promptus × Delegans", "Homo Promptus × Delegans"),
};
