export default function AiWorkforceChampions() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">AI Champions</span>
          <h2 className="mb-5">Create an internal AI movement.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">
            We help organisations establish an internal network of AI Champions across departments. The goal is to create internal AI capability rather than permanent dependence on consultants.
          </p>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>Identify AI opportunities.</li>
            <li>Help colleagues adopt AI.</li>
            <li>Test workflows.</li>
            <li>Promote safe usage.</li>
            <li>Surface new use cases.</li>
            <li>Support adoption.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
