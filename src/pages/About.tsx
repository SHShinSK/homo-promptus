export function About() {
  return (
    <div className="species-surface rounded-2xl p-8 prose max-w-none space-y-6">
      <h1 className="m-0">About</h1>
      <section>
        <h2 className="text-teal-700">Homo Promptus 선언</h2>
        <p>
          AI 시대에 <strong>최소한의 생각</strong>을 포기하지 않습니다. 의도, 맥락,
          검증을 프롬프트에 남깁니다.
        </p>
        <p className="italic m-0">프롬프트는 위임이 아니라, 생각의 잔여물이다.</p>
      </section>
      <section>
        <h2 className="text-fuchsia-500">Homo Delegans 선언 (풍자)</h2>
        <p>
          생각까지 맡기는 편의를 익숙하게 만든 습관을 풍자합니다. 사용자를 비하하지
          않습니다.
        </p>
        <p className="italic m-0">생각은 선택이었는데, 이제 기본값이 위임이다.</p>
      </section>
      <p className="text-sm species-muted m-0">
        전문: <code>docs/manifesto-promptus.md</code>,{" "}
        <code>docs/manifesto-delegans.md</code>
      </p>
      <a
        href="https://github.com/SHShinSK/homo-promptus/blob/main/CONTRIBUTING.md"
        className="inline-block species-accent px-4 py-2 rounded-lg text-white no-underline"
      >
        기여 가이드
      </a>
    </div>
  );
}
