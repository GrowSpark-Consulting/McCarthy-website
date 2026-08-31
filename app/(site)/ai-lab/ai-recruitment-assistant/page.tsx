import type { Metadata } from 'next';
import AiLabInsight from '@/components/sections/AiLabInsight';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI Recruitment Assistant — McCarthy AI Lab",
  description: "AI-assisted sourcing, screening, scheduling and candidate communication.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-recruitment-assistant/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Recruitment Assistant</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Recruitment Assistant" lead="AI-assisted sourcing, screening, scheduling and candidate communication." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Candidate Pipeline</h2>
            <AiLabRowList
              rows={[
                { label: 'New applications', value: '184' },
                { label: 'AI screened', value: '161' },
                { label: 'Shortlisted', value: '24' },
                { label: 'Interviews scheduled', value: '11' },
                { label: 'Human review required', value: '7' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">AI Candidate Summary</h2>
            <AiLabInsight label="Candidate #1842 · Match 91%">
              Strong match for the role. 4.5 years relevant experience, required technical skills verified, leadership experience demonstrated. Potential gap: limited enterprise implementation exposure.
            </AiLabInsight>
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
