import { BookOpen, Crown, ShieldCheck, TrendingUp, UserCog, Zap } from 'lucide-react';

export default function AiWorkforceFramework() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">The Framework</span>
          <h2>Build capability across the organisation.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
          <div className="service-card">
            <BookOpen className="service-card__icon" />
            <h3>AI Literacy</h3>
            <p>Give everyone a practical understanding of AI: what it is, how it works, capabilities, limitations and real business applications.</p>
          </div>
          <div className="service-card">
            <Crown className="service-card__icon" />
            <h3>Leadership AI</h3>
            <p>Help executives understand how AI changes the business: strategy, opportunity identification, investment decisions, operating models, governance and transformation leadership.</p>
          </div>
          <div className="service-card">
            <UserCog className="service-card__icon" />
            <h3>Role-Based AI</h3>
            <p>AI should look different for every function. Sales, marketing, finance, HR, operations, customer service and management learn AI through their actual work.</p>
          </div>
          <div className="service-card">
            <Zap className="service-card__icon" />
            <h3>AI Productivity</h3>
            <p>Turn AI into an everyday productivity layer across research, writing, analysis, meetings, presentations, reporting and communication.</p>
          </div>
          <div className="service-card">
            <ShieldCheck className="service-card__icon" />
            <h3>AI Governance</h3>
            <p>Teach employees how to use AI responsibly: confidential information, data protection, verification, human oversight and risk awareness.</p>
          </div>
          <div className="service-card">
            <TrendingUp className="service-card__icon" />
            <h3>AI Adoption</h3>
            <p>Training is only the beginning. Embed AI into workflows, create internal champions, build playbooks and measure adoption.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
