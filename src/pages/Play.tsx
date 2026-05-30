import { useState } from "react";
import { Link } from "react-router-dom";
import { Bi } from "@/components/Bi";
import { useCopy, useSpecies } from "@/context/SpeciesContext";
import { play as p, reactions as r } from "@/lib/i18n";
import { mockRespond } from "@/lib/mockAi";
import { stashPlayInput } from "@/lib/playInputBridge";
import { recordAction } from "@/lib/storage";

const promptFields = [
  { key: "purpose" as const, label: p.fields.purpose },
  { key: "context" as const, label: p.fields.context },
  { key: "constraint" as const, label: p.fields.constraint },
  { key: "verify" as const, label: p.fields.verify },
];

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

  const values = { purpose, context, constraint, verify };
  const setters = {
    purpose: setPurpose,
    context: setContext,
    constraint: setConstraint,
    verify: setVerify,
  };

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
        <h1 className="m-0">{c.playTitle.en}</h1>
        <p className="text-sm species-muted m-0">{c.playTitle.ko}</p>
        <Bi text={c.playSubtitle} variant="block" className="species-muted mt-1" />
      </div>

      {species === "promptus" ? (
        <div className="species-surface rounded-xl p-6 grid gap-4">
          {promptFields.map(({ key, label }) => (
            <label key={key} className="block">
              <Bi text={label} variant="label" />
              <textarea
                className="mt-1 w-full rounded-lg border p-2 min-h-[72px] bg-white text-slate-900"
                value={values[key]}
                onChange={(e) => setters[key](e.target.value)}
                placeholder={`${p.placeholder.en} ${label.en} / ${p.placeholder.ko} ${label.ko}`}
              />
            </label>
          ))}
          <Bi text={p.checklist} variant="block" className="text-xs species-muted" />
        </div>
      ) : (
        <div className="species-surface rounded-xl p-6 space-y-4">
          <input
            className="w-full text-xl p-4 rounded-xl border-2 border-fuchsia-500 bg-purple-950 text-white"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            placeholder={`${p.delegatePlaceholder.en} / ${p.delegatePlaceholder.ko}`}
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
        {loading ? (
          <Bi text={c.loading} variant="block" />
        ) : (
          <Bi text={c.submit} variant="block" />
        )}
      </button>

      {output && (
        <>
          <pre className="species-surface rounded-xl p-4 whitespace-pre-wrap text-sm m-0">
            <strong>
              {c.resultTitle.en}
              {"\n"}
              {c.resultTitle.ko}
            </strong>
            {"\n\n"}
            {output}
          </pre>
          <Link
            to="/reactions"
            onClick={() =>
              stashPlayInput({ purpose, context, constraint, verify, oneLiner })
            }
            className="inline-block no-underline text-sm font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            <Bi text={r.fromPlay} variant="inline" />
          </Link>
        </>
      )}
    </div>
  );
}
