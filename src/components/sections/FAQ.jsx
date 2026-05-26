import React from "react";

export default function FAQ() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <span>FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div className="accordion glass" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              How long to build a medium Android app?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Typically 8–12 weeks for an MVP depending on scope, integrations, and QA cycles.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Do you provide maintenance?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes — monthly and yearly maintenance packages are available.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
