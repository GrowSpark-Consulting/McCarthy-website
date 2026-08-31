const STEPS = ['Assess', 'Design', 'Build', 'Train', 'Deploy', 'Optimise'];

export default function AiAuditToImplementation() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <h2>The assessment is the beginning of the transformation.</h2>
          <p>McCarthy can take priority findings into design, prototyping, engineering, deployment, workforce training and optimisation — though the assessment itself remains valuable as a standalone strategic deliverable.</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6" data-reveal="">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center text-center px-1">
              <span className="process-node mb-3.5">{String(i + 1).padStart(2, '0')}</span>
              <span className="process-label block">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
