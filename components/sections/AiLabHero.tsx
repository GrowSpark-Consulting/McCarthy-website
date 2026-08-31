export default function AiLabHero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto text-center" data-reveal="">
          <span className="eyebrow block mb-5">McCarthy AI Lab</span>
          <h1 className="page-hero-heading mb-8 text-balance">AI systems designed around the way industries actually work.</h1>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto mb-10">
            Most AI websites show what a model can do. McCarthy shows what AI can do inside a business. Explore interactive demonstrations of AI agents, intelligent workflows, decision systems, knowledge platforms and industry-specific operating tools — designed around real business problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="#products" className="btn btn-primary">Explore the AI Lab</a>
            <a href="/contact/" className="btn btn-secondary">Build Something Like This</a>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a href="#featured" className="chip">Featured</a>
            <a href="#products" className="chip">All Products</a>
            <a href="#industries" className="chip">Industries</a>
            <a href="#custom" className="chip">Custom AI</a>
          </div>
        </div>
      </div>
    </section>
  );
}
