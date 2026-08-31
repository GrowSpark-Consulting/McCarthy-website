/**
 * "INDUSTRY AI" from ai-lab.html — ten industries, each a short note plus a
 * small grid of concept systems. Data-driven since the shape (h3 + note +
 * service-card grid) repeats identically across all ten. The one demo link
 * the source gives (AI Employee Knowledge Hub, under Recruitment & HR)
 * isn't repeated here since that demo page doesn't exist on this site — the
 * same product is already covered with real content on Featured/Products.
 */
const INDUSTRIES = [
  {
    name: 'Logistics',
    note: 'Fleet, dispatch, documents and exceptions, in one operating view.',
    items: [
      { t: 'AI Logistics Control Tower', d: 'One intelligent view across fleet, drivers, routes, orders and exceptions.' },
      { t: 'AI Dispatch Agent', d: 'Checks capacity, assigns routes and communicates with drivers and customers.' },
      { t: 'AI Fleet Intelligence', d: 'Analyses utilisation, fuel, maintenance and driver performance.' },
      { t: 'AI Document Agent', d: 'Processes proof of delivery, invoices and vendor paperwork.' },
    ],
  },
  {
    name: 'Manufacturing',
    note: 'Orders, production, quality and maintenance, connected.',
    items: [
      { t: 'AI Factory Command Center', d: 'Connects orders, production, quality, inventory and delivery.' },
      { t: 'AI Production Planner', d: 'Generates production priorities, schedules and risk signals.' },
      { t: 'AI Quality Inspector', d: 'Identifies potential quality issues and routes them for human review.' },
      { t: 'AI Maintenance Intelligence', d: 'Flags potential equipment failures and prioritises maintenance.' },
      { t: 'AI Factory Knowledge Hub', d: 'Machine procedures, SOPs and quality standards, on demand.' },
    ],
  },
  {
    name: 'Construction',
    note: 'Budget, materials, labour and progress, in one place.',
    items: [
      { t: 'AI Construction Command Center', d: 'Brings budget, materials, contractors, labour and schedule into one view.' },
      { t: 'AI BOQ Assistant', d: 'Extracts materials, quantities and specifications from drawings and documents.' },
      { t: 'AI Site Safety', d: 'Flags potential PPE and restricted-area issues for human review.' },
      { t: 'AI Project Manager', d: 'Identifies at-risk projects and explains the drivers behind schedule and cost.' },
    ],
  },
  {
    name: 'E-commerce',
    note: 'Orders, inventory, marketing and support, understood together.',
    items: [
      { t: 'AI Commerce Command Center', d: "Understands what's selling, slowing down or creating risk." },
      { t: 'AI Shopping Agent', d: 'Understands intent, recommends products and assists the purchase journey.' },
      { t: 'AI Customer Service Agent', d: 'Handles order tracking, returns, refunds and complaints.' },
      { t: 'AI Inventory Intelligence', d: 'Flags stockouts, overstock and shifting demand.' },
      { t: 'AI Marketing Intelligence', d: 'Analyses ROAS, CAC, conversion and customer segments.' },
    ],
  },
  {
    name: 'Professional Services',
    note: 'Clients, projects, knowledge and delivery, connected.',
    items: [
      { t: 'AI Professional Services OS', d: 'An intelligent layer across clients, projects, knowledge and people.' },
      { t: 'AI Client Intelligence', d: 'Prepares client briefings by researching history and surfacing opportunities.' },
      { t: 'AI Proposal Agent', d: 'Analyses requirements and drafts proposal structures for human review.' },
      { t: 'AI Knowledge Agent', d: 'Answers internal questions using approved methodologies and past work.' },
      { t: 'AI Project Intelligence', d: 'Flags projects that may be becoming unprofitable or at risk.' },
    ],
  },
  {
    name: 'Real Estate',
    note: 'Property, transaction and lease intelligence.',
    items: [
      { t: 'AI Property Intelligence', d: 'Analyses property, transaction, market and rental information.' },
      { t: 'AI Deal Underwriter', d: 'Evaluates revenue, costs, yield and risk to support investment review.' },
      { t: 'AI Lease Intelligence', d: 'Extracts rent, escalations, renewals and obligations from leases.' },
    ],
  },
  {
    name: 'Healthcare',
    note: 'Positioned as assistive, administrative technology — not unsupported clinical decision-making.',
    items: [
      { t: 'AI Medical Scribe', d: 'Captures and structures clinician-patient conversation into draft documentation for professional review.' },
      { t: 'Healthcare Knowledge Assistant', d: 'Provides answers against approved internal knowledge and sources.' },
      { t: 'AI Healthcare Operations Assistant', d: 'Supports appointments, documentation and patient communications.' },
    ],
  },
  {
    name: 'Finance',
    note: 'Revenue, payables and receivables, understood in real time.',
    items: [
      { t: 'AI Finance Command Center', d: 'Connects revenue, expenses, payables and cash into one management view.' },
      { t: 'AI Accounts Payable', d: 'Invoice → extract → validate → match → approve → record.' },
      { t: 'AI CFO', d: 'Generates management briefings on financial changes, risks and anomalies.' },
    ],
  },
  {
    name: 'Recruitment & HR',
    note: 'Screening, interviews and employee knowledge, supported end to end.',
    items: [
      { t: 'AI Recruitment Agent', d: 'Screens, summarises and scores candidates against defined criteria.' },
      { t: 'AI Interview Intelligence', d: 'Transcribes interviews and maps evidence against defined competencies.' },
      { t: 'AI Employee Knowledge Hub', d: 'Answers employee questions about policies and processes.' },
    ],
  },
  {
    name: 'Education',
    note: 'Learning support, teaching workflows and institutional visibility.',
    items: [
      { t: 'AI Learning Assistant', d: 'Provides personalised explanations, practice and learning support.' },
      { t: 'AI Teacher Assistant', d: 'Supports lesson preparation, assessment workflows and admin tasks.' },
      { t: 'AI Institution Intelligence', d: 'Surfaces insight across attendance, performance and admissions.' },
    ],
  },
];

export default function AiLabIndustries() {
  return (
    <section id="industries" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Industry AI</span>
          <h2>Systems built around how your industry actually runs.</h2>
          <p>The systems below are illustrated concepts for each industry — the starting shape of what McCarthy can design and build. Interactive demonstrations exist today for the horizontal products above; industry-specific builds are engineered per engagement.</p>
        </div>
        <div className="flex flex-col gap-14" data-reveal="">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name}>
              <h3 className="text-[21px] mb-1.5">{ind.name}</h3>
              <p className="text-muted text-[13px] mb-5">{ind.note}</p>
              <div className={`grid sm:grid-cols-2 gap-5 ${ind.items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                {ind.items.map((it) => (
                  <div key={it.t} className="service-card">
                    <h3 className="text-[16px]">{it.t}</h3>
                    <p className="text-[13.5px]">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
