import { ArrowRight } from 'lucide-react';

export default function AiWorkforceLabLink() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px]" data-reveal="">
          <span className="eyebrow !text-accent-bright block mb-3.5">AI Workforce + AI Lab</span>
          <h2 className="text-white text-[clamp(1.75rem,1.15rem+2.4vw,2.5rem)] leading-[1.15] mb-5">Learn it. Then build it.</h2>
          <p className="text-[#B9BEC3] text-[16.5px] leading-relaxed mb-8">
            Employees shouldn&apos;t just watch AI demonstrations. They should interact with them. We use the McCarthy AI Lab during workshops to demonstrate systems such as the AI CEO Command Center, AI Sales Agent, AI Operations Manager, AI Customer Service, AI Employee Knowledge Hub, AI Finance Intelligence, AI Recruitment Assistant and AI Document Intelligence — then ask employees: &ldquo;Where could something like this exist in my role?&rdquo;
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
