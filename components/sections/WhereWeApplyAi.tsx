/**
 * "WHERE WE APPLY AI" from ai-solutions.html — seven functions, each a
 * detail-card (same class Leadership.tsx and WhoWeHelp content use) inside
 * a grid-hairline grid.
 */
export default function WhereWeApplyAi() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <h2>AI should show up where the business feels friction.</h2>
          <p>
            We don&apos;t start with a list of tools. We start with the work. Then we determine whether AI, automation, software or a combination of all three is the right answer.
          </p>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
          <div className="detail-card">
            <h3>Sales &amp; Growth</h3>
            <p>Lead research, qualification, personalised outreach, CRM hygiene, proposal preparation, account intelligence, forecasting and sales enablement.</p>
          </div>
          <div className="detail-card">
            <h3>Marketing</h3>
            <p>Research, content operations, campaign intelligence, customer segmentation, reporting and faster production workflows with appropriate human review.</p>
          </div>
          <div className="detail-card">
            <h3>Operations</h3>
            <p>Exception handling, process coordination, task routing, reporting, approvals and intelligent workflows that reduce repetitive operational work.</p>
          </div>
          <div className="detail-card">
            <h3>Customer Experience</h3>
            <p>Knowledge-powered customer service, triage, response drafting, case summarisation, escalation and personalised support.</p>
          </div>
          <div className="detail-card">
            <h3>Finance</h3>
            <p>Document processing, reconciliation support, management reporting, anomaly detection, cash visibility and decision intelligence.</p>
          </div>
          <div className="detail-card">
            <h3>People &amp; HR</h3>
            <p>Recruitment workflows, employee knowledge, onboarding, internal support, learning and AI workforce enablement.</p>
          </div>
          <div className="detail-card">
            <h3>Leadership</h3>
            <p>Executive dashboards, business intelligence, scenario analysis, risk signals and AI-assisted decision support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
