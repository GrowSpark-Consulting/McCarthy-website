export default function AiAuditOpportunityMapping() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">
          <div data-reveal="">
            <span className="eyebrow block mb-3.5">AI Opportunity Mapping</span>
            <h2 className="mb-5">Find the work AI should change first.</h2>
            <p className="text-ink-soft text-[16.5px] leading-relaxed">
              For each meaningful opportunity, the assessment captures the business problem, current workflow, people and systems involved, the data and AI capability required, human decision points, expected impact, complexity, risk and the recommended next step.
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
            <ul className="who-list">
              <li>Business problem</li>
              <li>Current workflow</li>
              <li>People involved</li>
              <li>Systems involved</li>
              <li>Data required</li>
              <li>AI capability required</li>
              <li>Automation potential</li>
              <li>Human decision points</li>
              <li>Expected business impact</li>
              <li>Implementation complexity</li>
              <li>Risk / governance considerations</li>
              <li>Dependencies</li>
              <li>Recommended next step</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5" data-reveal="">
          <span className="chip">AI Assistant</span>
          <span className="chip">AI Agent</span>
          <span className="chip">Intelligent Automation</span>
          <span className="chip">Knowledge AI</span>
          <span className="chip">Decision Intelligence</span>
          <span className="chip">Document Intelligence</span>
          <span className="chip">Predictive / Analytical AI</span>
          <span className="chip">AI-Powered Application</span>
          <span className="chip">Digital Engineering</span>
          <span className="chip">Workforce Enablement</span>
        </div>
      </div>
    </section>
  );
}
