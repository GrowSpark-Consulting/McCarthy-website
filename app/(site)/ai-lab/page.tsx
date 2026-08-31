import type { Metadata } from 'next';
import AiLabCustom from '@/components/sections/AiLabCustom';
import AiLabDeployment from '@/components/sections/AiLabDeployment';
import AiLabFeatured from '@/components/sections/AiLabFeatured';
import AiLabFinalCta from '@/components/sections/AiLabFinalCta';
import AiLabHero from '@/components/sections/AiLabHero';
import AiLabIndustries from '@/components/sections/AiLabIndustries';
import AiLabProducts from '@/components/sections/AiLabProducts';
import AiLabWorkforceLink from '@/components/sections/AiLabWorkforceLink';

/**
 * Content rebuilt from ai-lab.html — a new dedicated page (this content,
 * ~10 industry blocks and 9 detailed product cards, does not fit the home
 * page's #ai-lab anchor section). Nav's "AI Lab" link, the header's ghost
 * "Explore AI Lab" CTA, and every other page's #ai-lab link are updated to
 * point here instead. Section components stay on the site's existing
 * design system (section-head/eyebrow, service-card, insight-card,
 * process-step/node, chip) — no markup/CSS from the source file.
 */
export const metadata: Metadata = {
  title: "AI Lab — McCarthy",
  description: "AI systems designed around the way industries actually work. Explore interactive demonstrations of AI agents, intelligent workflows, decision systems and industry-specific operating tools.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "AI Lab — McCarthy",
    description: "AI systems designed around the way industries actually work. Explore interactive demonstrations of AI agents, intelligent workflows, decision systems and industry-specific operating tools.",
    url: "https://www.growsparkconsulting.com/ai-lab/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lab — McCarthy",
    description: "AI systems designed around the way industries actually work. Explore interactive demonstrations of AI agents, intelligent workflows, decision systems and industry-specific operating tools.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">AI Lab</span></li>
        </ol>
      </nav>
      <AiLabHero />
      <AiLabFeatured />
      <AiLabProducts />
      <AiLabIndustries />
      <AiLabCustom />
      <AiLabDeployment />
      <AiLabWorkforceLink />
      <AiLabFinalCta />
    </main>
  );
}
