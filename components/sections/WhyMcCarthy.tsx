/**
 * "WHY McCARTHY" from index-7.html.
 *
 * Home-page-only component: WhyUs.tsx carries this same why-card visual
 * language but is also rendered on /about/, so its own six "Why Grow Spark"
 * reasons are left untouched there rather than overwritten with McCarthy's.
 */
export default function WhyMcCarthy() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why McCarthy
            </span>
            {' '}
            <h2>
              We don&apos;t just build AI. We understand why it needs to exist.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                01
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Business First
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    We solve the business problem before we select the technology.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                02
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Strategy + Engineering
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    Advise and build under one roof — no translation between consultant and developer.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                03
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Built Around You
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    Designed around your actual workflows, systems and people, not a template.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                04
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Outcome Driven
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    Every project connects to a measurable business outcome.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                05
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  AI-Native
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    We redesign work around what intelligent systems now make possible.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                06
              </span>
              {' '}
              <div className="card-reveal-box">
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Future Ready
                </h3>
                <div className="card-reveal">
                  <p className="text-[16px] text-ink-soft">
                    Foundations built to evolve as AI capability changes.
                  </p>
                </div>
              </div>
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
