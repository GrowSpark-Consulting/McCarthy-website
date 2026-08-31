/**
 * AI Solutions hero, content from ai-solutions.html's HERO section.
 * Reuses the interior-page hero pattern (page-hero-heading, accent glow)
 * this component already carried; only the copy changes.
 */
export default function SolutionsHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              McCarthy AI Solutions · AI Transformation
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} AI that works inside the business. {' '}
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} Most organisations don&apos;t need another AI tool. They need a clear strategy, intelligent systems that can actually do work, and an operating model that helps people use them. McCarthy helps organisations move from AI ambition to AI implementation — across strategy, agents, automation, intelligence and governance. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="/strategy/" className="btn btn-primary">
                Start an AI Transformation Assessment
              </a>
              {' '}
              <a href="/#ai-lab" className="btn btn-secondary">
                Explore the AI Lab
              </a>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-8 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
              {' '}
              <span>Strategy</span>
              {' '}
              <span>Agents</span>
              {' '}
              <span>Automation</span>
              {' '}
              <span>Intelligence</span>
              {' '}
              <span>Governance</span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
