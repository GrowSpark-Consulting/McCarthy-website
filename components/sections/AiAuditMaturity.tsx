const STEPS = [
  { n: '01', t: 'Awareness', d: 'AI is being discussed but adoption is limited.' },
  { n: '02', t: 'Experimentation', d: 'Individuals and teams are testing tools and use cases.' },
  { n: '03', t: 'Structured Adoption', d: 'Approved tools, initial workflows and governance are emerging.' },
  { n: '04', t: 'AI-Enabled Operations', d: 'AI is embedded into meaningful business processes.' },
  { n: '05', t: 'AI-Native Organisation', d: 'AI is integrated into the operating model, workforce and decision-making.' },
];

export default function AiAuditMaturity() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">AI Maturity</span>
          <h2>Know where you are before deciding where to go.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6" data-reveal="">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center px-1">
              <span className="process-node mb-3.5">{s.n}</span>
              <span className="process-label block mb-1.5">{s.t}</span>
              <p className="text-ink-soft text-[13px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted text-[12.5px] mt-10" data-reveal="">
          This maturity model is a directional McCarthy assessment framework, not an externally certified benchmark.
        </p>
      </div>
    </section>
  );
}
