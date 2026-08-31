import type { Metadata } from 'next';
import AgenticAi from '@/components/sections/AgenticAi';
import AiApproach from '@/components/sections/AiApproach';
import AiTransformationAssessment from '@/components/sections/AiTransformationAssessment';
import AiTransformationStack from '@/components/sections/AiTransformationStack';
import SolutionsAiLab from '@/components/sections/SolutionsAiLab';
import SolutionsAiWorkforce from '@/components/sections/SolutionsAiWorkforce';
import SolutionsCta from '@/components/sections/SolutionsCta';
import SolutionsHero from '@/components/sections/SolutionsHero';
import SolutionsProcess from '@/components/sections/SolutionsProcess';
import WhereWeApplyAi from '@/components/sections/WhereWeApplyAi';

/**
 * Content rebuilt from ai-solutions.html — the source of truth for this
 * page. Nav's "AI Solutions" link already points at /solutions/, so this is
 * that destination. Section components stay on the site's existing design
 * system (section-head/eyebrow, service-card, process-step/process-node,
 * grid-hairline, chip, who-list) rather than any markup/CSS from the source
 * file. Challenges.tsx (the previous "explore by business challenge" grid)
 * is no longer rendered here — its content doesn't correspond to anything in
 * ai-solutions.html, and nothing else on the site links to it or to the nine
 * /solutions/<challenge>/ subpages it pointed at; those routes still build
 * and are untouched, just without an in-site entry point for now.
 */
export const metadata: Metadata = {
  title: "AI Solutions — McCarthy",
  description: "McCarthy helps organisations move from AI ambition to AI implementation — across strategy, agents, automation, intelligence and governance.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "AI Solutions — McCarthy",
    description: "McCarthy helps organisations move from AI ambition to AI implementation — across strategy, agents, automation, intelligence and governance.",
    url: "https://www.growsparkconsulting.com/solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions — McCarthy",
    description: "McCarthy helps organisations move from AI ambition to AI implementation — across strategy, agents, automation, intelligence and governance.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      {' '}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        {' '}
        <ol className="breadcrumb">
          {' '}
          <li>
            <a href="/">
              Home
            </a>
          </li>
          {' '}
          <li>
            <span aria-current="page">
              AI Solutions
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <SolutionsHero />
      {' '}
      <AiTransformationStack />
      {' '}
      <AiApproach />
      {' '}
      <AgenticAi />
      {' '}
      <WhereWeApplyAi />
      {' '}
      <SolutionsProcess />
      {' '}
      <SolutionsAiLab />
      {' '}
      <SolutionsAiWorkforce />
      {' '}
      <AiTransformationAssessment />
      {' '}
      <SolutionsCta />
      {' '}
    </main>
  );
}
