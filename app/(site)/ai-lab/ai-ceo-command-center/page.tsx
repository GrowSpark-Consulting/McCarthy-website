import type { Metadata } from 'next';
import AiLabInsight from '@/components/sections/AiLabInsight';
import AiLabMetricGrid from '@/components/sections/AiLabMetricGrid';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI CEO Command Center — McCarthy AI Lab",
  description: "Executive intelligence that turns business data into decisions.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-ceo-command-center/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI CEO Command Center</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="CEO Command Center" lead="Executive intelligence that turns business data into decisions." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Executive Overview</h2>
            <AiLabMetricGrid
              metrics={[
                { label: 'Revenue', value: '$2.42M', note: '+14.8% YoY' },
                { label: 'Pipeline', value: '$840K', note: '18 active deals' },
                { label: 'Conversion', value: '18.4%', note: '+3.1 pts' },
                { label: 'Risk Signals', value: '3', note: 'Needs attention' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Ask McCarthy AI</h2>
            <p className="text-ink-soft text-[15px] mb-5">Ask questions about your connected business data.</p>
            <div className="flex flex-col gap-4">
              <AiLabInsight label="Why did revenue change?">
                Revenue is up 6.2% month-over-month, driven by two enterprise accounts. Three high-value opportunities have stalled in proposal stage. Recommended action: trigger executive follow-up on those opportunities.
              </AiLabInsight>
              <AiLabInsight label="What's the biggest risk?">
                The largest near-term risk is pipeline concentration: 42% of open pipeline sits in three opportunities. Recommended action: diversify the pipeline and create a focused recovery plan.
              </AiLabInsight>
              <AiLabInsight label="Where's the best sales opportunity?">
                The highest-value sales opportunity is faster lead response and automated qualification. The demo estimates 18–24 hours of manual work can be removed each week in this workflow.
              </AiLabInsight>
            </div>
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Priority Actions</h2>
            <AiLabRowList
              rows={[
                { label: '3 stalled enterprise deals', value: 'Action' },
                { label: 'Lead response improving', value: 'Good' },
                { label: 'Receivables above target', value: 'Watch' },
              ]}
            />
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
