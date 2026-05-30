import { Link, Outlet, useLocation } from "react-router-dom";
import { useCopy, useSpecies } from "@/context/SpeciesContext";

const nav = [
  { to: "/", label: "홈" },
  { to: "/diagnosis", label: "종 진단" },
  { to: "/play", label: "체험" },
  { to: "/feed", label: "Feed" },
  { to: "/museum", label: "Museum" },
  { to: "/scoreboard", label: "Scoreboard" },
  { to: "/about", label: "About" },
  { to: "/settings", label: "설정" },
];

export function Layout() {
  const { species, toggleSpecies, diagnosis, delegansRatio } = useSpecies();
  const c = useCopy();
  const loc = useLocation();

  return (
    <div className="species-bg min-h-dvh flex flex-col">
      <header className="species-surface sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
          <Link to="/" className="font-bold text-lg no-underline" style={{ color: "var(--color-text)" }}>
            🧬 {c.modeLabel}
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {nav.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-2 py-1 rounded no-underline ${
                  loc.pathname === to ? "species-accent text-white" : "species-muted"
                }`}
                style={
                  loc.pathname === to
                    ? undefined
                    : { color: "var(--color-muted)" }
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleSpecies}
            className="species-accent px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer border-0"
            title="모드 전환"
          >
            → {species === "promptus" ? "Delegans" : "Promptus"}
          </button>
        </div>
        {(diagnosis || delegansRatio > 0) && (
          <div className="max-w-4xl mx-auto px-4 pb-2 text-xs species-muted">
            {diagnosis && <span className="mr-3">진단: {diagnosis}</span>}
            {delegansRatio > 0 && (
              <span>오늘 Delegans 비율 ~{delegansRatio}%</span>
            )}
          </div>
        )}
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="species-surface text-center py-4 text-xs species-muted">
        Homo Promptus · 오픈소스 풍자 · 행동 추적은 로컬·옵트인
      </footer>
    </div>
  );
}
