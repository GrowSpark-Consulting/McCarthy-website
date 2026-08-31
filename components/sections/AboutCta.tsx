export default function AboutCta() {
  return (
    <>
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          <h2 className="text-white cta-heading mb-5">The future of work is being built now.</h2>
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[600px] mx-auto">
            If you&apos;re exploring what AI could mean for your organisation, start with the business — not the technology. We&apos;ll help you understand the opportunity, identify what matters and determine what should happen next.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/ai-audit/" className="btn btn-accent">Book an AI Transformation Assessment</a>
            <a href="/ai-lab/" className="btn btn-secondary btn-on-dark">Explore the AI Lab</a>
          </div>
        </div>
      </section>
    </>
  );
}
