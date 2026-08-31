export default function AiAuditApproach() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <h2>Don&apos;t start with the AI tool. Start with the business.</h2>
          <p>
            The right AI strategy begins with the way work happens today. We examine where people spend time, where information gets trapped, where decisions slow down, where customers experience friction, where errors occur and where teams repeatedly perform work that could be augmented or automated. Then we determine where AI actually belongs — and where it doesn&apos;t.
          </p>
        </div>
        <div className="max-w-[640px] mx-auto rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="chip">The Wrong Question</span>
            <span className="text-ink-soft text-[14px]">&ldquo;Where can we use AI?&rdquo;</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip bg-ink text-white border-ink">The Better Question</span>
            <span className="text-ink font-medium text-[14px]">&ldquo;Where can AI materially improve the way this business operates?&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
