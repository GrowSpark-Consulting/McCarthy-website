const ITEMS = [
  'Executive AI Readiness Summary',
  'AI Maturity Assessment',
  'Business Process Opportunity Map',
  'AI Use-Case Inventory',
  'Prioritised AI Opportunity Matrix',
  'AI Agent Opportunities',
  'Automation Opportunities',
  'Technology & Data Readiness Findings',
  'Workforce Readiness Findings',
  'AI Governance Considerations',
  'Recommended Architecture Direction',
  '90-Day AI Transformation Roadmap',
  '12-Month AI Transformation Roadmap',
  'Recommended next initiatives',
];

export default function AiAuditDeliverables() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">What You Receive</span>
          <h2>A roadmap, not a report that sits on a shelf.</h2>
          <p>The final deliverable is positioned as an executive decision-making package.</p>
        </div>
        <div className="max-w-[820px] mx-auto rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {ITEMS.map((item) => (
              <li key={item} className="check-item"><span className="check">✓</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-10" data-reveal="">
          <a href="/strategy/" className="btn btn-primary">Book an AI Transformation Assessment</a>
        </div>
      </div>
    </section>
  );
}
