/**
 * The final CTA banner from index-7.html ("LET'S TALK").
 *
 * Home-page-only component: FooterCta.tsx carries this same dark-banner
 * pattern but is also rendered at the end of nearly every other page on the
 * site, so its generic "Ready to Transform Your Business?" copy is left
 * untouched there rather than overwritten with this page-specific message.
 */
export default function HomeFinalCta() {
  return (
    <div className="bg-ink text-white border-b border-white/10 py-20 sm:py-24 lg:py-28 text-center" data-reveal>
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <h2 className="text-white cta-heading mb-5">
          You don&apos;t need to know what AI you need. You just need to know what&apos;s holding your business back.
        </h2>
        <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
          What&apos;s happening. Why it&apos;s happening. What AI can change. What it will take to implement it.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/strategy/" className="btn btn-accent">
            Book Your AI Transformation Assessment
          </a>
          <a href="/contact/" className="btn btn-secondary btn-on-dark">
            Request an Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
