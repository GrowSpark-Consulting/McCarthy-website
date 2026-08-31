/**
 * "THE McCARTHY TRANSFORMATION SYSTEM™" from about-2.html. Only used on
 * /about/ (the home page has its own copy, TransformationSystem.tsx), so
 * safe to rewrite in place.
 */
const STEPS = [
  { n: '01', t: 'Discover', d: 'Understand the business, people, technology and AI readiness.' },
  { n: '02', t: 'Diagnose', d: 'Identify workflow friction, bottlenecks, data issues and opportunities.' },
  { n: '03', t: 'Prioritise', d: 'Evaluate impact, feasibility, risk, effort and time-to-value.' },
  { n: '04', t: 'Architect', d: 'Define AI, data, systems, security, integrations and governance.' },
  { n: '05', t: 'Build', d: 'Create agents, automation, applications and intelligence systems.' },
  { n: '06', t: 'Adopt', d: 'Train people, establish governance and embed AI into everyday work.' },
  { n: '07', t: 'Optimise', d: 'Measure outcomes, learn from usage and continuously improve.' },
];

export default function Framework() {
  return (
    <>
      <section id="framework" className="py-28 lg:py-36 bg-ink overflow-hidden scroll-mt-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="section-head on-dark" data-reveal="">
            <span className="eyebrow !text-accent-bright block mb-3.5">The McCarthy Transformation System™</span>
            <h2>A practical path from AI ambition to AI adoption.</h2>
            <p>Our methodology connects strategy, engineering and workforce adoption into one sequence.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16 lg:mt-20" data-reveal="">
            {STEPS.map((s) => (
              <div key={s.n} className="framework-step flex flex-col items-center text-center px-2">
                <div className="framework-node mb-3.5">{s.n}</div>
                <h3 className="text-white text-[16px] font-bold mb-1.5">{s.t}</h3>
                <p className="text-[#9BA1A7] text-[13px] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
