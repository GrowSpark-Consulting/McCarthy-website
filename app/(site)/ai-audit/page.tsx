import type { Metadata } from 'next';
import AiAuditApproach from '@/components/sections/AiAuditApproach';
import AiAuditDeliverables from '@/components/sections/AiAuditDeliverables';
import AiAuditDimensions from '@/components/sections/AiAuditDimensions';
import AiAuditEngagementScope from '@/components/sections/AiAuditEngagementScope';
import AiAuditFinalCta from '@/components/sections/AiAuditFinalCta';
import AiAuditFramework from '@/components/sections/AiAuditFramework';
import AiAuditHero from '@/components/sections/AiAuditHero';
import AiAuditLabConnection from '@/components/sections/AiAuditLabConnection';
import AiAuditMaturity from '@/components/sections/AiAuditMaturity';
import AiAuditOpportunityMapping from '@/components/sections/AiAuditOpportunityMapping';
import AiAuditPrioritisation from '@/components/sections/AiAuditPrioritisation';
import AiAuditProblem from '@/components/sections/AiAuditProblem';
import AiAuditReadiness from '@/components/sections/AiAuditReadiness';
import AiAuditRoadmaps from '@/components/sections/AiAuditRoadmaps';
import AiAuditToImplementation from '@/components/sections/AiAuditToImplementation';
import AiAuditWhoFor from '@/components/sections/AiAuditWhoFor';

/**
 * Content rebuilt from ai-audit.html — a new dedicated page. /strategy/ is
 * the site's existing booking/pricing page (engagement tiers, tabs) and
 * carries real, unrelated content of its own, so this page doesn't replace
 * it — it's the informational "AI Transformation Assessment" pitch, with
 * its own CTAs pointing at /strategy/ for the actual booking step, matching
 * how /solutions/, /ai-workforce/ and /ai-lab/ already work. Nav's "AI
 * Audit" link now points here instead of /strategy/; the header's separate
 * "Book AI Audit" quick-action button still points at /strategy/, since
 * that's where booking actually happens.
 */
export const metadata: Metadata = {
  title: "AI Transformation Assessment — McCarthy",
  description: "Before you buy AI, find where it matters. McCarthy analyses your processes, people, data and technology to identify the highest-value AI and automation opportunities — and turns them into a practical roadmap.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-audit/" },
  openGraph: {
    type: "website",
    siteName: "McCarthy",
    title: "AI Transformation Assessment — McCarthy",
    description: "Before you buy AI, find where it matters. McCarthy analyses your processes, people, data and technology to identify the highest-value AI and automation opportunities — and turns them into a practical roadmap.",
    url: "https://www.growsparkconsulting.com/ai-audit/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Transformation Assessment — McCarthy",
    description: "Before you buy AI, find where it matters. McCarthy analyses your processes, people, data and technology to identify the highest-value AI and automation opportunities — and turns them into a practical roadmap.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">AI Audit</span></li>
        </ol>
      </nav>
      <AiAuditHero />
      <AiAuditProblem />
      <AiAuditApproach />
      <AiAuditDimensions />
      <AiAuditFramework />
      <AiAuditWhoFor />
      <AiAuditOpportunityMapping />
      <AiAuditPrioritisation />
      <AiAuditMaturity />
      <AiAuditReadiness />
      <AiAuditDeliverables />
      <AiAuditRoadmaps />
      <AiAuditLabConnection />
      <AiAuditToImplementation />
      <AiAuditEngagementScope />
      <AiAuditFinalCta />
    </main>
  );
}
