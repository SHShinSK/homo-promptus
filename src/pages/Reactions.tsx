import { useEffect, useState } from "react";
import { AIOpinionPanel } from "@/components/AIOpinionPanel";
import { Bi } from "@/components/Bi";
import { reactions as r } from "@/lib/i18n";
import { getAiOpinionsForBoth } from "@/lib/aiOpinions";
import { takePlayInput } from "@/lib/playInputBridge";
import { recordAction } from "@/lib/storage";
import type { AiSpeciesResponse } from "@/lib/types";

export function Reactions() {
  const [oneLiner, setOneLiner] = useState("");
  const [context, setContext] = useState("");
  const [showContext, setShowContext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    promptus: AiSpeciesResponse;
    delegans: AiSpeciesResponse;
  } | null>(null);

  useEffect(() => {
    const stashed = takePlayInput();
    if (stashed) {
      setOneLiner(stashed.oneLiner ?? stashed.purpose ?? "");
      const ctx = [stashed.context, stashed.constraint, stashed.verify]
        .filter(Boolean)
        .join(" · ");
      if (ctx) {
        setContext(ctx);
        setShowContext(true);
      }
    }
  }, []);

  async function compare() {
    setLoading(true);
    recordAction("promptus");
    recordAction("delegans");
    await new Promise((res) => setTimeout(res, 600));
    setResult(
      getAiOpinionsForBoth({
        oneLiner,
        context,
        purpose: oneLiner,
      })
    );
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <Bi text={r.title} variant="heading" as="h1" className="m-0" />
        <Bi text={r.subtitle} variant="block" className="species-muted mt-2" />
        <p
          className="text-xs mt-2 px-3 py-2 rounded-lg"
          style={{ background: "var(--color-accent-soft)" }}
        >
          <Bi text={r.guardrail} variant="block" />
        </p>
      </div>

      <div className="species-surface rounded-xl p-6 space-y-4">
        <Bi text={r.presetLabel} variant="label" />
        <div className="flex flex-wrap gap-2">
          {r.presets.map((preset) => (
            <button
              key={preset.en}
              type="button"
              className="species-accent-outline px-3 py-1.5 rounded-full text-sm cursor-pointer bg-transparent"
              onClick={() => setOneLiner(preset.en)}
              title={preset.ko}
            >
              {preset.en} · {preset.ko}
            </button>
          ))}
        </div>

        <label className="block">
          <Bi text={r.inputLabel} variant="label" className="mb-1" />
          <input
            className="w-full rounded-lg border p-2 bg-white text-slate-900"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            placeholder="Fix the bug / 버그 고쳐줘"
          />
        </label>

        {showContext ? (
          <label className="block">
            <Bi text={r.contextLabel} variant="label" className="mb-1" />
            <textarea
              className="w-full rounded-lg border p-2 min-h-[72px] bg-white text-slate-900"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </label>
        ) : (
          <button
            type="button"
            className="text-sm underline cursor-pointer bg-transparent border-0 p-0"
            style={{ color: "var(--color-accent)" }}
            onClick={() => setShowContext(true)}
          >
            + <Bi text={r.contextToggle} variant="inline" />
          </button>
        )}

        <button
          type="button"
          disabled={loading}
          onClick={compare}
          className="w-full py-3 rounded-xl border-0 cursor-pointer font-bold species-accent"
        >
          {loading ? (
            <Bi text={r.comparing} variant="block" />
          ) : (
            <Bi text={r.compare} variant="block" />
          )}
        </button>
      </div>

      {result && (
        <div className="grid md:grid-cols-2 gap-4">
          <AIOpinionPanel data={result.promptus} />
          <AIOpinionPanel data={result.delegans} />
        </div>
      )}
    </div>
  );
}
