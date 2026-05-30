import { useState } from "react";
import { useSpecies } from "@/context/SpeciesContext";
import { getNickname, setNickname } from "@/lib/storage";
import type { Species } from "@/lib/types";

export function Settings() {
  const { species, setSpecies: setSpeciesCtx, refreshStats } = useSpecies();
  const [nick, setNick] = useState(getNickname);

  function saveNick() {
    setNickname(nick);
    refreshStats();
  }

  function pickMode(s: Species) {
    setSpeciesCtx(s);
  }

  return (
    <div className="species-surface rounded-2xl p-8 max-w-lg space-y-6">
      <h1 className="m-0">설정</h1>

      <div>
        <label className="block text-sm font-medium mb-1">닉네임 (로컬)</label>
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-lg border p-2"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
          <button
            type="button"
            className="species-accent px-3 py-2 rounded-lg border-0 cursor-pointer"
            onClick={saveNick}
          >
            저장
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium m-0 mb-2">기본 모드</p>
        <div className="flex gap-2">
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg border-0 cursor-pointer ${
              species === "promptus" ? "species-accent text-white" : "species-accent-outline bg-transparent"
            }`}
            onClick={() => pickMode("promptus")}
          >
            Promptus
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-lg border-0 cursor-pointer ${
              species === "delegans" ? "bg-fuchsia-600 text-white" : "species-accent-outline bg-transparent"
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
