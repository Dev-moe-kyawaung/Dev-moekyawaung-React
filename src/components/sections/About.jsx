import React from "react";

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-heading">
        <span>About</span>
        <h2>Developer by passion, learner by nature</h2>
      </div>

      <div className="two-col glass">
        <div>
          <p>
            I design mobile-first applications prioritising performance,
            maintainability and clear UX. My toolkit includes Kotlin, Jetpack Compose,
            Firebase, REST APIs, and design systems for scalable teams.
          </p>
          <p>
            Currently building: <strong>MoekyawTranslator — AI Translation App</strong>.
            Certifications: 40+ across web, mobile, AI, and security.
          </p>
        </div>

        <div className="info-card">
          <div><span>Full name</span><strong>Moe Kyaw Aung</strong></div>
          <div><span>Email</span><strong>moekyawaung@programmer.net</strong></div>
          <div><span>Phone</span><strong>+95 9 889 000 889</strong></div>
          <div><span>Focus</span><strong>Mobile · Backend · Security · AI</strong></div>
        </div>
      </div>
    </section>
  );
}
