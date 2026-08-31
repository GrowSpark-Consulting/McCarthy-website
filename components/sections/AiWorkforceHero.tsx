export default function AiWorkforceHero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto text-center" data-reveal="">
          <span className="eyebrow block mb-5">McCarthy AI Workforce · People + AI</span>
          <h1 className="page-hero-heading mb-8 text-balance">Your AI transformation starts with your people.</h1>
          <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto mb-10">
            AI is changing how every team researches, communicates, analyses information, makes decisions and gets work done. But giving employees access to AI isn&apos;t enough. McCarthy helps organisations build AI-capable workforces — from executive leadership and AI strategy education to role-based training, everyday AI productivity and responsible adoption.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact/" className="btn btn-primary">Build Your AI Workforce</a>
            <a href="/contact/" className="btn btn-secondary">Talk to McCarthy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
