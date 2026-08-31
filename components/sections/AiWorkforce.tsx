import { ArrowRight } from 'lucide-react';

/**
 * "AI WORKFORCE" teaser from index-7.html. Dark twocol section, matching
 * the same on-dark section-head + chip vocabulary Framework.tsx and
 * IndustryDetails.tsx already use (see .chip-on-dark in base.css).
 */
export default function AiWorkforce() {
  return (
    <section id="ai-workforce" className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">AI Workforce</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">
            AI transformation doesn&apos;t work without people.
          </h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            We help organisations educate, train and equip their workforce to work alongside AI — safely, productively and intentionally. This is AI Workforce Transformation, not a ChatGPT training session.
          </p>
          <a href="/contact/" className="btn btn-accent">
            Build Your AI Workforce
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8" data-reveal="">
          <div className="flex flex-wrap gap-2.5">
            <span className="chip chip-on-dark">AI Literacy</span>
            <span className="chip chip-on-dark">Leadership AI</span>
            <span className="chip chip-on-dark">Role-Based AI</span>
            <span className="chip chip-on-dark">AI Productivity</span>
            <span className="chip chip-on-dark">AI Governance</span>
            <span className="chip chip-on-dark">AI Adoption</span>
          </div>
        </div>
      </div>
    </section>
  );
}
