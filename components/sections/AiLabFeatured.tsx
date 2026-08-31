export default function AiLabFeatured() {
  return (
    <section id="featured" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Featured Systems</span>
          <h2>Don&apos;t just read what we build. Use it.</h2>
          <p>Three systems that show the range of what McCarthy engineers — from the executive layer to the front line.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-reveal="">
          <article className="insight-card card-elevate">
            <span className="cat">Featured</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI CEO Command Center</h3>
            <p className="text-ink-soft text-[16px]">Executive intelligence that turns connected business data into decisions, risks and recommended actions.</p>
          </article>
          <article className="insight-card card-elevate">
            <span className="cat">Featured</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI Sales Agent</h3>
            <p className="text-ink-soft text-[16px]">Researches prospects, qualifies opportunities and keeps the CRM moving without a rep touching a keyboard.</p>
          </article>
          <article className="insight-card card-elevate">
            <span className="cat">Featured</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI Employee Knowledge Hub</h3>
            <p className="text-ink-soft text-[16px]">Turns SOPs, policies and internal knowledge into secure, source-backed answers.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
