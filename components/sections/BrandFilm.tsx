import { Play } from 'lucide-react';

/**
 * McCarthy Brand Film teaser, from index-7.html's "McCARTHY BRAND FILM"
 * section. The source links out to an actual video; we have none to embed,
 * so this renders as a dark clickable panel (reusing the site's existing
 * bg-ink particle texture) that scrolls down to the on-page contact form
 * rather than playing anything.
 */
export default function BrandFilm() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">McCarthy Brand Film</span>
          <h2>Build the AI-native enterprise.</h2>
          <p>
            A short film on what it means for a business to become AI-native — and how McCarthy gets organisations there.
          </p>
        </div>
        <a
          href="#contact-form"
          aria-label="Watch the McCarthy brand film"
          className="group relative block aspect-video rounded-2xl overflow-hidden bg-ink"
          data-reveal=""
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-[74px] h-[74px] rounded-full bg-white/10 border border-white/35 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-105 group-hover:bg-white/20">
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </span>
          </div>
          <div className="absolute left-6 bottom-5">
            <span className="block font-mono text-[11px] tracking-[0.1em] uppercase text-accent-bright mb-1.5">
              McCarthy · Brand Film · 01:30
            </span>
            <strong className="text-[15px] tracking-tight text-white">
              AI Transformation for the Enterprise
            </strong>
          </div>
        </a>
      </div>
    </section>
  );
}
