import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from sections/pillars.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 *
 * One addition since transcription: index-7.html closes its CAPABILITIES
 * section with a line placing McCarthy Digital as the engineering layer
 * beneath all five pillars. It was missing here, which left the five
 * capabilities reading as the whole offer and the McCarthyDigital section
 * further down the page arriving unprepared.
 */
export default function Pillars() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Capabilities
            </span>
            {' '}
            <h2>
              AI Transformation, built to dominate the hierarchy
            </h2>
            {' '}
            <p>
              Five AI capabilities, engineered together — not sold as separate line items.
            </p>
            {' '}
          </div>
          {' '}
          {/* 1 → 2 → 3 rather than 1 → 3: three pillar cards across a 640px
              viewport left each one about 190px wide, which broke every
              two-word heading onto its own line. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7" data-reveal="">
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                01
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                AI Strategy
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Readiness, opportunity mapping, roadmap and governance.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                02
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                AI Agents
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Sales, operations, customer, knowledge and executive agents.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                03
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                Intelligent Automation
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Workflow automation, orchestration and system integration.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                04
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                AI Intelligence
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Decision intelligence and executive visibility across the business.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                05
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                AI Workforce
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Corporate AI training, leadership AI, role-based AI and adoption.
                </p>
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="mt-9 text-ink-soft text-[16.5px] leading-relaxed max-w-[760px]" data-reveal="">
            McCarthy Digital remains the engineering layer behind all five — applications, dashboards, data, APIs and infrastructure.
            {' '}
            <a href="#mccarthy-digital" className="inline-link align-baseline">
              See McCarthy Digital
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
