export default function AboutAiNative() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <h2 className="mb-5">The AI-native organisation isn&apos;t a company with more AI tools.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">
            It&apos;s a company where intelligence is embedded into the way work happens. This is the future McCarthy is building toward.
          </p>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>Employees work with AI as part of their daily workflow.</li>
            <li>Agents handle appropriate tasks and coordinate processes.</li>
            <li>Business data is accessible to the systems that need it.</li>
            <li>Leaders have better visibility and decision support.</li>
            <li>Knowledge is no longer trapped in documents and people.</li>
            <li>Automation removes unnecessary manual coordination.</li>
            <li>Governance keeps AI safe, accountable and aligned.</li>
            <li>Technology evolves continuously with the organisation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
