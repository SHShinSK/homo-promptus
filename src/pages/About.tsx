import { Bi } from "@/components/Bi";
import { about } from "@/lib/i18n";

export function About() {
  return (
    <div className="species-surface rounded-2xl p-8 space-y-6 max-w-none">
      <Bi text={about.title} variant="heading" as="h1" className="m-0" />

      <section>
        <Bi text={about.promptusHeading} variant="heading" as="h2" className="text-teal-700 m-0" />
        <Bi text={about.promptusBody} variant="block" className="mt-2" />
        <Bi text={about.promptusQuote} variant="block" className="italic mt-2 species-muted" />
      </section>

      <section>
        <Bi
          text={about.delegansHeading}
          variant="heading"
          as="h2"
          className="text-fuchsia-500 m-0"
        />
        <Bi text={about.delegansBody} variant="block" className="mt-2" />
        <Bi text={about.delegansQuote} variant="block" className="italic mt-2 species-muted" />
      </section>

      <p className="text-sm species-muted m-0">
        {about.fullDocs.en}: <code>docs/manifesto-promptus.md</code>,{" "}
        <code>docs/manifesto-delegans.md</code>
        <br />
        {about.fullDocs.ko}: 동일 경로
      </p>

      <a
        href="https://github.com/SHShinSK/homo-promptus/blob/main/CONTRIBUTING.md"
        className="inline-block species-accent px-4 py-2 rounded-lg text-white no-underline"
      >
        <Bi text={about.contributing} variant="block" />
      </a>
    </div>
  );
}
