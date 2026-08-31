/**
 * "HORIZONTAL AI PRODUCTS" from ai-lab.html — nine products, each with the
 * source's own four-field structure (Business Problem / What The AI Does /
 * Inputs & Systems / Output). Data-driven since the shape repeats exactly
 * across all nine.
 *
 * Eight of the nine now have their own dedicated /ai-lab/<slug>/ page built
 * from that product's standalone demo HTML; the whole card is a click target
 * to that page via a stretched (absolutely positioned, inset-0) link, while
 * "Build This For My Business" stays a normal, independently-clickable link
 * to /contact/ by sitting above the stretched link (relative + higher
 * z-index) rather than nested inside it — nested <a> tags aren't valid
 * HTML, and this is the standard pattern for "whole card is a link, except
 * this one button" without any client-side JS. AI Executive Briefing has no
 * source HTML yet, so it keeps no stretched link and stays non-clickable as
 * a card, per instruction.
 *
 * The title/labels/body text below are deliberately left un-positioned
 * (no `relative`, no z-index): plain in-flow content always paints behind
 * a positioned sibling in the same stacking context regardless of DOM
 * order, so the stretched link already covers them without needing to
 * outrank them on z-index. Giving them their own z-index would promote them
 * into that same stacking competition and — since a higher value wins —
 * let them swallow clicks meant for the link underneath, which is exactly
 * what shrank the clickable area before this fix. Only the CTA needs
 * `relative` + a higher z-index than the link, because it's the one target
 * that must win the hit-test over the stretched link beneath it.
 */
const PRODUCTS = [
  {
    tag: 'AI CEO Command Center',
    slug: 'ai-ceo-command-center',
    title: 'Executive intelligence, in one view.',
    problem: 'Leaders have data everywhere and insight nowhere — decisions get made on gut feel and stale reports.',
    does: 'Turns connected business data into decisions, risks and recommended actions.',
    inputs: 'Revenue, pipeline, conversion, operations, finance and customer activity data.',
    output: 'Risk signals and AI-generated executive recommendations.',
  },
  {
    tag: 'AI Executive Briefing',
    slug: null,
    title: 'Business data, turned into a briefing.',
    problem: 'Leadership spends hours assembling updates instead of acting on them.',
    does: 'Automatically turns business data into a concise leadership briefing — what changed, why it matters, what needs attention.',
    inputs: 'Connected operational, sales and finance systems.',
    output: 'A short briefing with recommended next actions.',
  },
  {
    tag: 'AI Sales Agent',
    slug: 'ai-sales-agent',
    title: 'A digital sales teammate.',
    problem: 'Reps spend more time on admin and research than actually selling.',
    does: 'Researches prospects, qualifies opportunities, personalises outreach, updates CRM records, prepares meeting briefs and triggers follow-up.',
    inputs: 'CRM, website, LinkedIn and enrichment data.',
    output: 'Qualified leads, drafted outreach and an always-current CRM.',
  },
  {
    tag: 'AI Operations Manager',
    slug: 'ai-operations-manager',
    title: 'A control tower for daily operations.',
    problem: "Exceptions get buried, and by the time someone notices, they're expensive.",
    does: 'Monitors operational workflows, identifies exceptions, investigates issues and recommends or triggers the next appropriate action.',
    inputs: 'Workflow, ERP and operational monitoring data.',
    output: 'Fewer stalled workflows, faster exception resolution.',
  },
  {
    tag: 'AI Customer Service',
    slug: 'ai-customer-service',
    title: 'A service layer that actually resolves things.',
    problem: 'Customers wait for answers your knowledge base already contains.',
    does: 'Understands customer requests, retrieves company knowledge, drafts or sends responses, creates tickets and escalates complex cases.',
    inputs: 'Knowledge base, helpdesk and order systems.',
    output: 'Faster resolution, consistent answers, clean escalation.',
  },
  {
    tag: 'AI Employee Knowledge Hub',
    slug: 'ai-employee-knowledge-hub',
    title: 'One place to ask the company anything.',
    problem: "SOPs, policies and expertise are scattered across files, folders and people's heads.",
    does: 'Turns SOPs, policies, documents and internal knowledge into secure, searchable intelligence with source-backed answers.',
    inputs: 'Document stores, wikis and internal policy sources.',
    output: 'Faster answers, with role-based access and citations.',
  },
  {
    tag: 'AI Finance Intelligence',
    slug: 'ai-finance-intelligence',
    title: 'A management layer for the numbers.',
    problem: 'Finance can produce reports, but leadership needs answers, not spreadsheets.',
    does: 'Brings financial information into an intelligent management layer that highlights revenue, margin, receivables, cash visibility, anomalies and risks.',
    inputs: 'Accounting, ERP and banking data.',
    output: 'Clear financial signal, earlier warning on risk.',
  },
  {
    tag: 'AI Recruitment Assistant',
    slug: 'ai-recruitment-assistant',
    title: 'Recruiting, without the bottleneck.',
    problem: "Good candidates get lost in application volume, and recruiters can't screen everything.",
    does: 'Supports candidate screening, summarisation, scheduling, communication and recruitment workflow administration — human judgement stays in the loop.',
    inputs: 'ATS, resumes and job requirements.',
    output: 'Faster, more consistent shortlisting.',
  },
  {
    tag: 'AI Document Intelligence',
    slug: 'ai-document-intelligence',
    title: 'Documents in, structured data out.',
    problem: 'Invoices, forms and contracts still get processed by hand, one at a time.',
    does: 'Extracts, validates, compares and routes information from invoices, forms, contracts, purchase orders and other business documents.',
    inputs: 'Scanned documents, PDFs and source systems of record.',
    output: 'Fewer manual touches, fewer errors, faster processing.',
  },
];

export default function AiLabProducts() {
  return (
    <section id="products" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Horizontal AI Products</span>
          <h2>Products that apply across industries.</h2>
          <p>Every card follows the same standard — the business problem, what the AI does, what it connects to, and the outcome — so the Lab reads like a product catalogue, not a slide of demo screenshots.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-reveal="">
          {PRODUCTS.map((p) => (
            <div
              key={p.tag}
              className={`relative rounded-2xl border border-hairline bg-paper-raised p-7 ${p.slug ? 'card-elevate' : ''}`}
            >
              {p.slug && (
                <a
                  href={`/ai-lab/${p.slug}/`}
                  className="absolute inset-0 z-0 rounded-2xl"
                  aria-label={`View ${p.tag}`}
                />
              )}
              <span className="font-mono text-[10.5px] tracking-[0.09em] uppercase text-accent block mb-2.5">{p.tag}</span>
              <h3 className="text-[19px] mb-4">{p.title}</h3>
              <div className="flex flex-col gap-3.5">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1">Business Problem</span>
                  <p className="text-ink-soft text-[14px] leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1">What The AI Does</span>
                  <p className="text-ink-soft text-[14px] leading-relaxed">{p.does}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1">Inputs / Systems</span>
                  <p className="text-ink-soft text-[14px] leading-relaxed">{p.inputs}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1">Output</span>
                  <p className="text-ink-soft text-[14px] leading-relaxed">{p.output}</p>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-hairline">
                <a href="/contact/" className="relative z-10 inline-link">Build This For My Business</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
