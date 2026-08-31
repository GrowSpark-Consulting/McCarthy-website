export default function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            <span className="eyebrow block mb-5">About McCarthy · AI Transformation</span>
            <h1 className="page-hero-heading mb-8 text-balance">We believe every business can work differently with AI.</h1>
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto mb-10">
              McCarthy exists to help organisations understand what AI makes possible, identify where it matters, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/solutions/" className="btn btn-primary">Explore AI Solutions</a>
              <a href="/ai-lab/" className="btn btn-secondary">Meet the AI Lab</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
