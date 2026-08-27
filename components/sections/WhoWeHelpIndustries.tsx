import { ArrowRight } from 'lucide-react';

/**
 * The industry tag cloud from "WHO WE HELP" in index-7.html — all twelve
 * industries, plus the source's own "See how we work by industry" link.
 *
 * Home-page-only component: Industries.tsx carries the same industry-card
 * visual language but is also rendered on /industries/, so its own eight
 * industries are left untouched there rather than overwritten.
 */
export default function WhoWeHelpIndustries() {
  return (
    <>
      <section id="industries" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Who We Help
            </span>
            {' '}
            <h2>
              Built for organisations ready to become AI-native
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <a href="/contact/" id="industry-professional-services" className="industry-card">
              <span className="n">01</span>
              <h3 className="text-[16.5px] font-semibold">Professional Services</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-finance-accounting" className="industry-card">
              <span className="n">02</span>
              <h3 className="text-[16.5px] font-semibold">Finance &amp; Accounting</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-real-estate" className="industry-card">
              <span className="n">03</span>
              <h3 className="text-[16.5px] font-semibold">Real Estate</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-healthcare" className="industry-card">
              <span className="n">04</span>
              <h3 className="text-[16.5px] font-semibold">Healthcare</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-manufacturing" className="industry-card">
              <span className="n">05</span>
              <h3 className="text-[16.5px] font-semibold">Manufacturing</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-logistics" className="industry-card">
              <span className="n">06</span>
              <h3 className="text-[16.5px] font-semibold">Logistics</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-recruitment" className="industry-card">
              <span className="n">07</span>
              <h3 className="text-[16.5px] font-semibold">Recruitment</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-education" className="industry-card">
              <span className="n">08</span>
              <h3 className="text-[16.5px] font-semibold">Education</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-retail-hospitality" className="industry-card">
              <span className="n">09</span>
              <h3 className="text-[16.5px] font-semibold">Retail &amp; Hospitality</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-construction" className="industry-card">
              <span className="n">10</span>
              <h3 className="text-[16.5px] font-semibold">Construction</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-b2b-services" className="industry-card">
              <span className="n">11</span>
              <h3 className="text-[16.5px] font-semibold">B2B Services</h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-enterprise-groups" className="industry-card">
              <span className="n">12</span>
              <h3 className="text-[16.5px] font-semibold">Enterprise &amp; Groups</h3>
            </a>
            {' '}
          </div>
          {' '}
          <div className="flex justify-center mt-12" data-reveal="">
            <a href="/industries/" className="inline-link">
              See how we work by industry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
