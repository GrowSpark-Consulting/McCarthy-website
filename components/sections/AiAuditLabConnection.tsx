import { ArrowRight } from 'lucide-react';

export default function AiAuditLabConnection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px]" data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">See It, Don&apos;t Just Read It</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">See what&apos;s possible. Then decide where it belongs.</h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            We use the McCarthy AI Lab to make assessment findings tangible. If the assessment identifies a sales opportunity, we show the AI Sales Agent. If it identifies operational friction, we show the AI Operations Manager. If knowledge is fragmented, we show the AI Employee Knowledge Hub — turning an abstract recommendation into something leadership and employees can actually experience.
          </p>
          <a href="/ai-lab/" className="btn btn-accent">
            Explore the McCarthy AI Lab
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
