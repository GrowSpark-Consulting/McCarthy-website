/**
 * The ten industry sections from industries-3.html. Data-driven since every
 * block shares the same shape (kicker, heading, optional intro, tags,
 * featured product card, supporting-systems card). `soft` mirrors the
 * source's own alternating light background between industries. Every
 * "Launch Interactive Demo" link in the source pointed at a dedicated demo
 * page (e.g. ai-finance-intelligence.html) that doesn't exist on this site,
 * so those are dropped — each card keeps the one CTA that already resolves
 * ("Build This For My Business" → /contact/, "Explore ⟨Industry⟩ AI" →
 * /ai-lab/#industries).
 */
type Field = { label: string; text: string };
type Item = { title: string; desc: string };

type Industry = {
  id: string;
  kicker: string;
  heading: string;
  intro?: string;
  tags: string[];
  featured: { tagline: string; title: string; fields: Field[] };
  supporting: { title: string; items: Item[] };
  soft?: boolean;
};

const INDUSTRIES: Industry[] = [
  {
    id: 'logistics',
    kicker: 'Logistics & Transportation',
    heading: 'Make every movement more intelligent.',
    intro: 'Logistics businesses operate across vehicles, drivers, routes, orders, customers, documents and time-sensitive decisions. AI can connect those signals and help teams detect problems before they become expensive.',
    tags: ['Fleet Intelligence', 'Route & Dispatch', 'Exception Management', 'Control Towers', 'Driver Performance', 'Document Intelligence', 'Customer Communication', 'Predictive Maintenance', 'Operations Reporting'],
    featured: {
      tagline: 'Featured System',
      title: 'AI Logistics Control Tower',
      fields: [
        { label: 'Business Problem', text: 'Fragmented logistics visibility creates delays, manual coordination and poor decision-making.' },
        { label: 'What AI Does', text: 'One intelligent view across fleet, orders, routes and exceptions.' },
        { label: 'Inputs / Systems', text: 'GPS, orders, driver data, ERP, customer data and dispatch systems.' },
        { label: 'How The Workflow Changes', text: 'Exceptions get surfaced and routed before they become customer-facing delays, instead of discovered after the fact.' },
        { label: 'Expected Outcome', text: 'Fewer missed deliveries, faster exception response, clearer operational visibility.' },
      ],
    },
    supporting: {
      title: 'Also in Logistics AI',
      items: [
        { title: 'AI Dispatch Agent', desc: 'Checks capacity, recommends or assigns routes and communicates with drivers and customers.' },
        { title: 'AI Fleet Intelligence', desc: 'Analyses utilisation, maintenance, fuel and driver performance signals.' },
        { title: 'AI Document Agent', desc: 'Extracts and validates information from PODs, invoices and logistics documents.' },
      ],
    },
  },
  {
    id: 'manufacturing',
    kicker: 'Manufacturing',
    heading: 'Turn the factory into an intelligent operating system.',
    intro: 'Manufacturing organisations need visibility across orders, production, quality, inventory, equipment and delivery. AI can help identify bottlenecks, predict risk and support faster operational decisions.',
    tags: ['Production Planning', 'Factory Intelligence', 'Quality Inspection', 'Predictive Maintenance', 'Inventory Intelligence', 'Supply Chain Visibility', 'Worker Knowledge', 'Production Reporting'],
    soft: true,
    featured: {
      tagline: 'Featured System',
      title: 'AI Factory Command Center',
      fields: [
        { label: 'Business Problem', text: 'Orders, production, quality and inventory are tracked in separate systems and spreadsheets, so risk is spotted late.' },
        { label: 'What AI Does', text: 'Intelligent visibility across orders, production, quality, inventory and delivery.' },
        { label: 'Inputs / Systems', text: 'MES, quality records, inventory data and ERP.' },
        { label: 'How The Workflow Changes', text: 'Floor and planning teams see risk signals in one place instead of reconciling separate reports.' },
        { label: 'Expected Outcome', text: 'Earlier risk detection, fewer production surprises, faster planning decisions.' },
      ],
    },
    supporting: {
      title: 'Also in Manufacturing AI',
      items: [
        { title: 'AI Production Planner', desc: 'Uses orders, capacity, materials and deadlines to support scheduling and priorities.' },
        { title: 'AI Quality Inspector', desc: 'Computer vision and intelligence workflows for potential defect detection and human review.' },
        { title: 'AI Maintenance Intelligence', desc: 'Identifies equipment risk and prioritises maintenance.' },
        { title: 'AI Factory Knowledge Hub', desc: 'Intelligent access to SOPs, machine procedures and quality standards.' },
      ],
    },
  },
  {
    id: 'construction',
    kicker: 'Construction',
    heading: 'Build with greater visibility. Manage with greater intelligence.',
    intro: 'Construction projects combine budgets, schedules, materials, contractors, labour, drawings, documents and site activity. AI can help project teams identify risk earlier and reduce administrative workload.',
    tags: ['Project Risk', 'Cost Intelligence', 'Procurement', 'BOQ & Document Intelligence', 'Site Safety', 'Contractor Coordination', 'Project Reporting', 'Knowledge Management'],
    featured: {
      tagline: 'Featured System',
      title: 'AI Construction Command Center',
      fields: [
        { label: 'Business Problem', text: 'Budget, schedule, materials and contractor data live in different documents and systems, so risk surfaces too late to act on.' },
        { label: 'What AI Does', text: 'Connects budget, materials, contractors, labour, schedules and progress into one operating view.' },
        { label: 'Inputs / Systems', text: 'Project documents, schedules, budgets and contractor data.' },
        { label: 'How The Workflow Changes', text: 'Project leads see cost and schedule risk as it emerges, not at the next status meeting.' },
        { label: 'Expected Outcome', text: 'Earlier risk visibility, less administrative reconciliation.' },
      ],
    },
    supporting: {
      title: 'Also in Construction AI',
      items: [
        { title: 'AI BOQ Assistant', desc: 'Extracts materials, quantities and specifications from project documents to assist BOQ preparation.' },
        { title: 'AI Site Safety', desc: 'Computer vision to identify potential PPE and safety issues for human review.' },
        { title: 'AI Project Manager', desc: 'Identifies projects at risk and explains schedule, cost, procurement or delivery drivers.' },
      ],
    },
  },
  {
    id: 'ecommerce',
    kicker: 'E-commerce & Retail',
    heading: 'Turn customer, product and commerce data into intelligent action.',
    intro: "E-commerce businesses generate signals across customers, products, inventory, orders, marketing and support. AI can connect those signals to improve customer experience and operating decisions.",
    tags: ['AI Shopping', 'Customer Service', 'Product Recommendations', 'Inventory Intelligence', 'Customer Segmentation', 'Marketing Intelligence', 'Order Operations', 'Retention & Churn Signals'],
    soft: true,
    featured: {
      tagline: 'Featured System',
      title: 'AI Commerce Command Center',
      fields: [
        { label: 'Business Problem', text: "Orders, customers, inventory, marketing and support data sit in separate platforms, making it hard to see what's actually driving performance." },
        { label: 'What AI Does', text: 'Connects orders, customers, inventory, marketing and support into one intelligent view.' },
        { label: 'Inputs / Systems', text: 'E-commerce platform, CRM, inventory and marketing tools.' },
        { label: 'How The Workflow Changes', text: "Teams see what's selling, slowing or at risk in one place instead of stitching together exports." },
        { label: 'Expected Outcome', text: 'Faster response to demand shifts, fewer stockouts, clearer marketing ROI.' },
      ],
    },
    supporting: {
      title: 'Also in E-commerce AI',
      items: [
        { title: 'AI Shopping Agent', desc: 'Understands customer intent, recommends products and assists the buying journey.' },
        { title: 'AI Customer Service Agent', desc: 'Supports order tracking, returns, refunds and product questions.' },
        { title: 'AI Inventory Intelligence', desc: 'Identifies stockout, overstock and demand risks.' },
        { title: 'AI Marketing Intelligence', desc: 'Analyses ROAS, CAC, conversion and product performance.' },
      ],
    },
  },
  {
    id: 'professional-services',
    kicker: 'Professional Services',
    heading: 'Turn expertise into an intelligent operating advantage.',
    intro: 'Consulting, accounting, legal, recruitment, engineering, marketing and other professional services businesses depend heavily on people, knowledge, documents, proposals, client relationships and project delivery.',
    tags: ['Client Intelligence', 'Proposal Automation', 'Knowledge Management', 'Research', 'Project Intelligence', 'Document Intelligence', 'Meeting Intelligence', 'Delivery & Margin Visibility'],
    featured: {
      tagline: 'Featured System',
      title: 'AI Professional Services OS',
      fields: [
        { label: 'Business Problem', text: 'Client history, project delivery, knowledge and margin data live in different tools, so partners make decisions on incomplete information.' },
        { label: 'What AI Does', text: 'An intelligent layer across clients, projects, knowledge, proposals, people and delivery.' },
        { label: 'Inputs / Systems', text: 'CRM, project, time-tracking and knowledge base data.' },
        { label: 'How The Workflow Changes', text: 'Partners and delivery leads see client and project health without chasing updates.' },
        { label: 'Expected Outcome', text: 'Earlier visibility into at-risk projects and margin, faster proposal turnaround.' },
      ],
    },
    supporting: {
      title: 'Also in Professional Services AI',
      items: [
        { title: 'AI Client Intelligence', desc: 'Prepares client briefings using history, research and account information.' },
        { title: 'AI Proposal Agent', desc: 'Analyses requirements and prepares proposal structures and first drafts for human review.' },
        { title: 'AI Knowledge Agent', desc: 'Answers internal questions using approved methodologies and knowledge.' },
        { title: 'AI Project Intelligence', desc: 'Connects people, hours, projects, delivery and margin.' },
      ],
    },
  },
  {
    id: 'real-estate',
    kicker: 'Real Estate',
    heading: 'Turn property data and documents into intelligent decisions.',
    tags: ['Property Intelligence', 'Deal Underwriting', 'Lease Intelligence', 'Document Processing', 'Tenant Communication', 'Market Intelligence', 'Portfolio Reporting'],
    soft: true,
    featured: {
      tagline: 'Featured System',
      title: 'AI Property Intelligence',
      fields: [
        { label: 'Business Problem', text: 'Property, transaction and lease data are spread across documents, spreadsheets and systems, slowing investment and leasing decisions.' },
        { label: 'What AI Does', text: 'Analyses property, transaction, rental and financial information in one place.' },
        { label: 'Inputs / Systems', text: 'Property, transaction, lease and market data.' },
        { label: 'How The Workflow Changes', text: 'Investment and leasing teams work from a consolidated view instead of reconciling spreadsheets.' },
        { label: 'Expected Outcome', text: 'Faster underwriting, clearer portfolio visibility.' },
      ],
    },
    supporting: {
      title: 'Also in Real Estate AI',
      items: [
        { title: 'AI Deal Underwriter', desc: 'Evaluates revenue, costs, yield, financing and risk.' },
        { title: 'AI Lease Intelligence', desc: 'Extracts rent, escalations, renewal, termination, obligations and key dates.' },
      ],
    },
  },
  {
    id: 'healthcare',
    kicker: 'Healthcare',
    heading: 'Make healthcare operations more intelligent while keeping people at the centre.',
    intro: 'Healthcare demonstrations are positioned as assistive and administrative technology — not unsupported clinical decision-making — unless verified clinical capabilities and compliance are actually established.',
    tags: ['Clinical Documentation Support', 'Knowledge Retrieval', 'Administrative Automation', 'Patient Communication', 'Scheduling', 'Document Intelligence', 'Operational Intelligence'],
    featured: {
      tagline: 'Featured System · Assistive / Administrative',
      title: 'AI Medical Scribe',
      fields: [
        { label: 'Business Problem', text: 'Clinicians spend significant time on documentation instead of patient care.' },
        { label: 'What AI Does', text: 'Captures and structures clinician-patient conversation into draft documentation for professional review. Assistive and administrative only — every output requires clinician review.' },
        { label: 'Inputs / Systems', text: 'Clinician-patient conversation (with consent) and documentation templates.' },
        { label: 'How The Workflow Changes', text: 'Clinicians review and finalise a structured draft note instead of writing it from scratch.' },
        { label: 'Expected Outcome', text: 'Reduced documentation time, more consistent notes — subject to clinical and compliance review.' },
      ],
    },
    supporting: {
      title: 'Also in Healthcare AI',
      items: [
        { title: 'Healthcare Knowledge Assistant', desc: 'Answers questions against approved internal sources.' },
        { title: 'AI Healthcare Operations Assistant', desc: 'Supports appointments, documentation, communication and administrative workflows.' },
      ],
    },
  },
  {
    id: 'finance',
    kicker: 'Finance & Accounting',
    heading: 'Turn financial operations into intelligent decision systems.',
    tags: ['Accounts Payable', 'Document Processing', 'Financial Reporting', 'Reconciliation Support', 'Receivables', 'Cash Visibility', 'Anomaly Detection', 'Management Intelligence'],
    soft: true,
    featured: {
      tagline: 'Featured System',
      title: 'AI Finance Command Center',
      fields: [
        { label: 'Business Problem', text: "Revenue, expenses, receivables and payables live in different systems, so leadership sees financial risk after it's already a problem." },
        { label: 'What AI Does', text: 'Connects revenue, expenses, AR, AP and cash information into one management view.' },
        { label: 'Inputs / Systems', text: 'Accounting platform, ERP and banking feeds.' },
        { label: 'How The Workflow Changes', text: 'Finance surfaces anomalies and receivables risk proactively instead of at month-end close.' },
        { label: 'Expected Outcome', text: 'Earlier risk detection, faster close, clearer cash visibility.' },
      ],
    },
    supporting: {
      title: 'Also in Finance AI',
      items: [
        { title: 'AI Accounts Payable', desc: 'Invoice → extract → validate → match → approve → record.' },
        { title: 'AI CFO', desc: 'Produces management briefings that explain changes, risks, overdue receivables and recommended actions.' },
      ],
    },
  },
  {
    id: 'recruitment-hr',
    kicker: 'Recruitment & HR',
    heading: 'Build a more intelligent talent operation.',
    tags: ['Candidate Screening', 'Recruitment Coordination', 'Interview Intelligence', 'Employee Knowledge', 'Onboarding', 'HR Document Intelligence', 'Workforce Analytics'],
    featured: {
      tagline: 'Featured System',
      title: 'AI Recruitment Agent',
      fields: [
        { label: 'Business Problem', text: "Recruiters can't manually screen every application, so strong candidates get missed or delayed." },
        { label: 'What AI Does', text: 'Screens candidates, summarises applications, supports scheduling and updates recruitment systems — human judgement stays in the loop.' },
        { label: 'Inputs / Systems', text: 'Resumes, applications, job requirements and the ATS.' },
        { label: 'How The Workflow Changes', text: 'Recruiters review a ranked, summarised shortlist instead of reading every application manually.' },
        { label: 'Expected Outcome', text: 'Faster, more consistent shortlisting.' },
      ],
    },
    supporting: {
      title: 'Also in HR AI',
      items: [
        { title: 'AI Interview Intelligence', desc: 'Transcribes and summarises interviews and maps evidence against defined competencies for human review.' },
        { title: 'AI Employee Knowledge Hub', desc: 'Answers employee questions using approved policies and internal sources.' },
      ],
    },
  },
  {
    id: 'education',
    kicker: 'Education',
    heading: 'Create more intelligent learning and institutional operations.',
    tags: ['Personalised Learning', 'Teacher Assistance', 'Student Support', 'Assessment Workflows', 'Admissions', 'Attendance', 'Institutional Intelligence'],
    soft: true,
    featured: {
      tagline: 'Featured System',
      title: 'AI Learning Assistant',
      fields: [
        { label: 'Business Problem', text: "Students learn at different paces, but teachers can't personalise attention for every student individually." },
        { label: 'What AI Does', text: 'Provides personalised explanations, practice and learning support.' },
        { label: 'Inputs / Systems', text: 'Curriculum content and student progress data.' },
        { label: 'How The Workflow Changes', text: 'Students get on-demand, personalised support between classroom sessions.' },
        { label: 'Expected Outcome', text: 'More consistent practice and support outside class time.' },
      ],
    },
    supporting: {
      title: 'Also in Education AI',
      items: [
        { title: 'AI Teacher Assistant', desc: 'Supports lesson preparation, assessment workflows and administrative tasks.' },
        { title: 'AI Institution Intelligence', desc: 'Surfaces insight across attendance, performance and admissions.' },
      ],
    },
  },
];

function ProductCard({ tagline, title, fields }: Industry['featured']) {
  return (
    <div className="rounded-2xl border border-hairline bg-paper-raised p-7">
      <span className="font-mono text-[10.5px] tracking-[0.09em] uppercase text-accent block mb-2.5">{tagline}</span>
      <h3 className="text-[19px] mb-4">{title}</h3>
      <div className="flex flex-col gap-3.5">
        {fields.map((f) => (
          <div key={f.label}>
            <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1">{f.label}</span>
            <p className="text-ink-soft text-[14px] leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-hairline">
        <a href="/contact/" className="inline-link">Build This For My Business</a>
      </div>
    </div>
  );
}

function SupportingCard({ title, items, industryLabel }: Industry['supporting'] & { industryLabel: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-paper-raised p-7">
      <span className="font-mono text-[10.5px] tracking-[0.09em] uppercase text-accent block mb-2.5">Supporting Systems</span>
      <h3 className="text-[19px] mb-4">{title}</h3>
      <div className="flex flex-col gap-3.5">
        {items.map((it) => (
          <div key={it.title}>
            <p className="font-display font-semibold text-ink text-[14.5px] mb-0.5">{it.title}</p>
            <p className="text-ink-soft text-[14px] leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-hairline">
        <a href="/ai-lab/#industries" className="inline-link">Explore {industryLabel} AI</a>
      </div>
    </div>
  );
}

export default function IndustryBlocks() {
  return (
    <>
      {INDUSTRIES.map((ind) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-20 sm:py-24 lg:py-28 scroll-mt-24 ${ind.soft ? 'bg-paper-sunken' : ''}`}
        >
          <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
            <div className="max-w-[820px]" data-reveal="">
              <span className="eyebrow block mb-3.5">{ind.kicker}</span>
              <h2>{ind.heading}</h2>
              {ind.intro && <p className="text-ink-soft text-[16px] max-w-[680px] mt-4">{ind.intro}</p>}
            </div>
            <div className="flex flex-wrap gap-2.5 mt-6" data-reveal="">
              {ind.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10" data-reveal="">
              <ProductCard {...ind.featured} />
              <SupportingCard {...ind.supporting} industryLabel={ind.kicker.split(' ')[0]} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
