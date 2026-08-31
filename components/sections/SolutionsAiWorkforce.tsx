/**
 * "AI + PEOPLE" (AI Workforce teaser) from ai-solutions.html. Distinct from
 * the home page's AiWorkforce.tsx — different heading and a plain list
 * rather than chips — both point to the home page's #ai-workforce section.
 */
export default function SolutionsAiWorkforce() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">AI + People</span>
          <h2 className="mb-5">Technology creates the capability. People create the outcome.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed mb-8">
            AI adoption is an organisational change problem as much as a technology problem. McCarthy&apos;s AI Workforce capability helps leaders and employees understand what AI can do, how to use it responsibly and where it fits into their role.
          </p>
          <a href="/#ai-workforce" className="btn btn-primary">Explore AI Workforce</a>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>AI literacy for the wider workforce</li>
            <li>Leadership and executive AI programs</li>
            <li>Role-based AI productivity</li>
            <li>Department-specific workflow training</li>
            <li>AI governance and safe-use education</li>
            <li>Adoption playbooks and operating practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
