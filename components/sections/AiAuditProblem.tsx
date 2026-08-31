const CARDS = [
  { t: 'Too Many Possibilities', d: 'Hundreds of potential AI use cases, but no prioritisation.' },
  { t: 'Tool-First Thinking', d: 'Technology gets selected before the business problem is understood.' },
  { t: 'Disconnected Experiments', d: 'Teams build isolated solutions without an enterprise roadmap.' },
  { t: 'Hidden Workflow Friction', d: 'Valuable AI opportunities remain buried inside manual processes.' },
  { t: 'Data & System Constraints', d: "Promising ideas can't scale because the underlying architecture isn't ready." },
  { t: 'Workforce Uncertainty', d: 'Employees need education, role-specific enablement and clear governance.' },
  { t: 'Unclear Economics', d: 'Hard to compare impact, effort, risk and time-to-value across ideas.' },
  { t: 'Governance Risk', d: 'AI adoption grows faster than policies, permissions and oversight.' },
];

export default function AiAuditProblem() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The Problem</span>
          <h2>The biggest AI risk isn&apos;t doing nothing. It&apos;s investing in the wrong things.</h2>
          <p>
            AI creates thousands of possible use cases. That doesn&apos;t mean every use case deserves investment. Organisations often begin with a tool, a trend or an isolated experiment — a team adopts a chatbot, another builds an automation, someone buys an AI platform. Leadership sees dozens of possibilities but no clear sequence. The result: fragmented experiments, duplicated effort, weak adoption, unclear ROI, security concerns and a growing gap between AI ambition and actual transformation.
          </p>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
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
