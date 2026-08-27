/**
 * The "FLAGSHIP OFFER" AI Transformation Assessment from index-7.html — the
 * intro, the "We Assess" list (9 items) and the "You Receive" list (6
 * items), side by side as in the source's own twocol layout. Uses the
 * existing check-item vocabulary (base.css) for both lists.
 */
export default function Outcomes() {
  return (
    <>
      <section id="outcomes" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Flagship Offer
            </span>
            {' '}
            <h2>
              Before you buy AI, find where it matters.
            </h2>
            {' '}
            <p>
              The McCarthy AI Transformation Assessment™ is a structured assessment of your processes, systems, people and data — identifying the highest-value AI and automation opportunities, with a prioritised roadmap to execution.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex justify-center mb-14" data-reveal="">
            <a href="/strategy/" className="btn btn-primary">
              Book Your AI Transformation Assessment
            </a>
          </div>
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12" data-reveal="">
            {' '}
            <div>
              {' '}
              <h3 className="subsection-heading mb-5">
                We Assess
              </h3>
              {' '}
              <ul className="flex flex-col gap-2.5">
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Business processes</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Revenue and growth workflows</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Operations</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Customer experience</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Data and knowledge</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Technology and systems</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Automation and AI agent opportunities</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Workforce readiness</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>AI governance and security</span></li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <h3 className="subsection-heading mb-5">
                You Receive
              </h3>
              {' '}
              <ul className="flex flex-col gap-2.5">
                {' '}
                <li className="check-item"><span className="check">✓</span><span>AI Opportunity Map</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Priority use cases and business impact assessment</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>Technology and architecture recommendations</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>AI Workforce recommendations</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>90-Day AI Transformation Roadmap</span></li>
                {' '}
                <li className="check-item"><span className="check">✓</span><span>12-Month transformation roadmap</span></li>
                {' '}
              </ul>
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
