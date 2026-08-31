export default function AboutResponsibleAi() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">Responsible AI</span>
          <h2 className="mb-5">Build with ambition. Deploy with responsibility.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">AI creates enormous opportunity, but enterprise adoption requires discipline.</p>
        </div>
        <div className="rounded-2xl border border-hairline bg-paper-raised p-8" data-reveal="">
          <ul className="who-list">
            <li>Protect sensitive information.</li>
            <li>Control access and permissions.</li>
            <li>Validate important outputs.</li>
            <li>Maintain human oversight where required.</li>
            <li>Monitor AI behaviour.</li>
            <li>Define clear ownership.</li>
            <li>Train employees on responsible use.</li>
            <li>Design governance into the system rather than adding it after deployment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
