import { ArrowRight } from 'lucide-react';

/**
 * "McCARTHY DIGITAL" teaser from index-7.html — dark twocol section closing
 * with the AI → Digital → Business node chain from the source, rebuilt with
 * the existing chip-on-dark vocabulary rather than the source's own markup.
 */
export default function McCarthyDigital() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">McCarthy Digital</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">
            AI is the front door. Technology is the infrastructure.
          </h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            When your AI strategy requires applications, dashboards, integrations, data systems or custom software, McCarthy Digital builds the technology layer that makes the transformation real.
          </p>
          <a href="/contact/" className="btn btn-accent">
            Explore McCarthy Digital
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8" data-reveal="">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="chip chip-on-dark">AI — Intelligence + Agents</span>
            <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
            <span className="chip chip-on-dark">Digital — Apps + Data + Integrations</span>
            <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
            <span className="chip chip-on-dark">Business — Operating System</span>
          </div>
        </div>
      </div>
    </section>
  );
}
