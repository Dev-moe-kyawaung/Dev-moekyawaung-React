import React from "react";

const plans = [
  {
    title: "Starter",
    price: "USD 499",
    items: ["1-page app prototype", "Basic UI/UX", "Email support"]
  },
  {
    title: "Professional",
    price: "USD 2,499",
    items: ["Multi-module Android app", "CI/CD, tests, analytics", "3 months support"]
  },
  {
    title: "Enterprise",
    price: "Custom",
    items: ["Architecture & roadmap", "Team training & audits", "Long-term support"]
  }
];

export default function Pricing() {
  return (
    <section id="services" className="section-wrap">
      <div className="section-heading">
        <span>Services</span>
        <h2>Pricing & Packages</h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className="glass pricing-card" key={plan.title}>
            <h3>{plan.title}</h3>
            <strong>{plan.price}</strong>
            <ul>
              {plan.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <a href="/contact" className="btn btn-gold">Get started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
