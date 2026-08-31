export default function AiWorkforceTransformation() {
  const steps = ['Train', 'Apply', 'Build', 'Adopt', 'Measure', 'Scale'];
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <h2>We don&apos;t stop at the classroom.</h2>
        </div>
        <div className="max-w-[640px] mx-auto rounded-2xl border border-hairline bg-paper-raised p-8 mb-14" data-reveal="">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="chip">Traditional Training</span>
            <span className="text-ink-soft text-[14px]">Learn AI → leave training → go back to work.</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip bg-ink text-white border-ink">McCarthy</span>
            <span className="text-ink font-medium text-[14px]">Learn AI → apply AI → redesign workflow → measure impact → scale adoption.</span>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6" data-reveal="">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center text-center px-1">
              <span className="process-node mb-3.5">{String(i + 1).padStart(2, '0')}</span>
              <span className="process-label block">{s}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-ink-soft text-[14px] mt-10" data-reveal="">
          Built alongside <a href="/solutions/" className="inline-link">McCarthy AI Solutions</a> and demonstrated in the <a href="/ai-lab/" className="inline-link">McCarthy AI Lab</a>.
        </p>
      </div>
    </section>
  );
}
