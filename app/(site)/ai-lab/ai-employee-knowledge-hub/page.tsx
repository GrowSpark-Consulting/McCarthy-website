import type { Metadata } from 'next';
import AiLabInsight from '@/components/sections/AiLabInsight';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI Employee Knowledge Hub — McCarthy AI Lab",
  description: "One intelligent interface for SOPs, policies, onboarding and internal company knowledge.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-employee-knowledge-hub/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Employee Knowledge Hub</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Employee Knowledge Hub" lead="One intelligent interface for SOPs, policies, onboarding and internal company knowledge." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Ask The Company</h2>
            <AiLabInsight label="What is our expense approval policy?">
              Expenses below $500 can be approved by the department manager. Expenses above $500 require finance approval. Source: Finance Policy · Section 4.2 · Updated March 2026.
            </AiLabInsight>
            <div className="flex flex-wrap gap-2.5 mt-6">
              <span className="chip">SOPs</span>
              <span className="chip">HR Policies</span>
              <span className="chip">Product Docs</span>
              <span className="chip">Finance</span>
              <span className="chip">Sales Playbooks</span>
            </div>
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Access Controls</h2>
            <AiLabRowList
              rows={[
                { label: 'HR documents', value: 'Role-Based' },
                { label: 'Finance documents', value: 'Role-Based' },
                { label: 'Source citations', value: 'On' },
              ]}
            />
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
