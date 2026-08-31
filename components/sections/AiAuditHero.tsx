export default function AiAuditHero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto text-center" data-reveal="">
          <span className="eyebrow block mb-5">McCarthy AI Audit · AI Transformation Assessment™</span>
          <h1 className="page-hero-heading mb-8 text-balance">Before you buy AI, find where it matters.</h1>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto mb-10">
            Most organisations know AI will change their business. The difficult part is knowing where to start. McCarthy analyses your processes, people, data and technology to identify the highest-value AI and automation opportunities — and turns them into a practical roadmap for execution.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="/strategy/" className="btn btn-primary">Book an AI Transformation Assessment</a>
            <a href="/ai-lab/" className="btn btn-secondary">Explore the AI Lab</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
            <span>Business</span>
            <span>Process</span>
            <span>Data</span>
            <span>Technology</span>
            <span>Workforce</span>
            <span>Governance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
