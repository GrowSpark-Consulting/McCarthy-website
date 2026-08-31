export default function AboutBeliefs() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="section-head" data-reveal="">
            <span className="eyebrow block mb-3.5">How We Think</span>
            <h2>Six ideas that shape every engagement.</h2>
          </div>
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            <div className="why-card">
              <span className="num">01</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Outcomes Over Activity</h3>
                <p className="text-[16px] text-ink-soft">A deployed AI system isn&apos;t automatically a successful one. We care about faster work, better decisions, stronger customer experience and lower friction.</p>
              </div>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Build For The Workflow</h3>
                <p className="text-[16px] text-ink-soft">AI should operate inside the process, not sit beside it — designed around the steps, systems, people and exceptions that make it real.</p>
              </div>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Human Judgement Matters</h3>
                <p className="text-[16px] text-ink-soft">Not every decision should be automated. We design clear boundaries between AI autonomy, AI assistance and human approval.</p>
              </div>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Adoption Is Part Of Implementation</h3>
                <p className="text-[16px] text-ink-soft">A system employees don&apos;t understand or trust won&apos;t create its intended value. Education and governance are part of transformation.</p>
              </div>
            </div>
            <div className="why-card">
              <span className="num">05</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Start Practical, Then Scale</h3>
                <p className="text-[16px] text-ink-soft">Prove value through focused initiatives before adding complexity. Build what matters, learn quickly, scale what works.</p>
              </div>
            </div>
            <div className="why-card">
              <span className="num">06</span>
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">Build For Change</h3>
                <p className="text-[16px] text-ink-soft">AI will keep evolving. Systems should let organisations adapt, rather than locking them into a single model, tool or workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
