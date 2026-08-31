const INDUSTRIES = [
  { id: 'logistics', label: 'Logistics & Transportation' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'construction', label: 'Construction' },
  { id: 'ecommerce', label: 'E-commerce & Retail' },
  { id: 'professional-services', label: 'Professional Services' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance & Accounting' },
  { id: 'recruitment-hr', label: 'Recruitment & HR' },
  { id: 'education', label: 'Education' },
];

export default function IndustrySelector() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Choose Your Industry</span>
          <h2>Jump straight to your industry.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3" data-reveal="">
          {INDUSTRIES.map((ind) => (
            <a key={ind.id} href={`#${ind.id}`} className="anchor-pill">{ind.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
