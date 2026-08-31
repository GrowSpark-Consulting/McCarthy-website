import { BarChart3, Briefcase, Database, ShieldCheck, Users, Workflow } from 'lucide-react';

export default function AiAuditDimensions() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">What We Assess</span>
          <h2>A business-first view of AI readiness and opportunity.</h2>
          <p>The assessment looks across six connected dimensions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
          <div className="service-card">
            <Briefcase className="service-card__icon" />
            <h3>Business</h3>
            <p>Strategic goals, revenue drivers, cost pressures, customer experience and competitive pressures.</p>
          </div>
          <div className="service-card">
            <Workflow className="service-card__icon" />
            <h3>Process</h3>
            <p>Core workflows, manual work, repetitive tasks, approvals, bottlenecks, exceptions and handoffs.</p>
          </div>
          <div className="service-card">
            <Database className="service-card__icon" />
            <h3>Data &amp; Knowledge</h3>
            <p>Business data, documents, SOPs, data quality, accessibility and what AI would need to operate effectively.</p>
          </div>
          <div className="service-card">
            <BarChart3 className="service-card__icon" />
            <h3>Technology</h3>
            <p>Existing applications, CRM, ERP, databases, APIs, integrations and technical constraints.</p>
          </div>
          <div className="service-card">
            <Users className="service-card__icon" />
            <h3>Workforce</h3>
            <p>Current AI usage, capability, skills gaps, leadership readiness, adoption and AI champions.</p>
          </div>
          <div className="service-card">
            <ShieldCheck className="service-card__icon" />
            <h3>Governance</h3>
            <p>Security, permissions, data boundaries, human oversight, approved tools and monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
