/**
 * "WHO WE HELP" from index-7.html — the four organisation types the source
 * opens that section with, before its industry tag cloud (which lives in
 * Industries.tsx, immediately below this on the home page).
 */
export default function WhoWeHelp() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Who We Help</span>
          <h2>Built for organisations ready to become AI-native.</h2>
        </div>
        <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
          <div className="detail-card">
            <h3>Growing Businesses</h3>
            <p>Ready for the infrastructure that gets you to the next stage.</p>
          </div>
          <div className="detail-card">
            <h3>Mid-Market Organisations</h3>
            <p>Complexity across people, process and technology, connected into one architecture.</p>
          </div>
          <div className="detail-card">
            <h3>Enterprise Organisations</h3>
            <p>Modernise legacy systems and create transformation at scale.</p>
          </div>
          <div className="detail-card">
            <h3>Funded &amp; High-Growth</h3>
            <p>Move fast — on infrastructure built to last.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
