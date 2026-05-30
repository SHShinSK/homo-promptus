import { Bi } from "@/components/Bi";
import { useSpecies } from "@/context/SpeciesContext";
import { scoreboard as sb } from "@/lib/i18n";
import {
  getBehaviorLog,
  getTrackingOptIn,
  setTrackingOptIn,
} from "@/lib/storage";

export function Scoreboard() {
  const { refreshStats, delegansRatio } = useSpecies();
  const optIn = getTrackingOptIn();
  const log = getBehaviorLog();

  function toggleTracking() {
    setTrackingOptIn(!optIn);
    refreshStats();
  }

  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <Bi text={sb.title} variant="heading" as="h1" className="m-0" />
        <Bi text={sb.subtitle} variant="block" className="species-muted mt-2" />
      </div>

      <label className="species-surface rounded-xl p-4 flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={optIn}
          onChange={toggleTracking}
          className="mt-1"
        />
        <Bi text={sb.optIn} variant="block" />
      </label>

      {optIn ? (
        <div className="species-surface rounded-xl p-6 space-y-3">
          <p className="m-0">
            <Bi text={sb.promptusActions} variant="inline" />: {log.promptusActions}
          </p>
          <p className="m-0">
            <Bi text={sb.delegansActions} variant="inline" />: {log.delegansActions}
          </p>
          <p className="m-0 text-lg font-bold">
            {sb.ratio.en}: {delegansRatio}% · {sb.ratio.ko}: {delegansRatio}%
          </p>
          <p className="text-xs species-muted m-0">
            {sb.lastUpdated.en}: {new Date(log.lastUpdated).toLocaleString("en-US")}
            <br />
            {sb.lastUpdated.ko}: {new Date(log.lastUpdated).toLocaleString("ko-KR")}
          </p>
        </div>
      ) : (
        <Bi text={sb.optInHint} variant="block" className="species-muted" />
      )}

      <Bi text={sb.leaderboardNote} variant="block" className="text-sm species-muted italic" />
    </div>
  );
}
