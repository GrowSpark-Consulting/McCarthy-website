/**
 * "AI TRANSFORMATION ASSESSMENT" from ai-solutions.html — the five-step
 * "first step" flow, using the same process-step/process-node vocabulary
 * as SolutionsProcess.tsx above it.
 */
export default function AiTransformationAssessment() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The First Step</span>
          <h2>Don&apos;t start with an AI tool. Start with the business.</h2>
          <p>
            The McCarthy AI Transformation Assessment™ gives leadership a clear view of where AI can create value, what should be built first and what the organisation needs to execute.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6" data-reveal="">
          <div className="flex flex-col items-center text-center px-2">
            <span className="process-node mb-3.5">01</span>
            <span className="process-label block mb-1.5">Business &amp; Process</span>
            <p className="text-ink-soft text-[13px] leading-relaxed">Map workflows, friction, bottlenecks and opportunities.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <span className="process-node mb-3.5">02</span>
            <span className="process-label block mb-1.5">AI Opportunity</span>
            <p className="text-ink-soft text-[13px] leading-relaxed">Identify and prioritise high-value AI and automation use cases.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <span className="process-node mb-3.5">03</span>
            <span className="process-label block mb-1.5">Technology &amp; Data</span>
            <p className="text-ink-soft text-[13px] leading-relaxed">Assess systems, integrations, data, knowledge and architecture.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <span className="process-node mb-3.5">04</span>
            <span className="process-label block mb-1.5">Workforce &amp; Governance</span>
            <p className="text-ink-soft text-[13px] leading-relaxed">Assess adoption readiness, roles, training, risk and responsible use.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <span className="process-node mb-3.5">05</span>
            <span className="process-label block mb-1.5">Transformation Roadmap</span>
            <p className="text-ink-soft text-[13px] leading-relaxed">A sequenced 90-day and 12-month execution plan.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-14" data-reveal="">
          <p className="text-ink-soft text-[15px]">
            <strong className="text-ink">Outcome:</strong> A prioritised AI Transformation Roadmap.
          </p>
          <a href="/strategy/" className="btn btn-primary">Book the Assessment</a>
        </div>
      </div>
    </section>
  );
}
