import type { Metadata } from 'next';
import AiLabMetricGrid from '@/components/sections/AiLabMetricGrid';
import AiLabProductCta from '@/components/sections/AiLabProductCta';
import AiLabProductHero from '@/components/sections/AiLabProductHero';
import AiLabRowList from '@/components/sections/AiLabRowList';

export const metadata: Metadata = {
  title: "AI Document Intelligence — McCarthy AI Lab",
  description: "Extract structured information from documents and route it into business systems.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ai-lab/ai-document-intelligence/" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/ai-lab/">AI Lab</a></li>
          <li><span aria-current="page">AI Document Intelligence</span></li>
        </ol>
      </nav>
      <AiLabProductHero name="Document Intelligence" lead="Extract structured information from documents and route it into business systems." />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-col gap-12">
          <div>
            <h2 className="subsection-heading mb-5">Document Processing</h2>
            <AiLabRowList
              rows={[
                { label: 'Invoice_4821.pdf', value: 'Extracted' },
                { label: 'Contract_019.docx', value: 'Extracted' },
                { label: 'PO_8821.pdf', value: 'Validating' },
                { label: 'Claim_2019.pdf', value: 'Exception' },
              ]}
            />
          </div>
          <div>
            <h2 className="subsection-heading mb-5">Extracted Fields</h2>
            <AiLabMetricGrid
              metrics={[
                { label: 'Vendor', value: 'Acme Industries' },
                { label: 'Invoice Total', value: '$18,420' },
                { label: 'PO Match', value: '98.4%', note: 'Valid' },
              ]}
            />
          </div>
        </div>
      </section>
      <AiLabProductCta />
    </main>
  );
}
