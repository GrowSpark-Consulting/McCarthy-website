type Row = { label: string; value: string };

/** Shared bordered row list (workflow queues, pipelines, document status) for the AI Lab product detail pages. */
export default function AiLabRowList({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-xl border border-hairline bg-paper-raised divide-y divide-hairline">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between gap-3 px-5 py-3.5 text-[14px]">
          <span className="text-ink-soft">{r.label}</span>
          <span className="chip">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
