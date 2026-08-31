import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI Sales Agent — McCarthy AI Lab",
  description: "A digital sales teammate that researches, qualifies, follows up and keeps the CRM moving.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-sales-agent/" },
};

const WORKFLOW = [
  { label: 'New Lead', text: 'Website / LinkedIn / CRM' },
  { label: 'AI Research', text: 'Company + role + intent' },
  { label: 'Qualify', text: 'Score + buying signal' },
  { label: 'Follow Up', text: 'Personalised outreach' },
  { label: 'CRM', text: 'Update + next action' },
];

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Sales Agent</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Sales Agent" lead="A digital sales teammate that researches, qualifies, follows up and keeps the CRM moving." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-6">Agent Workflow</h2>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              {WORKFLOW.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 flex-1">
                  <div className="w-full rounded-xl border border-hairline bg-paper-raised p-5 text-center">
                    <strong className="block text-[14px] font-display font-semibold text-ink mb-1">{step.label}</strong>
                    <span className="text-[12.5px] text-muted">{step.text}</span>
                  </div>
                  {i < WORKFLOW.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 lg:block hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="subsection-heading mb-5">Today</h2>
              <AiLabRowList
                rows={[
                  { label: 'New leads researched', value: '42' },
                  { label: 'Qualified', value: '17' },
                  { label: 'Follow-ups sent', value: '31' },
                  { label: 'Meetings booked', value: '6' },
                ]}
              />
            </div>
            <div>
              <h2 className="subsection-heading mb-5">Agent Activity</h2>
              <div className="rounded-xl border border-hairline bg-paper-raised p-5">
                <ul className="flex flex-col gap-2.5 font-mono text-[12.5px] text-ink-soft">
                  <li><span className="text-accent">[09:42]</span> Lead enrichment completed</li>
                  <li><span className="text-accent">[09:44]</span> Buying signal detected</li>
                  <li><span className="text-accent">[09:46]</span> Personalised email drafted</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
