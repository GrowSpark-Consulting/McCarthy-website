import type { Metadata } from 'next';
import AiLabMetricGrid from '@/components/sections/AiLabMetricGrid';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';

export const metadata: Metadata = {
  title: "AI Customer Service — McCarthy AI Lab",
  description: "An AI service layer that answers, searches company knowledge, creates tickets and escalates complexity.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-customer-service/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Customer Service</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Customer Service" lead="An AI service layer that answers, searches company knowledge, creates tickets and escalates complexity." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Customer Conversation</h2>
            <div className="rounded-xl border border-hairline bg-paper-raised p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3 text-[14px]">
                <span className="text-ink-soft"><strong className="text-ink">Customer:</strong> Can I change my delivery date?</span>
                <span className="chip">09:14</span>
              </div>
              <div className="callout is-summary">
                <p><strong>AI:</strong> Yes. I found your order #48291. The current delivery is Thursday. I can request Friday delivery. Would you like me to proceed?</p>
              </div>
              <div className="flex items-center justify-between gap-3 text-[14px]">
                <span className="text-ink-soft">Knowledge source</span>
                <span className="chip">Shipping Policy v4.2</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Service Metrics</h2>
            <AiLabMetricGrid
              metrics={[
                { label: 'AI Resolution', value: '68%', note: 'without escalation' },
                { label: 'Avg Response', value: '11 sec', note: '24/7' },
              ]}
            />
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
