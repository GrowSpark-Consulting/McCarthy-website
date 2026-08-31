const STEPS = [
  { n: '01', t: 'Discover', d: 'Understand the business problem and current workflow.' },
  { n: '02', t: 'Design', d: 'Define the AI use case, architecture, data, integrations and guardrails.' },
  { n: '03', t: 'Prototype', d: 'Build a working demonstration and validate it with users.' },
  { n: '04', t: 'Engineer', d: 'Connect the system to production data and business systems.' },
  { n: '05', t: 'Deploy', d: 'Introduce permissions, monitoring, human oversight and governance.' },
  { n: '06', t: 'Train', d: 'Enable the workforce to use the new system effectively.' },
  { n: '07', t: 'Optimise', d: 'Measure adoption and business outcomes and continuously improve.' },
];

export default function AiLabDeployment() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">From Demo to Deployment</span>
          <h2>A demonstration is the beginning, not the product.</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10" data-reveal="">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center px-1">
              <span className="process-node mb-3.5">{s.n}</span>
              <span className="process-label block mb-1.5">{s.t}</span>
              <p className="text-ink-soft text-[13px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
