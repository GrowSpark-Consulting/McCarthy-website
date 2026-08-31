const STEPS = [
  { n: '01', t: 'Discover', d: 'Understand the organisation, priorities and operating environment.' },
  { n: '02', t: 'Diagnose', d: 'Map workflows, friction, bottlenecks, data and technology dependencies.' },
  { n: '03', t: 'Identify', d: 'Find AI, agent and automation opportunities across functions.' },
  { n: '04', t: 'Prioritise', d: 'Rank opportunities by impact, feasibility, effort, risk and time-to-value.' },
  { n: '05', t: 'Architect', d: 'Define technology, data, integrations, governance and workforce requirements.' },
  { n: '06', t: 'Roadmap', d: 'Sequence the work into near-term and long-term initiatives.' },
];

export default function AiAuditFramework() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head on-dark" data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">The Assessment Framework</span>
          <h2>From business reality to AI opportunity.</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 mt-14" data-reveal="">
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
  );
}
