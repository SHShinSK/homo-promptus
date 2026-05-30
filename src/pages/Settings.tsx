import { useState } from "react";
import { Bi } from "@/components/Bi";
import { useSpecies } from "@/context/SpeciesContext";
import { common, settings as s } from "@/lib/i18n";
import { getAiKey, getNickname, setAiKey, setNickname } from "@/lib/storage";
import type { Species } from "@/lib/types";

export function Settings() {
  const { species, setSpecies: setSpeciesCtx, refreshStats } = useSpecies();
  const [nick, setNick] = useState(getNickname);
  const [aiKey, setAiKeyState] = useState(getAiKey);

  function saveNick() {
    setNickname(nick);
    refreshStats();
  }

  function saveAiKey() {
    setAiKey(aiKey);
  }

  function pickMode(mode: Species) {
    setSpeciesCtx(mode);
  }

  return (
    <div className="species-surface rounded-2xl p-8 max-w-lg space-y-6">
      <Bi text={s.title} variant="heading" as="h1" className="m-0" />

      <div>
        <Bi text={s.nickname} variant="label" className="mb-1" />
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-lg border p-2"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder={common.anonymousSpecies.en}
          />
          <button
            type="button"
            className="species-accent px-3 py-2 rounded-lg border-0 cursor-pointer text-white"
            onClick={saveNick}
          >
            <Bi text={common.save} variant="block" />
          </button>
        </div>
      </div>

      <div>
        <Bi text={s.defaultMode} variant="label" className="mb-2" />
        <div className="flex gap-2">
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg border-0 cursor-pointer ${
              species === "promptus"
                ? "species-accent text-white"
                : "species-accent-outline bg-transparent"
            }`}
            onClick={() => pickMode("promptus")}
          >
            Promptus
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg border-0 cursor-pointer ${
              species === "delegans"
                ? "bg-fuchsia-600 text-white"
                : "species-accent-outline bg-transparent"
            }`}
            onClick={() => pickMode("delegans")}
          >
            Delegans
          </button>
        </div>
      </div>

      <div>
        <Bi text={s.aiTitle} variant="label" className="mb-1" />
        <label className="flex items-center gap-2 text-sm mb-2">
          <input type="checkbox" checked readOnly />
          <Bi text={s.aiMockOnly} variant="inline" />
        </label>
        <Bi text={s.aiKeyLabel} variant="label" className="mb-1" />
        <div className="flex gap-2">
          <input
            type="password"
            className="flex-1 rounded-lg border p-2"
            value={aiKey}
            onChange={(e) => setAiKeyState(e.target.value)}
            placeholder="sk-…"
            autoComplete="off"
          />
          <button
            type="button"
            className="species-accent px-3 py-2 rounded-lg border-0 cursor-pointer text-white"
            onClick={saveAiKey}
          >
            <Bi text={common.save} variant="block" />
          </button>
        </div>
        <Bi text={s.aiKeyHint} variant="block" className="text-xs species-muted mt-2" />
      </div>
    </div>
  );
}
