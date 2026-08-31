import { ArrowRight, ChevronDown } from 'lucide-react';

export default function AboutAiLab() {
  const nodes = [
    { label: 'See', text: 'Interact with a real demo' },
    { label: 'Understand', text: 'See how it maps to your work' },
    { label: 'Decide', text: 'Where it belongs in your business' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">McCarthy AI Lab</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">
            We don&apos;t want you to take our word for it. We want you to experience what&apos;s possible.
          </h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            The AI Lab is our product and capability showcase — a growing collection of interactive demonstrations of AI agents, intelligent workflows, decision systems and industry-specific AI products, across logistics, manufacturing, construction, e-commerce, professional services, real estate, healthcare, finance, recruitment and education.
          </p>
          <a href="/ai-lab/" className="btn btn-accent">
            Explore the AI Lab
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-1.5" data-reveal="">
          {nodes.map((n, i) => (
            <div key={n.label} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[360px] rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent-bright">{n.label}</span>
                <p className="font-display font-semibold text-white text-[16px] mt-1">{n.text}</p>
              </div>
              {i < nodes.length - 1 && <ChevronDown className="w-4 h-4 text-[#9BA1A7] my-1.5 shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
