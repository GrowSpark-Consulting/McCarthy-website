import { ArrowRight } from 'lucide-react';

/**
 * "PROOF" from index-7.html — the timeline + "how we think" statement list,
 * plus the source's own explanation for why there are no case studies yet.
 * Uses the existing chip chain (see IndustryDetails.tsx) for the timeline
 * and the q-list vocabulary (base.css) for the statement column.
 */
export default function Proof() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">Proof</span>
          <h2 className="mb-6">
            A transformation doesn&apos;t begin with software. It begins with understanding the business.
          </h2>
          <div className="flex flex-wrap items-center gap-2.5 mb-7">
            <span className="chip">Business Problem</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="chip">Assessment</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="chip">Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="chip">Implementation</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="chip">Measured Adoption</span>
          </div>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">
            Before we recommend a platform, an AI agent or a piece of architecture, we work through the McCarthy Transformation System — discovering how the business actually runs, diagnosing where it&apos;s constrained, and prioritising what will matter most.
          </p>
        </div>
        <div data-reveal="">
          <div className="q-list">
            <p>We map your processes before we propose a system.</p>
            <p>We size the business impact before we size the build.</p>
            <p>We design the architecture around your constraints, not a template.</p>
            <p>We measure adoption and outcomes, not just delivery.</p>
          </div>
          <p className="text-muted text-[13.5px] leading-relaxed mt-6">
            Verified client case studies will appear here as engagements complete. We&apos;d rather show you the AI Lab and how we think than dress up a placeholder as proof.
          </p>
        </div>
      </div>
    </section>
  );
}
