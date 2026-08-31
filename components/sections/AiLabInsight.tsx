/** Shared "McCarthy AI" answer/insight box for the AI Lab product detail pages. */
export default function AiLabInsight({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="callout is-summary">
      <p><strong>{label}</strong></p>
      <p>{children}</p>
    </div>
  );
}
