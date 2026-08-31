const LINKS = [
  { title: 'AI Audit', desc: 'Identify where AI matters.', href: '/ai-audit/' },
  { title: 'AI Solutions', desc: 'Design and implement the transformation.', href: '/solutions/' },
  { title: 'AI Lab', desc: 'Demonstrate what can be built.', href: '/ai-lab/' },
  { title: 'AI Workforce', desc: 'Prepare people for the AI-powered workplace.', href: '/ai-workforce/' },
  { title: 'McCarthy Digital', desc: 'Engineer the technology infrastructure.', href: '/#mccarthy-digital' },
];

const STEPS = ['Assess', 'Design', 'Build', 'Train', 'Transform'];

export default function AboutEcosystem() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The McCarthy Ecosystem</span>
          <h2>One transformation partner, not six vendors.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
          {LINKS.map((l) => (
            <a key={l.title} href={l.href} className="service-card card-elevate">
              <h3>{l.title}</h3>
              <p>{l.desc}</p>
            </a>
          ))}
          <div className="service-card">
            <h3>Optimisation</h3>
            <p>Continuously improve adoption and outcomes.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 mt-14" data-reveal="">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center text-center px-1">
              <span className="process-node mb-3.5">{String(i + 1).padStart(2, '0')}</span>
              <span className="process-label block">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
