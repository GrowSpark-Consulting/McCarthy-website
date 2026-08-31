export default function AiAuditReadiness() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Readiness</span>
          <h2>Technology readiness is only half the equation.</h2>
          <p>AI is only as useful as the systems and information around it — and the people who will actually use it.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-reveal="">
          <div className="rounded-2xl border border-hairline bg-paper-raised p-8">
            <h3 className="subsection-heading text-[18px] mb-4">Workforce Readiness</h3>
            <ul className="who-list mb-5">
              <li>Leadership AI literacy</li>
              <li>Employee AI literacy</li>
              <li>Current usage patterns</li>
              <li>Role-specific opportunities</li>
              <li>Skills gaps</li>
              <li>AI champions</li>
              <li>Change readiness</li>
              <li>Governance awareness</li>
              <li>Training requirements</li>
            </ul>
            <a href="/ai-workforce/" className="inline-link">See McCarthy AI Workforce</a>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper-raised p-8">
            <h3 className="subsection-heading text-[18px] mb-4">Technology &amp; Data Readiness</h3>
            <ul className="who-list mb-5">
              <li>System landscape</li>
              <li>Data availability</li>
              <li>Data quality</li>
              <li>Knowledge sources</li>
              <li>APIs and integrations</li>
              <li>Identity and access</li>
              <li>Security constraints</li>
              <li>Existing automation</li>
              <li>Application architecture</li>
              <li>AI infrastructure requirements</li>
            </ul>
            <p className="text-muted text-[12.5px]">Findings distinguish what can be implemented now from what requires foundational work first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
