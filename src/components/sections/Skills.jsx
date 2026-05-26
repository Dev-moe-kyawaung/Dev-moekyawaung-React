import React from "react";

const data = [
  ["Android & Mobile", "Kotlin · Jetpack Compose · Material 3 · Coroutines"],
  ["Backend", "Firebase · REST APIs · Python · Ktor"],
  ["AI / ML", "Claude API · TensorFlow Lite · On-device ML"],
  ["Security", "Ethical Hacking · OWASP"],
  ["Web", "HTML · CSS · Bootstrap · React · Next.js"],
  ["DevOps", "GitHub Actions · CI/CD · Docker"]
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="section-heading">
        <span>Tech Stack</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="grid-3">
        {data.map(([title, meta]) => (
          <div className="glass skill-card" key={title}>
            <h3>{title}</h3>
            <p>{meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
