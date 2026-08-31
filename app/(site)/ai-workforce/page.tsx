import type { Metadata } from 'next';
import AiWorkforceAcademy from '@/components/sections/AiWorkforceAcademy';
import AiWorkforceAssessment from '@/components/sections/AiWorkforceAssessment';
import AiWorkforceBigIdea from '@/components/sections/AiWorkforceBigIdea';
import AiWorkforceChampions from '@/components/sections/AiWorkforceChampions';
import AiWorkforceDeptTraining from '@/components/sections/AiWorkforceDeptTraining';
import AiWorkforceExecutiveProgram from '@/components/sections/AiWorkforceExecutiveProgram';
import AiWorkforceFinalCta from '@/components/sections/AiWorkforceFinalCta';
import AiWorkforceFramework from '@/components/sections/AiWorkforceFramework';
import AiWorkforceHero from '@/components/sections/AiWorkforceHero';
import AiWorkforceLabLink from '@/components/sections/AiWorkforceLabLink';
import AiWorkforcePrograms from '@/components/sections/AiWorkforcePrograms';
import AiWorkforceProblem from '@/components/sections/AiWorkforceProblem';
import AiWorkforceTransformation from '@/components/sections/AiWorkforceTransformation';
import AiWorkforceWhy from '@/components/sections/AiWorkforceWhy';

/**
 * Content rebuilt from ai-workforce.html — a new dedicated page (this
 * content, 14 distinct sections, does not fit the home page's #ai-workforce
 * anchor section). Nav's "AI Workforce" link is updated to point here
 * instead of /#ai-workforce. Section components stay on the site's existing
 * design system (section-head/eyebrow, service-card, process-step/node,
 * grid-hairline/detail-card, chip, who-list, check-item) — no markup/CSS
 * from the source file.
 */
export const metadata: Metadata = {
  title: "AI Workforce — McCarthy",
  description: "AI transformation starts with your people. McCarthy helps organisations build AI-capable workforces — from executive leadership to role-based training, productivity and governance.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-workforce/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "AI Workforce — McCarthy",
    description: "AI transformation starts with your people. McCarthy helps organisations build AI-capable workforces — from executive leadership to role-based training, productivity and governance.",
    url: "https://www.growsparkconsulting.com/ai-workforce/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workforce — McCarthy",
    description: "AI transformation starts with your people. McCarthy helps organisations build AI-capable workforces — from executive leadership to role-based training, productivity and governance.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">AI Workforce</span></li>
        </ol>
      </nav>
      <AiWorkforceHero />
      <AiWorkforceProblem />
      <AiWorkforceBigIdea />
      <AiWorkforceFramework />
      <AiWorkforceExecutiveProgram />
      <AiWorkforceAcademy />
      <AiWorkforceDeptTraining />
      <AiWorkforceTransformation />
      <AiWorkforceChampions />
      <AiWorkforceLabLink />
      <AiWorkforceAssessment />
      <AiWorkforcePrograms />
      <AiWorkforceWhy />
      <AiWorkforceFinalCta />
    </main>
  );
}
