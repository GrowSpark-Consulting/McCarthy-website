import { ArrowLeft } from 'lucide-react';

/**
 * Shared hero for every /ai-lab/<product>/ detail page — same
 * page-hero-heading pattern used by every other page hero on the site, with
 * a "back to AI Lab" link and the source pages' own "DEMO ENVIRONMENT / NOT
 * CLIENT WORK / BUILT TO SHOW CAPABILITY" tag row, reusing the existing
 * chip class.
 */
export default function AiLabProductHero({ name, lead }: { name: string; lead: string }) {
  return (
    <section className="relative overflow-hidden border-b border-hairline pt-10 pb-16 lg:pb-20">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <a href="/ai-lab/" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to AI Lab
        </a>
        <div className="max-w-[820px]" data-reveal="">
          <span className="eyebrow block mb-5">McCarthy AI Lab · Demonstration</span>
          <h1 className="page-hero-heading mb-6 text-balance">
            AI <span className="text-accent">{name}</span>
          </h1>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mb-7">{lead}</p>
          <div className="flex flex-wrap gap-2.5">
            <span className="chip">Demo Environment</span>
            <span className="chip">Not Client Work</span>
            <span className="chip">Built To Show Capability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
