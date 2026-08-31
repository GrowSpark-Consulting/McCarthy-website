export default function IndustriesWhySpecific() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <h2 className="mb-5">The same AI capability can create very different value in different businesses.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">
            A logistics company may need an AI control tower. A manufacturer may need production intelligence. A construction company may need project risk and document intelligence. A professional services firm may need proposal and knowledge agents. The underlying technology may overlap — the workflow, data, decision-making and business outcome do not.
          </p>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>Start with the industry&apos;s real workflows.</li>
            <li>Understand the decisions that drive value.</li>
            <li>Connect AI to the systems already used by the business.</li>
            <li>Build around industry-specific data and knowledge.</li>
            <li>Keep humans in control of important decisions.</li>
            <li>Measure outcomes rather than AI activity.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
