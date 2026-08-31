import { ChevronDown } from 'lucide-react';

/**
 * "AGENTIC AI" from ai-solutions.html — the INPUT → AI → ACTION → OUTCOME
 * chain, built as a stacked sequence of labelled tiles since the source's
 * four nodes are read top-to-bottom rather than side-by-side at this width.
 */
export default function AgenticAi() {
  const nodes = [
    { label: 'Input', text: 'Customer request / business event' },
    { label: 'AI', text: 'Understand → Reason → Decide' },
    { label: 'Action', text: 'CRM → Email → Workflow → Human' },
    { label: 'Outcome', text: 'Completed work + measurable result' },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal="">
          <span className="eyebrow block mb-3.5">Agentic AI</span>
          <h2 className="mb-5">Don&apos;t just give employees an AI assistant. Give the business an AI workforce.</h2>
          <p className="text-ink-soft text-[16.5px] leading-relaxed">
            We design agents around real jobs-to-be-done: research a prospect, qualify an opportunity, prepare a report, reconcile information, answer an employee question, triage a customer issue, identify an operational exception or prepare an executive briefing. The goal isn&apos;t to replace every human step — it&apos;s to determine which steps should be handled by AI, which should be automated, and where human judgement remains essential.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5" data-reveal="">
          {nodes.map((n, i) => (
            <div key={n.label} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[360px] rounded-xl border border-hairline bg-paper-raised p-5 shadow-[var(--shadow-card-sm)]">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent">{n.label}</span>
                <p className="font-display font-semibold text-ink text-[16px] mt-1">{n.text}</p>
              </div>
              {i < nodes.length - 1 && <ChevronDown className="w-4 h-4 text-muted my-1.5 shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
