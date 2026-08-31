/**
 * Transcribed from sections/value-strip.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ValueStrip() {
  return (
    <>
      <section className="py-11 sm:py-12 bg-accent-tint">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 text-center" data-reveal="">
          {' '}
          {/* index-7.html labels this band "CORE STATEMENT". Without the
              eyebrow the strip read as a stray pull-quote between two dark
              sections rather than as the positioning line it is. */}
          <span className="eyebrow !text-accent-deep block mb-3.5">
            Core Statement
          </span>
          {' '}
          <p className="font-display font-bold text-accent-deep text-[clamp(1rem,0.75rem+1.4vw,1.25rem)] leading-relaxed max-w-[760px] mx-auto">
            {' '} We don&apos;t sell AI tools. We engineer AI into the business. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
