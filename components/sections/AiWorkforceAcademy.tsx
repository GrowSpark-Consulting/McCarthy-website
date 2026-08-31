export default function AiWorkforceAcademy() {
  const steps = [
    { n: '01', t: 'Foundation', d: 'AI fundamentals' },
    { n: '02', t: 'Productivity', d: 'AI tools and workflows' },
    { n: '03', t: 'Role-Specific', d: "AI for the employee's actual function" },
    { n: '04', t: 'Advanced', d: 'Agents, automation and workflow redesign' },
    { n: '05', t: 'Governance', d: 'Safe and responsible AI' },
    { n: '06', t: 'Application', d: 'Employees build AI workflows around their own work' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Employee AI Academy</span>
          <h2>Build AI capability across the organisation.</h2>
          <p>A structured AI education program that takes employees from fundamentals to applying AI in their own work.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6" data-reveal="">
          {steps.map((s) => (
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
