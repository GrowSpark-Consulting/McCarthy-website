/**
 * "TOOLS VS TRANSFORMATION" from ai-solutions.html — no eyebrow in the
 * source, so section-head renders without one here too.
 */
export default function AiApproach() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <h2>The opportunity isn&apos;t in adding AI. It&apos;s in redesigning how work gets done.</h2>
          <p>
            AI can write, analyse, research, reason, classify, recommend and increasingly take action. But the value only appears when those capabilities are connected to the right business process, data, systems and people. That is the difference between experimenting with AI and transforming a business with it.
          </p>
        </div>
        <div className="max-w-[640px] mx-auto rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="chip">AI Implementation</span>
            <span className="text-ink-soft text-[14px]">&ldquo;What tool should we deploy?&rdquo;</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="chip bg-ink text-white border-ink">AI Transformation</span>
            <span className="text-ink font-medium text-[14px]">&ldquo;How should this part of the business work differently now that AI exists?&rdquo;</span>
          </div>
          <h3 className="text-[20px]">McCarthy starts with the work — not the tool.</h3>
        </div>
      </div>
    </section>
  );
}
