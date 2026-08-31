import { ArrowRight } from 'lucide-react';

export default function IndustriesLabConnection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px]" data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">See It In Your Industry</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">See what AI could look like in your industry.</h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            Each industry above connects to relevant McCarthy AI Lab demonstrations. Logistics → AI Logistics Control Tower. Manufacturing → AI Factory Command Center. Construction → AI Construction Command Center. E-commerce → AI Commerce Command Center. Professional Services → AI Professional Services OS. The Lab is where prospects experience tangible AI systems rather than only reading about capabilities.
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
