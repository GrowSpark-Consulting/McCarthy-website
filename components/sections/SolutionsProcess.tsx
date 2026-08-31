/**
 * "HOW WE BUILD" from ai-solutions.html — seven steps, from business
 * problem to production AI. Keeps the process-step/process-node vocabulary
 * this component already used; laid out as a wrapping grid instead of one
 * connected row since seven nodes don't fit a single horizontal line the
 * way the previous five-phase content did.
 */
export default function SolutionsProcess() {
  return (
    <>
      <section className="py-20 lg:py-24" data-reveal="">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="rounded-2xl border border-hairline bg-paper px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-16">
            {' '}
            <div className="max-w-[620px] mx-auto text-center mb-14 lg:mb-20">
              {' '}
              <span className="eyebrow block mb-3.5">
                How We Build
              </span>
              {' '}
              <h2 className="subsection-heading mb-4">
                From business problem to production AI.
              </h2>
              {' '}
              <p className="text-ink-soft text-[17px] leading-relaxed">
                Every engagement follows a structured path. The exact technology changes by organisation; the discipline does not.
              </p>
              {' '}
            </div>
            {' '}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">01</span>
                {' '}
                <span className="process-label block mb-1.5">Understand the business</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Learn how work actually happens — goals, processes, systems, people, constraints and outcomes.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">02</span>
                {' '}
                <span className="process-label block mb-1.5">Map the opportunity</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Identify where AI or automation can create leverage, and separate attractive ideas from low-value or high-risk use cases.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">03</span>
                {' '}
                <span className="process-label block mb-1.5">Prioritise the economics</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Evaluate potential impact, feasibility, implementation effort, risk and time-to-value.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">04</span>
                {' '}
                <span className="process-label block mb-1.5">Architect the system</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Define models, data, knowledge, integrations, permissions, interfaces, human approvals, evaluation and governance.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">05</span>
                {' '}
                <span className="process-label block mb-1.5">Build and integrate</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Prototype quickly, validate with users and engineer the production workflow across existing business systems.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">06</span>
                {' '}
                <span className="process-label block mb-1.5">Train and adopt</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Equip employees and leaders to use the new systems safely and effectively.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex flex-col items-center text-center px-2">
                {' '}
                <span className="process-node mb-3.5">07</span>
                {' '}
                <span className="process-label block mb-1.5">Measure and optimise</span>
                {' '}
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  Track adoption and business outcomes, learn from real usage and improve the system over time.
                </p>
                {' '}
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
