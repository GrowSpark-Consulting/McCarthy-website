import type { Metadata } from 'next';
import AiLabInsight from '@/components/sections/AiLabInsight';
import AiLabMetricGrid from '@/components/sections/AiLabMetricGrid';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';

export const metadata: Metadata = {
  title: "AI Finance Intelligence — McCarthy AI Lab",
  description: "A management intelligence layer for revenue, expenses, receivables, margins and financial risk.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-finance-intelligence/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Finance Intelligence</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Finance Intelligence" lead="A management intelligence layer for revenue, expenses, receivables, margins and financial risk." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Financial Intelligence</h2>
            <AiLabMetricGrid
              metrics={[
                { label: 'Revenue', value: '$2.42M', note: '+14.8%' },
                { label: 'Gross Margin', value: '41.6%', note: '+2.4 pts' },
                { label: 'AR', value: '$318K', note: '9% above target' },
                { label: 'Runway', value: '18.2 mo', note: 'stable' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">AI CFO Insight</h2>
            <AiLabInsight label="McCarthy AI">
              Gross margin improved despite higher delivery costs because enterprise revenue mix increased. Receivables are the immediate watch item; 6 invoices account for 54% of outstanding AR.
            </AiLabInsight>
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
