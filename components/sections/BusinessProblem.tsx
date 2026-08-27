/**
 * "THE BUSINESS PROBLEM" from index-7.html — the six symptoms McCarthy
 * opens with, each carrying its own title and description in the source.
 * Uses the site's existing detail-card / grid-hairline vocabulary (see
 * Leadership.tsx for the same card class).
 */
export default function BusinessProblem() {
  return (
    <section id="business-problem" className="py-20 sm:py-24 lg:py-28 border-b border-hairline scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The Business Problem</span>
          <h2>The technology isn&apos;t always the problem. The real problem is how the business works.</h2>
          <p>
            Most organisations don&apos;t need another tool. They need someone to understand the business, find where AI creates real leverage, and turn that into a working system.
          </p>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
          <div className="detail-card">
            <h3>Lost Revenue</h3>
            <p>Leads, follow-ups and opportunities fall through disconnected workflows.</p>
          </div>
          <div className="detail-card">
            <h3>Manual Work</h3>
            <p>People spend hours on repetitive coordination, reporting and data entry.</p>
          </div>
          <div className="detail-card">
            <h3>Slow Service</h3>
            <p>Customers wait while teams answer questions AI could handle instantly.</p>
          </div>
          <div className="detail-card">
            <h3>Low Visibility</h3>
            <p>Managers have data everywhere but insight nowhere.</p>
          </div>
          <div className="detail-card">
            <h3>Trapped Knowledge</h3>
            <p>SOPs, policies and expertise are scattered across files and people.</p>
          </div>
          <div className="detail-card">
            <h3>AI Uncertainty</h3>
            <p>Leaders know AI matters but aren&apos;t sure where it&apos;s actually worth implementing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
