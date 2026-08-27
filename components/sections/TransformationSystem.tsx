/**
 * "HOW WE WORK" / The McCarthy Transformation System™ from index-7.html —
 * the seven-phase dark diagram (Discover, Diagnose, Prioritise, Architect,
 * Build, Adopt, Optimise).
 *
 * Home-page-only component: Framework.tsx carries this same visual language
 * (framework-node/framework-step) but is also rendered on /about/, so its
 * five-phase Grow Spark content is left untouched there rather than
 * overwritten with McCarthy's seven-phase system.
 */
export default function TransformationSystem() {
  return (
    <>
      <section id="transformation-system" className="py-28 lg:py-36 bg-ink overflow-hidden scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              How We Work
            </span>
            {' '}
            <h2>
              The McCarthy Transformation System™
            </h2>
            {' '}
            <p>
              A practical operating system for moving from AI ambition to AI adoption. Every phase makes AI and workforce adoption visible, not an afterthought.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16 lg:mt-20" data-reveal="">
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                01
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Discover
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Business, people, technology and AI readiness.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                02
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Diagnose
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Workflows, bottlenecks, data and AI opportunities.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                03
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Prioritise
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Revenue, cost, productivity, feasibility and strategic impact.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                04
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Architect
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                AI, data, systems, security and governance.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                05
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Build
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Agents, automation, applications and integrations.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                06
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Adopt
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Employee education, workforce training, governance and change.
              </p>
              {' '}
            </div>
            {' '}
            <div className="framework-step flex flex-col items-center text-center px-2">
              {' '}
              <div className="framework-node mb-[18px]">
                07
              </div>
              {' '}
              <h3 className="text-white text-[16px] font-bold mb-1.5">
                Optimise
              </h3>
              {' '}
              <p className="text-[#9BA1A7] text-[13px] leading-relaxed">
                Adoption, performance, ROI and continuous improvement.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
