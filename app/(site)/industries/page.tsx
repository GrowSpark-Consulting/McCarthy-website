import type { Metadata } from 'next';
import IndustriesCrossCapabilities from '@/components/sections/IndustriesCrossCapabilities';
import IndustriesCustom from '@/components/sections/IndustriesCustom';
import IndustriesFinalCta from '@/components/sections/IndustriesFinalCta';
import IndustriesLabConnection from '@/components/sections/IndustriesLabConnection';
import IndustriesPageHero from '@/components/sections/IndustriesPageHero';
import IndustriesWhySpecific from '@/components/sections/IndustriesWhySpecific';
import IndustryBlocks from '@/components/sections/IndustryBlocks';
import IndustrySelector from '@/components/sections/IndustrySelector';

/**
 * Content rebuilt from industries-3.html — this is the site's existing
 * /industries/ route (nav's "Industries" link already pointed here), so no
 * new page or nav change was needed. The previous content (an old
 * growth-consulting "different industries, one growth methodology" pitch,
 * unrelated to McCarthy's AI positioning) is fully replaced per the
 * request. Industries.tsx (the old 8-tag grid component this page used to
 * render) is superseded by IndustrySelector.tsx + IndustryBlocks.tsx and
 * has been removed since nothing else referenced it.
 */
export const metadata: Metadata = {
  title: "Industries — McCarthy",
  description: "AI doesn't transform every industry the same way. McCarthy designs AI transformation around the way your industry actually works — across logistics, manufacturing, construction, e-commerce, professional services, real estate, healthcare, finance, recruitment and education.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/industries/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "Industries — McCarthy",
    description: "AI doesn't transform every industry the same way. McCarthy designs AI transformation around the way your industry actually works — across logistics, manufacturing, construction, e-commerce, professional services, real estate, healthcare, finance, recruitment and education.",
    url: "https://www.growsparkconsulting.com/industries/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries — McCarthy",
    description: "AI doesn't transform every industry the same way. McCarthy designs AI transformation around the way your industry actually works — across logistics, manufacturing, construction, e-commerce, professional services, real estate, healthcare, finance, recruitment and education.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">Industries</span></li>
        </ol>
      </nav>
      <IndustriesPageHero />
      <IndustriesWhySpecific />
      <IndustrySelector />
      <IndustryBlocks />
      <IndustriesLabConnection />
      <IndustriesCrossCapabilities />
      <IndustriesCustom />
      <IndustriesFinalCta />
    </main>
  );
}
