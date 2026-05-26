import React from "react";

export default function Blog() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <span>Blog</span>
        <h2>Latest articles</h2>
      </div>

      <div className="blog-grid">
        <article className="glass blog-card">
          <h3>Ship better Android apps</h3>
          <p>Best practices for modular Android projects and multi-module builds.</p>
        </article>
        <article className="glass blog-card">
          <h3>On-device ML with TFLite</h3>
          <p>Optimize models and run inference with low latency on Android devices.</p>
        </article>
        <article className="glass blog-card">
          <h3>CI/CD for mobile teams</h3>
          <p>Streamline PR validations and rollout strategies with GitHub Actions.</p>
        </article>
      </div>
    </section>
  );
}
