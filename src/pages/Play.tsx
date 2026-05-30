import { useState } from "react";
import { useCopy, useSpecies } from "@/context/SpeciesContext";
import { mockRespond } from "@/lib/mockAi";
import { recordAction } from "@/lib/storage";

export function Play() {
  const { species } = useSpecies();
  const c = useCopy();
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [purpose, setPurpose] = useState("");
  const [context, setContext] = useState("");
  const [constraint, setConstraint] = useState("");
  const [verify, setVerify] = useState("");
  const [oneLiner, setOneLiner] = useState("");

  async function run() {
    setLoading(true);
    recordAction(species);
    await new Promise((r) => setTimeout(r, 800));
    setOutput(
      mockRespond(species, {
        purpose,
        context,
        constraint,
        verify,
        oneLiner,
      })
    );
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="m-0">{c.playTitle}</h1>
        <p className="species-muted m-0">{c.playSubtitle}</p>
      </div>

      {species === "promptus" ? (
        <div className="species-surface rounded-xl p-6 grid gap-4">
          {(
            [
              ["목적", purpose, setPurpose],
              ["맥락", context, setContext],
              ["제약", constraint, setConstraint],
              ["검증 질문", verify, setVerify],
            ] as const
          ).map(([label, val, set]) => (
            <label key={label} className="block">
              <span className="text-sm font-medium">{label}</span>
              <textarea
                className="mt-1 w-full rounded-lg border p-2 min-h-[72px] bg-white text-slate-900"
                value={val}
                onChange={(e) => set(e.target.value)}
                placeholder={`${label}을 입력하세요`}
              />
            </label>
          ))}
          <p className="text-xs species-muted m-0">
            생각 체크리스트: 의도가 한 문장인가요? 검증 방법이 있나요?
          </p>
        </div>
      ) : (
        <div className="species-surface rounded-xl p-6 space-y-4">
          <input
            className="w-full text-xl p-4 rounded-xl border-2 border-fuchsia-500 bg-purple-950 text-white"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            placeholder="알아서 해줘"
          />
          <div className="flex flex-wrap gap-2">
            {["Auto Context™", "Skip Thinking", "Approve All"].map((btn) => (
              <button
                key={btn}
                type="button"
                className="px-3 py-2 rounded-full bg-fuchsia-600 text-white text-sm border-0 cursor-pointer"
                onClick={() => setOneLiner(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={loading}
        onClick={run}
        className={`w-full py-4 rounded-xl border-0 cursor-pointer font-bold text-lg ${
          species === "delegans" ? "bg-fuchsia-500 text-white" : "species-accent"
        }`}
      >
        {loading ? c.loading : c.submit}
      </button>

      {output && (
        <pre className="species-surface rounded-xl p-4 whitespace-pre-wrap text-sm m-0">
          <strong>{c.resultTitle}</strong>
          {"\n\n"}
          {output}
        </pre>
      )}
    </div>
  );
}
