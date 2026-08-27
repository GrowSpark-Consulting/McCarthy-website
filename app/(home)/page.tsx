import type { Metadata } from 'next';
import AiLab from '@/components/sections/AiLab';
import AiWorkforce from '@/components/sections/AiWorkforce';
import BrandFilm from '@/components/sections/BrandFilm';
import BusinessProblem from '@/components/sections/BusinessProblem';
import ContactForm from '@/components/sections/ContactForm';
import HomeFinalCta from '@/components/sections/HomeFinalCta';
import Hero from '@/components/sections/Hero';
import Leadership from '@/components/sections/Leadership';
import McCarthyDigital from '@/components/sections/McCarthyDigital';
import Outcomes from '@/components/sections/Outcomes';
import Pillars from '@/components/sections/Pillars';
import Proof from '@/components/sections/Proof';
import TransformationSystem from '@/components/sections/TransformationSystem';
import TrustStats from '@/components/sections/TrustStats';
import ValueStrip from '@/components/sections/ValueStrip';
import WhatWeDoFlow from '@/components/sections/WhatWeDoFlow';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import WhoWeHelpIndustries from '@/components/sections/WhoWeHelpIndustries';
import WhyMcCarthy from '@/components/sections/WhyMcCarthy';

/**
 * Content rebuilt from index-7.html (the McCarthy homepage content source),
 * on this site's existing design system — section-head/eyebrow, grid-hairline
 * card families, framework-node/process-node diagrams, chip/check-item lists.
 *
 * Several homepage-only components exist alongside same-named/shaped
 * components used elsewhere on the site (Framework, WhyUs, Industries,
 * FooterCta all also render on /about/, /industries/ or nearly every other
 * page) — this page uses its own copies (TransformationSystem, WhyMcCarthy,
 * WhoWeHelpIndustries, HomeFinalCta) so those other pages' content is never
 * touched. Leadership is the one exception: it is intentionally left as the
 * shared component (see Leadership.tsx's own doc comment) so the same three
 * bios are never described two different ways depending on the page.
 */
export const metadata: Metadata = {
  title: "McCarthy — AI Transformation for the Enterprise",
  description: "McCarthy helps organisations become AI-native — AI strategy, intelligent agents, automation, workforce transformation and digital engineering, built around the way your business actually works.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "McCarthy — AI Transformation for the Enterprise",
    description: "AI strategy, intelligent agents, automation, workforce transformation and digital engineering — built around the way your business actually works.",
    url: "https://www.growsparkconsulting.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "McCarthy — AI Transformation for the Enterprise",
    description: "AI strategy, intelligent agents, automation, workforce transformation and digital engineering — built around the way your business actually works.",
  },
};

/** JSON-LD preserved verbatim from the source page, brand name updated. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "McCarthy",
  "url": "https://www.growsparkconsulting.com/",
  "email": "info@growsparkconsulting.com",
  "telephone": "+91-63814-61106",
  "description": "AI & digital transformation consultancy helping organisations become AI-native through AI strategy, intelligent agents, automation, workforce transformation and digital engineering.",
  "areaServed": "Global",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Urapakkam",
    "addressRegion": "Chennai",
    "postalCode": "603211",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/growsparkconsulting",
    "https://www.instagram.com/growsparkconsulting/"
  ]
} as const;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main id="main">
      <Hero />
      <TrustStats />
      <BrandFilm />
      <BusinessProblem />
      <Pillars />
      <WhatWeDoFlow />
      <TransformationSystem />
      <Outcomes />
      <AiLab />
      <AiWorkforce />
      <WhoWeHelp />
      <WhoWeHelpIndustries />
      <Proof />
      <WhyMcCarthy />
      <ValueStrip />
      <McCarthyDigital />
      <Leadership />
      <HomeFinalCta />
      <ContactForm />
    </main>
    </>
  );
}
