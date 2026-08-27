/**
 * Transcribed from sections/exec-summary.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ExecSummary() {
  return (
    <>
      <section id="exec-summary" className="py-20 sm:py-24 lg:py-28 border-b border-hairline scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[740px] mx-auto text-center" data-reveal="">
            {' '}
            <div className="font-display font-semibold leading-[1.5] text-[clamp(1.1875rem,0.85rem+2vw,1.625rem)]">
              {' '}
              <p className="text-muted">
                Lost revenue.
              </p>
              {' '}
              <p className="text-muted">
                Manual work.
              </p>
              {' '}
              <p className="text-muted">
                Slow service.
              </p>
              {' '}
              <p className="text-ink">
                Low visibility.
              </p>
              {' '}
            </div>
            {' '}
            <p className="mt-8 text-[18px] text-ink-soft leading-relaxed">
              {' '} Most organisations don&apos;t need another tool. They need someone to understand the business, find where AI creates real leverage, and turn that into a working system. {' '}
            </p>
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
