/**
 * "WHAT WE DO" from index-7.html — the Discover → Design → Build → Train →
 * Transform flow. Reuses the exact process-step/process-node vocabulary
 * SolutionsProcess.tsx already established for a light-background,
 * horizontal five-node chain (the dark equivalent is Framework.tsx).
 */
export default function WhatWeDoFlow() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">What We Do</span>
          <h2>Discover → Design → Build → Train → Transform.</h2>
          <p>
            Most AI companies start with what they can build. We start with what the business needs — then design, build, train the people, and help it stick.
          </p>
        </div>
        <div className="relative" data-fw-diagram="">
          <div className="hidden lg:block absolute left-0 right-0 h-px bg-hairline-strong" style={{ top: "24px" }} aria-hidden="true" />
          <div className="flex flex-col gap-9 lg:flex-row lg:gap-0 relative" data-reveal="">
            <div className="process-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10">
              <span className="process-node lg:mb-[18px]">01</span>
              <div>
                <span className="process-label block mb-1.5 lg:mb-2.5">Discover</span>
                <p className="text-ink-soft text-[13.5px] leading-relaxed lg:max-w-[180px]">
                  Business, people, data, technology and AI readiness.
                </p>
              </div>
            </div>
            <div className="process-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10">
              <span className="process-node lg:mb-[18px]">02</span>
              <div>
                <span className="process-label block mb-1.5 lg:mb-2.5">Design</span>
                <p className="text-ink-soft text-[13.5px] leading-relaxed lg:max-w-[180px]">
                  Map opportunities, prioritise use cases, define architecture and governance.
                </p>
              </div>
            </div>
            <div className="process-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10">
              <span className="process-node lg:mb-[18px]">03</span>
              <div>
                <span className="process-label block mb-1.5 lg:mb-2.5">Build</span>
                <p className="text-ink-soft text-[13.5px] leading-relaxed lg:max-w-[180px]">
                  AI agents, intelligent automation, applications and knowledge systems.
                </p>
              </div>
            </div>
            <div className="process-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10">
              <span className="process-node lg:mb-[18px]">04</span>
              <div>
                <span className="process-label block mb-1.5 lg:mb-2.5">Train</span>
                <p className="text-ink-soft text-[13.5px] leading-relaxed lg:max-w-[180px]">
                  Educate leadership and employees, embed AI into everyday work.
                </p>
              </div>
            </div>
            <div className="process-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10">
              <span className="process-node lg:mb-[18px]">05</span>
              <div>
                <span className="process-label block mb-1.5 lg:mb-2.5">Transform</span>
                <p className="text-ink-soft text-[13.5px] leading-relaxed lg:max-w-[180px]">
                  Deploy, measure adoption, improve and scale what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
