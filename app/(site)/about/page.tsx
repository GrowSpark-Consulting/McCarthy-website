import type { Metadata } from 'next';
import AboutAiLab from '@/components/sections/AboutAiLab';
import AboutAiNative from '@/components/sections/AboutAiNative';
import AboutAiWorkforce from '@/components/sections/AboutAiWorkforce';
import AboutAmbition from '@/components/sections/AboutAmbition';
import AboutBeliefs from '@/components/sections/AboutBeliefs';
import AboutCoreStatement from '@/components/sections/AboutCoreStatement';
import AboutCredibility from '@/components/sections/AboutCredibility';
import AboutCta from '@/components/sections/AboutCta';
import AboutDigital from '@/components/sections/AboutDigital';
import AboutEcosystem from '@/components/sections/AboutEcosystem';
import AboutExpertise from '@/components/sections/AboutExpertise';
import AboutHero from '@/components/sections/AboutHero';
import AboutMission from '@/components/sections/AboutMission';
import AboutOperatingPrinciples from '@/components/sections/AboutOperatingPrinciples';
import AboutPhilosophy from '@/components/sections/AboutPhilosophy';
import AboutResponsibleAi from '@/components/sections/AboutResponsibleAi';
import AboutTeam from '@/components/sections/AboutTeam';
import AboutWhoWeWorkWith from '@/components/sections/AboutWhoWeWorkWith';
import Framework from '@/components/sections/Framework';
import Leadership from '@/components/sections/Leadership';
import WhyUs from '@/components/sections/WhyUs';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Content rebuilt from about-2.html. Framework.tsx and WhyUs.tsx are safe
 * to rewrite in place — the home page has its own copies (TransformationSystem,
 * WhyMcCarthy) now, so nothing else references these. Leadership.tsx and
 * FooterCta.tsx are genuinely shared (home + about, and nearly every page,
 * respectively) and are left untouched. Every other section here is a new
 * about-only component, on the site's existing design system throughout.
 */
export const metadata: Metadata = {
  title: "About McCarthy — AI Transformation",
  description: "McCarthy exists to help organisations understand what AI makes possible, identify where it matters, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "About McCarthy — AI Transformation",
    description: "McCarthy exists to help organisations understand what AI makes possible, identify where it matters, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes.",
    url: "https://www.growsparkconsulting.com/about/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About McCarthy — AI Transformation",
    description: "McCarthy exists to help organisations understand what AI makes possible, identify where it matters, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">About</span></li>
        </ol>
      </nav>
      <AboutHero />
      <AboutMission />
      <AboutExpertise />
      <AboutPhilosophy />
      <AboutCoreStatement />
      <AboutBeliefs />
      <Framework />
      <AboutAiLab />
      <AboutAiWorkforce />
      <AboutDigital />
      <WhyUs />
      <AboutAiNative />
      <AboutOperatingPrinciples />
      <AboutEcosystem />
      <AboutWhoWeWorkWith />
      <AboutAmbition />
      <AboutResponsibleAi />
      <AboutCredibility />
      <AboutTeam />
      <Leadership />
      <AboutCta />
      <FooterCta />
    </main>
  );
}
