import { ArrowRight } from 'lucide-react';

export default function AiLabWorkforceLink() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">AI Lab + AI Workforce</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">Learn it. Then build it.</h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            The AI Lab is used inside McCarthy workforce programs. Employees interact with the demos, identify opportunities in their own roles, then learn how to redesign their workflows around AI — connecting AI implementation directly to workforce transformation.
          </p>
          <a href="/ai-workforce/" className="btn btn-accent">
            Explore AI Workforce
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-1.5" data-reveal="">
          {[
            { label: 'Lab', text: 'See the system' },
            { label: 'Workforce', text: 'Learn to work with it' },
            { label: 'Role', text: 'Redesign your own workflow' },
          ].map((n, i, arr) => (
            <div key={n.label} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[360px] rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent-bright">{n.label}</span>
                <p className="font-display font-semibold text-white text-[16px] mt-1">{n.text}</p>
              </div>
              {i < arr.length - 1 && <span className="text-[#9BA1A7] text-lg my-1">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
