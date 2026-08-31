import { Bot, Code2, Users, Workflow, Zap } from 'lucide-react';

export default function AboutExpertise() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="section-head" data-reveal="">
            <span className="eyebrow block mb-3.5">What We Do</span>
            <h2>We turn AI potential into business capability.</h2>
            <p>Our work sits across five connected areas. These aren&apos;t disconnected services — together they form the McCarthy approach to AI transformation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
            <div className="service-card">
              <Zap className="service-card__icon" />
              <h3>AI Strategy</h3>
              <p>Identify where AI can create meaningful business value and build a roadmap.</p>
            </div>
            <div className="service-card">
              <Bot className="service-card__icon" />
              <h3>AI Agents</h3>
              <p>Build intelligent systems that can understand, reason, use business context and take action.</p>
            </div>
            <div className="service-card">
              <Workflow className="service-card__icon" />
              <h3>Intelligent Automation</h3>
              <p>Redesign workflows and connect AI to real business processes.</p>
            </div>
            <div className="service-card">
              <Users className="service-card__icon" />
              <h3>AI Workforce</h3>
              <p>Educate leaders and employees so AI adoption becomes an organisational capability.</p>
            </div>
            <div className="service-card">
              <Code2 className="service-card__icon" />
              <h3>Digital Engineering</h3>
              <p>Build the applications, dashboards, data systems and infrastructure transformation requires.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
