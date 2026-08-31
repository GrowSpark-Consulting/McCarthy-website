/**
 * The two consecutive roadmap sections from ai-audit.html — "THE FIRST 90
 * DAYS" and "THE NEXT 12 MONTHS" — kept in one file since they share an
 * identical twocol/who-list shape.
 */
export default function AiAuditRoadmaps() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div data-reveal="">
            <span className="eyebrow block mb-3.5">The First 90 Days</span>
            <h2 className="mb-5">Know what to do first.</h2>
            <p className="text-ink-soft text-[16.5px] leading-relaxed">The first 90 days focus on creating momentum without creating unnecessary complexity.</p>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
            <ul className="who-list">
              <li>Select priority use cases.</li>
              <li>Validate business assumptions.</li>
              <li>Prototype selected AI systems.</li>
              <li>Establish governance foundations.</li>
              <li>Prepare required data and integrations.</li>
              <li>Train initial users or AI Champions.</li>
              <li>Measure early adoption and outcomes.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div data-reveal="">
            <span className="eyebrow block mb-3.5">The Next 12 Months</span>
            <h2 className="mb-5">Build beyond the first experiment.</h2>
            <p className="text-ink-soft text-[16.5px] leading-relaxed">The 12-month roadmap shows how successful initiatives become a broader transformation program.</p>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
            <ul className="who-list">
              <li>Scale proven AI workflows.</li>
              <li>Expand agents across departments.</li>
              <li>Strengthen data and knowledge architecture.</li>
              <li>Expand workforce capability.</li>
              <li>Formalise governance.</li>
              <li>Connect AI initiatives to strategic KPIs.</li>
              <li>Continuously measure and optimise.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
