/**
 * "WHAT MAKES McCARTHY DIFFERENT" from about-2.html. Only used on /about/
 * (the home page has its own copy, WhyMcCarthy.tsx), so safe to repurpose
 * in place — the source's flat differentiator list fits the twocol/who-list
 * pattern better than the original card-grid shape this file carried.
 */
export default function WhyUs() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="max-w-[720px] mx-auto text-center mb-12" data-reveal="">
            <span className="eyebrow block mb-3.5">What Makes McCarthy Different</span>
            <h2>Strategy and engineering under one roof.</h2>
          </div>
          <div className="max-w-[760px] mx-auto rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
            <ul className="who-list">
              <li><strong className="text-ink">Business-first</strong> — we begin with the problem, not the tool.</li>
              <li><strong className="text-ink">AI-native</strong> — AI is central to the transformation, not an afterthought.</li>
              <li><strong className="text-ink">Built, not just advised</strong> — we take an opportunity from strategy through engineering.</li>
              <li><strong className="text-ink">Workforce included</strong> — adoption depends on people, not just systems.</li>
              <li><strong className="text-ink">Industry-aware</strong> — we design systems around sector-specific workflows.</li>
              <li><strong className="text-ink">Outcome-driven</strong> — we focus on measurable business impact.</li>
              <li><strong className="text-ink">Practical</strong> — start with the highest-value opportunities and scale from evidence.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
