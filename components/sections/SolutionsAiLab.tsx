import { ArrowRight } from 'lucide-react';

/**
 * "AI LAB" teaser from ai-solutions.html. A distinct component from the
 * home page's AiLab.tsx — different heading, different fourth demo (this
 * source lists an Employee Knowledge Hub where the home page lists AI
 * Customer Service) — so it is not a duplicate, and both point to the same
 * canonical destination, the home page's #ai-lab section.
 */
export default function SolutionsAiLab() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head on-dark" data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">AI Transformation in Practice</span>
          <h2>What can an AI system actually do?</h2>
          <p>
            Our AI Lab makes the abstract concrete. Prospects can interact with demonstrations of the types of systems McCarthy can design and engineer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-reveal="">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-bright">AI Lab</span>
            <h3 className="text-white text-[17px] font-semibold mt-2 mb-1.5">AI CEO Command Center</h3>
            <p className="text-[#9BA1A7] text-[14px]">Executive intelligence.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-bright">AI Lab</span>
            <h3 className="text-white text-[17px] font-semibold mt-2 mb-1.5">AI Sales Agent</h3>
            <p className="text-[#9BA1A7] text-[14px]">Lead research and action.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-bright">AI Lab</span>
            <h3 className="text-white text-[17px] font-semibold mt-2 mb-1.5">AI Operations Manager</h3>
            <p className="text-[#9BA1A7] text-[14px]">Exception control.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-bright">AI Lab</span>
            <h3 className="text-white text-[17px] font-semibold mt-2 mb-1.5">AI Employee Knowledge Hub</h3>
            <p className="text-[#9BA1A7] text-[14px]">Answers and sources.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10" data-reveal="">
          <a href="/ai-lab/" className="btn btn-accent">
            Enter the McCarthy AI Lab
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
        <p className="text-center text-[#9BA1A7] text-[12.5px] mt-6 max-w-[560px] mx-auto" data-reveal="">
          The AI Lab contains capability demonstrations and concepts. These are never presented as completed client work unless genuinely delivered for that client.
        </p>
      </div>
    </section>
  );
}
