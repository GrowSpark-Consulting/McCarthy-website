import type { Metadata } from 'next';
import AiLabInsight from '@/components/sections/AiLabInsight';
import AiLabMetricGrid from '@/components/sections/AiLabMetricGrid';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI Operations Manager — McCarthy AI Lab",
  description: "An intelligent workflow layer that routes work, monitors exceptions and triggers actions.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-operations-manager/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Operations Manager</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Operations Manager" lead="An intelligent workflow layer that routes work, monitors exceptions and triggers actions." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Operations Control Tower</h2>
            <AiLabMetricGrid
              metrics={[
                { label: 'Workflows', value: '128', note: 'running' },
                { label: 'Automated', value: '81%', note: '+12%' },
                { label: 'Exceptions', value: '7', note: 'Review' },
                { label: 'Hours Saved', value: '184', note: 'this month' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Live Workflow Queue</h2>
            <AiLabRowList
              rows={[
                { label: 'Purchase approval · $18,400', value: 'AI Review' },
                { label: 'Customer escalation · #4921', value: 'Human' },
                { label: 'Invoice reconciliation · 32 items', value: 'Auto' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">AI Recommendation</h2>
            <AiLabInsight label="McCarthy AI">
              7 exceptions are consuming 63% of today&apos;s operations review time. The largest bottleneck is purchase approvals. Recommended action: add a threshold-based auto-approval policy with human review above $25K.
            </AiLabInsight>
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
