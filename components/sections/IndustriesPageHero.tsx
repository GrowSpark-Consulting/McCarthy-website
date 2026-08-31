export default function IndustriesPageHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-24">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto text-center" data-reveal="">
          <span className="eyebrow block mb-5">McCarthy Industries · AI Transformation</span>
          <h1 className="page-hero-heading mb-8 text-balance">AI doesn&apos;t transform every industry the same way.</h1>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[720px] mx-auto mb-10">
            Every industry has different workflows, different data, different bottlenecks and different decisions. McCarthy designs AI transformation around the way your industry actually works. Explore the AI systems, agents and intelligent workflows we can build across logistics, manufacturing, construction, e-commerce, professional services, real estate, healthcare, finance, recruitment and education.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/solutions/" className="btn btn-primary">Explore AI Solutions</a>
            <a href="/ai-audit/" className="btn btn-secondary">Book an AI Transformation Assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
}
