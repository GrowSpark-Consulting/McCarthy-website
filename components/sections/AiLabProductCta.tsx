export default function AiLabProductCta() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 text-center bg-ink">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
        <h2 className="text-white cta-heading mb-5">See where this belongs in your business.</h2>
        <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
          This is a capability demonstration, not delivered client work. McCarthy can design and engineer a version of this system around your own data and systems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/contact/" className="btn btn-accent">Build This For My Business</a>
          <a href="/ai-lab/" className="btn btn-secondary btn-on-dark">Explore More AI Lab Products</a>
        </div>
      </div>
    </section>
  );
}
