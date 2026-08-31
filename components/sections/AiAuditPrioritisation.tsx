const CARDS = [
  { t: 'Quick Wins', d: 'High-value, relatively low complexity.' },
  { t: 'Strategic Bets', d: 'High-value initiatives requiring meaningful investment.' },
  { t: 'Foundation', d: 'Data, systems, governance or workforce work required before larger AI initiatives.' },
  { t: 'Experiment', d: 'Promising ideas that need validation before significant investment.' },
  { t: 'Defer', d: 'Low-value, high-risk or low-readiness opportunities.' },
];

export default function AiAuditPrioritisation() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Prioritisation</span>
          <h2>Not every good idea should be built first.</h2>
          <p>Every opportunity is evaluated against potential business impact, time-to-value, implementation effort, data readiness, technical feasibility, adoption readiness, risk and strategic importance.</p>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" data-reveal="">
          {CARDS.map((c) => (
            <div key={c.t} className="detail-card">
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
