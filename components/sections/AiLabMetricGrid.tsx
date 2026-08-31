type Metric = { label: string; value: string; note?: string };

/** Shared metric-tile grid for the AI Lab product detail pages. */
export default function AiLabMetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-xl border border-hairline bg-paper-raised p-4">
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted block mb-1.5">{m.label}</span>
          <strong className="block text-[22px] font-display font-bold text-ink">{m.value}</strong>
          {m.note && <span className="text-[11px] text-accent">{m.note}</span>}
        </div>
      ))}
    </div>
  );
}
