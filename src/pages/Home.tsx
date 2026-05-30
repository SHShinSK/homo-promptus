import { Link } from "react-router-dom";
import { useCopy, useSpecies } from "@/context/SpeciesContext";
import { SpeciesBadge } from "@/components/SpeciesBadge";

export function Home() {
  const { species, diagnosis } = useSpecies();
  const c = useCopy();

  return (
    <div className="space-y-8">
      <section className="species-surface rounded-2xl p-8">
        <p className="text-sm species-muted mb-2">AI 시대 인간의 두 종</p>
        <h1 className="text-3xl font-bold m-0 mb-2">
          {species === "promptus" ? "Homo Promptus" : "Homo Delegans"}
        </h1>
        <p className="text-lg species-muted m-0 mb-4">{c.tagline}</p>
        <p className="m-0 mb-6 italic">
          Think a little, or think for me. — 조금 생각할까, 생각까지 맡길까.
        </p>
        {diagnosis && (
          <p className="mb-4">
            당신의 진단: <SpeciesBadge species={diagnosis} />
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/diagnosis"
            className="species-accent px-4 py-2 rounded-lg no-underline text-white font-medium"
          >
            종 진단 받기
          </Link>
          <Link
            to="/play"
            className="species-accent-outline px-4 py-2 rounded-lg no-underline font-medium"
          >
            {c.playTitle} 체험
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="species-surface rounded-xl p-6">
          <h2 className="mt-0 text-teal-700 dark:text-teal-300">Homo Promptus</h2>
          <p className="species-muted text-sm m-0">
            프롬프트에 의도·맥락·검증을 남기는 종. Prompt Lab에서 네 칸을 채워 보세요.
          </p>
        </div>
        <div className="species-surface rounded-xl p-6">
          <h2 className="mt-0 text-fuchsia-400">Homo Delegans</h2>
          <p className="species-muted text-sm m-0">
            시키거나 묻기만 하는 종. Delegate Dock에서 한 줄로 위임해 보세요.
          </p>
        </div>
      </section>

      <p className="text-center text-sm species-muted">
        <a
          href="https://github.com/SHShinSK/homo-promptus"
          className="underline"
          style={{ color: "var(--color-accent)" }}
        >
          GitHub에서 토론·기여하기
        </a>
      </p>
    </div>
  );
}
