import { ArrowRight, ChevronDown, Pause, Play } from 'lucide-react';

/**
 * The four hero slides now share one still background instead of a video per
 * slide, so the image sits on the section and only the copy lives inside the
 * carousel — the crossfade moves the text over a background that never
 * reloads, and the four 1080p clips are gone from the critical path entirely.
 *
 * Copy is left-aligned against the site container, so the headline starts on
 * the same line as the header logo and sits in the dark left third of the
 * image rather than over its bright focal point.
 *
 * Server Component: heroCarousel.ts drives the Swiper from the client.
 */
export default function Hero() {
  return (
    <>
      <section id="hero" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink" aria-label="Introduction">
        <div className="swiper hero-swiper h-full" data-hero-swiper="" role="region" aria-roledescription="carousel" aria-label="McCarthy highlights">
          <div className="swiper-wrapper h-full">
            <div className="swiper-slide relative h-full overflow-hidden" role="group" aria-roledescription="slide" aria-label="1 of 4">
              <img
                src="/pic1.png"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                data-hero-img=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 sm:px-10">
                  <div className="hero-text">
                    <span className="hero-eyebrow">
                      AI Transformation · Agents · Automation · Workforce
                    </span>
                    <h1 className="hero-headline">
                      We help organisations become AI-native.
                    </h1>
                    {/*
                      index-7.html's lead paragraph and its five-capability
                      micro row. Both were missing, so the opening slide named
                      the five pillars nowhere and the second CTA into the AI
                      Lab had no equivalent anywhere above the fold.
                    */}
                    <p className="hero-lead">
                      AI strategy, intelligent agents, automation, workforce transformation and digital engineering — built around the way your business actually works.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="/strategy/" className="btn btn-hero">
                        Book an AI Transformation Assessment
                        <ArrowRight className="w-4 h-4 btn-arrow" />
                      </a>
                      <a href="#ai-lab" className="btn btn-hero">
                        Explore the McCarthy AI Lab
                        <ArrowRight className="w-4 h-4 btn-arrow" />
                      </a>
                    </div>
                    <ul className="hero-micro">
                      <li>AI Strategy</li>
                      <li>AI Agents</li>
                      <li>Automation</li>
                      <li>AI Workforce</li>
                      <li>Digital Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide relative h-full overflow-hidden" role="group" aria-roledescription="slide" aria-label="2 of 4">
              <img
                src="/pic2.png"
                alt=""
                aria-hidden="true"
                loading="eager"
                data-hero-img=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 sm:px-10">
                  <div className="hero-text">
                    <span className="hero-eyebrow">
                      What We Do
                    </span>
                    <h1 className="hero-headline">
                      AI strategy, intelligent agents, automation, workforce transformation and digital engineering.
                    </h1>
                    <a href="/solutions/" className="btn btn-hero">
                      View All Services
                      <ArrowRight className="w-4 h-4 btn-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide relative h-full overflow-hidden" role="group" aria-roledescription="slide" aria-label="3 of 4">
              <img
                src="/pic3.png"
                alt=""
                aria-hidden="true"
                loading="eager"
                data-hero-img=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 sm:px-10">
                  <div className="hero-text">
                    <span className="hero-eyebrow">
                      Our Methodology
                    </span>
                    <h1 className="hero-headline">
                      The McCarthy Transformation System™
                    </h1>
                    <a href="#framework" className="btn btn-hero">
                      Explore The Framework
                      <ArrowRight className="w-4 h-4 btn-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide relative h-full overflow-hidden" role="group" aria-roledescription="slide" aria-label="4 of 4">
              <img
                src="/pic4.png"
                alt=""
                aria-hidden="true"
                loading="eager"
                data-hero-img=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 sm:px-10">
                  <div className="hero-text">
                    <span className="hero-eyebrow">
                      McCarthy AI Lab
                    </span>
                    <h1 className="hero-headline">
                      Don&apos;t just read what we build. Use it.
                    </h1>
                    <a href="/rnd/" className="btn btn-hero">
                      R &amp; D
                      <ArrowRight className="w-4 h-4 btn-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {' '}
          <div className="absolute bottom-9 inset-x-0 z-20 flex items-center justify-center gap-6">
            {' '}
            <button type="button" className="hero-play-toggle" data-hero-play-toggle="" aria-label="Pause slideshow" aria-pressed="false">
              {' '}
              <Pause className="w-4 h-4" data-icon-pause="" />
              {' '}
              <Play className="w-4 h-4 hidden" data-icon-play="" />
              {' '}
            </button>
            {' '}
            <div className="swiper-pagination hero-pagination !relative !w-auto" data-hero-pagination="" />
            {' '}
          </div>
          {' '}
        </div>
        {' '}
        <a href="#exec-summary" className="hero-scroll-cue" aria-label="Scroll to content">
          {' '}
          <ChevronDown className="w-5 h-5" />
          {' '}
        </a>
        {' '}
      </section>
      {' '}
    </>
  );
}
