export default function AiAuditWhoFor() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">Who This Is For</span>
          <h2>Built for leaders who know AI matters — but need clarity.</h2>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>CEOs and founders deciding where to invest.</li>
            <li>COOs looking to improve operational efficiency.</li>
            <li>CIOs / CTOs evaluating AI architecture and priorities.</li>
            <li>CFOs looking for automation and intelligence opportunities.</li>
            <li>CHROs preparing the workforce for AI.</li>
            <li>Business-unit leaders looking to transform specific functions.</li>
            <li>Enterprise leadership teams building an AI transformation roadmap.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
