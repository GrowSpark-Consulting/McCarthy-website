export default function AiWorkforceProblem() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The Problem</span>
          <h2>AI adoption is not a software problem. It&apos;s a people problem.</h2>
          <p>
            Most organisations are somewhere between &ldquo;our employees are already using AI&rdquo; and &ldquo;we don&apos;t actually know how they&apos;re using it.&rdquo; Employees experiment with different tools, teams develop their own workflows, some people become dramatically more productive while others don&apos;t use AI at all, and leaders are left unsure what should be allowed. Sensitive information may be entered into the wrong tools. There may be no consistent organisation-wide AI capability.
          </p>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
          <div className="detail-card">
            <h3>Uneven Productivity</h3>
            <p>Some people work dramatically faster with AI. Most of the organisation doesn&apos;t.</p>
          </div>
          <div className="detail-card">
            <h3>Inconsistent AI Usage</h3>
            <p>Every team develops its own workflow, with no shared standard.</p>
          </div>
          <div className="detail-card">
            <h3>Security &amp; Governance Risk</h3>
            <p>Sensitive information can end up in the wrong tools with no oversight.</p>
          </div>
          <div className="detail-card">
            <h3>Low Employee Confidence</h3>
            <p>People aren&apos;t sure what&apos;s allowed, or where AI actually helps their role.</p>
          </div>
          <div className="detail-card">
            <h3>Missed Opportunities</h3>
            <p>Real productivity gains stay locked in a handful of individual habits.</p>
          </div>
          <div className="detail-card">
            <h3>Resistance to Change</h3>
            <p>Without a plan, AI feels like a threat instead of a capability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
