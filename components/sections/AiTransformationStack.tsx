import { BarChart3, Bot, BookOpen, ShieldCheck, Target, Workflow } from 'lucide-react';

/**
 * "OUR AI TRANSFORMATION STACK" from ai-solutions.html — six layers, each a
 * service-card (the same class AboutExpertise.tsx uses on /about/, reused
 * here rather than duplicated since it's a plain shared utility class).
 */
export default function AiTransformationStack() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Our AI Transformation Stack</span>
          <h2>Six layers. One transformation.</h2>
          <p>
            McCarthy brings the strategy, intelligence, engineering and adoption required to move AI from isolated experiments into the operating fabric of the organisation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
          <div className="service-card">
            <Target className="service-card__icon" />
            <h3>AI Strategy &amp; Readiness</h3>
            <p>
              Understand where you are today, where AI can create value and what needs to change to capture it. We assess AI maturity, identify opportunities, prioritise use cases and create a practical roadmap tied to business outcomes.
            </p>
            <a href="/strategy/" className="inline-link mt-4">Explore AI Assessment →</a>
          </div>
          <div className="service-card">
            <Bot className="service-card__icon" />
            <h3>AI Agents</h3>
            <p>
              Move beyond assistants that only respond. We design agents that can understand context, reason within defined guardrails, use business knowledge, interact with systems and take action — with human oversight where it matters.
            </p>
            <a href="/ai-lab/" className="inline-link mt-4">See Agent Demos →</a>
          </div>
          <div className="service-card">
            <Workflow className="service-card__icon" />
            <h3>Intelligent Automation</h3>
            <p>
              Identify repetitive, rule-heavy and coordination-intensive workflows, then redesign them with AI and automation. From lead handling to operations and service, we connect decisions to actions instead of simply automating clicks.
            </p>
          </div>
          <div className="service-card">
            <BookOpen className="service-card__icon" />
            <h3>Enterprise Knowledge AI</h3>
            <p>
              Turn scattered SOPs, policies, documents and institutional knowledge into secure, searchable intelligence. Employees find the right information faster while organisations keep control over sources, permissions and context.
            </p>
          </div>
          <div className="service-card">
            <BarChart3 className="service-card__icon" />
            <h3>AI Decision Intelligence</h3>
            <p>
              Bring business data together so leaders can understand what is happening, why it is happening and what deserves attention next — dashboards and intelligence layers that surface trends, risks and recommended actions.
            </p>
          </div>
          <div className="service-card">
            <ShieldCheck className="service-card__icon" />
            <h3>AI Governance &amp; Security</h3>
            <p>
              Create the foundations for responsible enterprise adoption: use-case controls, data boundaries, access, human-in-the-loop processes, evaluation, monitoring and practical policies employees can actually follow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
