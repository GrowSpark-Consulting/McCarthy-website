/**
 * Final CTA from ai-solutions.html — one button, matching the source
 * exactly (the previous two-button "by industry or by problem" copy this
 * component carried no longer applies now the page is AI Solutions content).
 */
export default function SolutionsCta() {
  return (
    <>
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Find out where AI can change your business.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            You don&apos;t need to arrive with a list of AI tools. Bring us the business problem, the bottleneck or the opportunity. We&apos;ll help you work out what should happen next.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/strategy/" className="btn btn-accent">
              Book an AI Transformation Assessment
            </a>
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
