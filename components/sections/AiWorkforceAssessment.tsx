export default function AiWorkforceAssessment() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">Workforce Assessment</span>
          <h2 className="mb-5">How AI-ready is your workforce?</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed mb-8">
            A structured assessment of where your people stand today — and what it will take to build real AI capability across the organisation.
          </p>
          <a href="/strategy/" className="btn btn-primary">Book an AI Workforce Assessment</a>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <h3 className="subsection-heading text-[18px] mb-4">We Assess</h3>
          <ul className="flex flex-col gap-2.5 mb-6">
            <li className="check-item"><span className="check">✓</span><span>AI literacy</span></li>
            <li className="check-item"><span className="check">✓</span><span>Current usage</span></li>
            <li className="check-item"><span className="check">✓</span><span>Leadership readiness</span></li>
            <li className="check-item"><span className="check">✓</span><span>Department opportunities</span></li>
            <li className="check-item"><span className="check">✓</span><span>Governance</span></li>
            <li className="check-item"><span className="check">✓</span><span>Skills gaps</span></li>
            <li className="check-item"><span className="check">✓</span><span>AI Champions</span></li>
            <li className="check-item"><span className="check">✓</span><span>Adoption barriers</span></li>
          </ul>
          <h3 className="subsection-heading text-[18px] mb-4">We Deliver</h3>
          <ul className="flex flex-col gap-2.5">
            <li className="check-item"><span className="check">✓</span><span>AI Workforce Readiness Map</span></li>
            <li className="check-item"><span className="check">✓</span><span>AI Workforce Transformation Roadmap</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
