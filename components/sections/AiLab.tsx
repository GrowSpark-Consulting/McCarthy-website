/**
 * "McCARTHY AI LAB" from index-7.html. The source links each demo to its
 * own interactive page; none of those pages exist on this site, so the
 * four demos render as description cards (insight-card, same class Insights.tsx
 * uses) rather than links to nowhere, with a single CTA into the real
 * contact form instead of a non-existent /ai-lab/ page.
 */
export default function AiLab() {
  return (
    <section id="ai-lab" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">McCarthy AI Lab</span>
          <h2>Don&apos;t just read what we build. Use it.</h2>
          <p>
            Interactive capability demonstrations — not client work unless explicitly identified as a delivered engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7" data-reveal="">
          <article className="insight-card card-elevate">
            <span className="cat">AI Lab</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI CEO Command Center</h3>
            <p className="text-ink-soft text-[16px]">
              Executive intelligence that turns connected business data into decisions and risks.
            </p>
          </article>
          <article className="insight-card card-elevate">
            <span className="cat">AI Lab</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI Sales Agent</h3>
            <p className="text-ink-soft text-[16px]">
              Researches, qualifies, follows up and keeps the CRM moving.
            </p>
          </article>
          <article className="insight-card card-elevate">
            <span className="cat">AI Lab</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI Operations Manager</h3>
            <p className="text-ink-soft text-[16px]">
              Routes work, monitors exceptions and triggers intelligent actions.
            </p>
          </article>
          <article className="insight-card card-elevate">
            <span className="cat">AI Lab</span>
            <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">AI Customer Service</h3>
            <p className="text-ink-soft text-[16px]">
              Answers customers using company knowledge and escalates complex cases.
            </p>
          </article>
        </div>
        <div className="flex justify-center mt-10" data-reveal="">
          <a href="/contact/" className="btn btn-secondary">
            Talk to Us About the AI Lab
          </a>
        </div>
      </div>
    </section>
  );
}
