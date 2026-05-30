import { Link, Outlet, useLocation } from "react-router-dom";
import { Bi } from "@/components/Bi";
import { useCopy, useSpecies } from "@/context/SpeciesContext";
import { common, nav } from "@/lib/i18n";

const navItems = [
  { to: "/", label: nav.home },
  { to: "/diagnosis", label: nav.diagnosis },
  { to: "/play", label: nav.play },
  { to: "/feed", label: nav.feed },
  { to: "/museum", label: nav.museum },
  { to: "/scoreboard", label: nav.scoreboard },
  { to: "/about", label: nav.about },
  { to: "/settings", label: nav.settings },
];

export function Layout() {
  const { species, toggleSpecies, diagnosis, delegansRatio } = useSpecies();
  const c = useCopy();
  const loc = useLocation();

  return (
    <div className="species-bg min-h-dvh flex flex-col">
      <header className="species-surface sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
          <Link
            to="/"
            className="font-bold text-lg no-underline"
            style={{ color: "var(--color-text)" }}
          >
            🧬 {c.modeLabel.en}
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-2 py-1 rounded no-underline ${
                  loc.pathname === to ? "species-accent text-white" : ""
                }`}
                style={
                  loc.pathname === to
                    ? undefined
                    : { color: "var(--color-muted)" }
                }
              >
                <Bi text={label} variant="inline" />
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleSpecies}
            className="species-accent px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer border-0"
            title={`${common.switchMode.en} / ${common.switchMode.ko}`}
          >
            → {species === "promptus" ? "Delegans" : "Promptus"}
          </button>
        </div>
        {(diagnosis || delegansRatio > 0) && (
          <div className="max-w-4xl mx-auto px-4 pb-2 text-xs species-muted flex flex-wrap gap-x-3 gap-y-1">
            {diagnosis && (
              <span>
                <Bi text={common.diagnosisHeader} variant="inline" />: {diagnosis}
              </span>
            )}
            {delegansRatio > 0 && (
              <span>
                {common.delegansRatio.en} {delegansRatio}% · {common.delegansRatio.ko}{" "}
                {delegansRatio}%
              </span>
            )}
          </div>
        )}
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="species-surface text-center py-4 text-xs species-muted px-4">
        <Bi text={common.footer} variant="block" />
      </footer>
    </div>
  );
}
