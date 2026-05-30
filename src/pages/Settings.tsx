import { useState } from "react";
import { Bi } from "@/components/Bi";
import { useSpecies } from "@/context/SpeciesContext";
import { common, settings as s } from "@/lib/i18n";
import { getNickname, setNickname } from "@/lib/storage";
import type { Species } from "@/lib/types";

export function Settings() {
  const { species, setSpecies: setSpeciesCtx, refreshStats } = useSpecies();
  const [nick, setNick] = useState(getNickname);

  function saveNick() {
    setNickname(nick);
    refreshStats();
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
    </div>
  );
}
