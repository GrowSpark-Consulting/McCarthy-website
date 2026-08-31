export default function AboutWhoWeWorkWith() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Who We Work With</span>
          <h2>For organisations ready to work differently.</h2>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
          <div className="detail-card"><h3>Growing Businesses</h3></div>
          <div className="detail-card"><h3>Mid-Market Organisations</h3></div>
          <div className="detail-card"><h3>Enterprise Organisations</h3></div>
          <div className="detail-card"><h3>Funded &amp; High-Growth Companies</h3></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mt-8" data-reveal="">
          <span className="chip">Logistics</span>
          <span className="chip">Manufacturing</span>
          <span className="chip">Construction</span>
          <span className="chip">E-commerce</span>
          <span className="chip">Professional Services</span>
          <span className="chip">Real Estate</span>
          <span className="chip">Healthcare</span>
          <span className="chip">Finance</span>
          <span className="chip">Recruitment</span>
          <span className="chip">Education</span>
        </div>
      </div>
    </section>
  );
}
