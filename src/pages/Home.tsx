import { Link } from "react-router-dom";
import { Bi } from "@/components/Bi";
import { SpeciesBadge } from "@/components/SpeciesBadge";
import { useCopy, useSpecies } from "@/context/SpeciesContext";
import { common, copy, home } from "@/lib/i18n";

export function Home() {
  const { diagnosis } = useSpecies();
  const c = useCopy();

  return (
    <div className="space-y-8">
      <section className="species-surface rounded-2xl p-8">
        <p className="text-sm species-muted mb-2">
          <Bi text={common.siteTitle} variant="block" />
        </p>
        <h1 className="text-3xl font-bold m-0 mb-2">{c.modeLabel.en}</h1>
        <p className="text-sm species-muted m-0 mb-2">{c.modeLabel.ko}</p>
        <p className="text-lg m-0 mb-1">
          <Bi text={c.tagline} variant="block" />
        </p>
        <p className="m-0 mb-6 italic">
          <Bi text={common.slogan} variant="block" />
        </p>
        {diagnosis && (
          <p className="mb-4 flex flex-wrap items-center gap-2">
            <Bi text={common.diagnosisLabel} variant="inline" />
            <SpeciesBadge species={diagnosis} />
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/diagnosis"
            className="species-accent px-4 py-2 rounded-lg no-underline text-white font-medium"
          >
            <Bi text={home.takeDiagnosis} variant="block" className="text-white" />
          </Link>
          <Link
            to="/play"
            className="species-accent-outline px-4 py-2 rounded-lg no-underline font-medium"
          >
            {home.tryPlay.en} {c.playTitle.en} · {home.tryPlay.ko} {c.playTitle.ko}
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="species-surface rounded-xl p-6">
          <h2 className="mt-0 text-teal-700 dark:text-teal-300">Homo Promptus</h2>
          <Bi text={copy.promptus.desc} variant="block" className="text-sm species-muted" />
        </div>
        <div className="species-surface rounded-xl p-6">
          <h2 className="mt-0 text-fuchsia-400">Homo Delegans</h2>
          <Bi text={copy.delegans.desc} variant="block" className="text-sm species-muted" />
        </div>
      </section>

      <p className="text-center text-sm">
        <a
          href="https://github.com/SHShinSK/homo-promptus"
          className="underline"
          style={{ color: "var(--color-accent)" }}
        >
          <Bi text={home.discussGithub} variant="block" />
        </a>
      </p>
    </div>
  );
}
