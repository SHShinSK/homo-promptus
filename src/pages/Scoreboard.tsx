import { useSpecies } from "@/context/SpeciesContext";
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
        <h1 className="m-0">Delegation Scoreboard</h1>
        <p className="species-muted m-0">
          종 성실도 패러디 — 점수는 좋다/나쁘다가 아닙니다. 데이터는 기기 로컬만.
        </p>
      </div>

      <label className="species-surface rounded-xl p-4 flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={optIn}
          onChange={toggleTracking}
        />
        <span>행동 로그 수집 옵트인 (서버 전송 없음)</span>
      </label>

      {optIn ? (
        <div className="species-surface rounded-xl p-6 space-y-3">
          <p className="m-0">
            <strong>Promptus 행동</strong>: {log.promptusActions}
          </p>
          <p className="m-0">
            <strong>Delegans 행동</strong>: {log.delegansActions}
          </p>
          <p className="m-0 text-lg font-bold">
            Delegans 비율: {delegansRatio}%
          </p>
          <p className="text-xs species-muted m-0">
            마지막 갱신: {new Date(log.lastUpdated).toLocaleString("ko-KR")}
          </p>
        </div>
      ) : (
        <p className="species-muted">옵트인하면 /play 사용 시 로컬 통계가 쌓입니다.</p>
      )}

      <p className="text-sm species-muted italic">
        리더보드 제목 예: 「이번 주 가장 Homo Delegans한 팀」— 공개는 추후 스냅샷 공유만.
      </p>
    </div>
  );
}
