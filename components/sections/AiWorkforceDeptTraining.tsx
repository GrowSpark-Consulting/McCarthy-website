import { DollarSign, Headphones, Megaphone, Settings, TrendingUp, Users } from 'lucide-react';

export default function AiWorkforceDeptTraining() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Department-Specific Training</span>
          <h2>AI should be taught in the context of the work.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
          <div className="service-card">
            <TrendingUp className="service-card__icon" />
            <h3>Sales</h3>
            <p>AI prospect research, lead qualification, personalisation, CRM intelligence and meeting preparation.</p>
          </div>
          <div className="service-card">
            <Megaphone className="service-card__icon" />
            <h3>Marketing</h3>
            <p>Research, content workflows, campaign intelligence and customer insights.</p>
          </div>
          <div className="service-card">
            <DollarSign className="service-card__icon" />
            <h3>Finance</h3>
            <p>Analysis, reporting, document processing and reconciliation support.</p>
          </div>
          <div className="service-card">
            <Users className="service-card__icon" />
            <h3>HR</h3>
            <p>Recruitment, employee knowledge, onboarding and internal support.</p>
          </div>
          <div className="service-card">
            <Settings className="service-card__icon" />
            <h3>Operations</h3>
            <p>Process analysis, reporting, exception management and automation.</p>
          </div>
          <div className="service-card">
            <Headphones className="service-card__icon" />
            <h3>Customer Service</h3>
            <p>Knowledge retrieval, response assistance, case summaries and escalation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
