import React, { useState } from "react";

const certs = [
  ["C Programming", "Jul 4, 2024"],
  ["Kotlin Advanced", "Mar 12, 2024"],
  ["Python for Data", "Jan 9, 2024"],
  ["Web Dev Basics", "Nov 2, 2023"]
];

export default function Certificates() {
  const [q, setQ] = useState("");

  return (
    <section id="certificates" className="section-wrap">
      <div className="section-heading">
        <span>Credentials</span>
        <h2>Programming Hub Certificates</h2>
      </div>

      <input
        className="form-control search-input"
        placeholder="Search certificates..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="cert-grid">
        {certs
          .filter(([title]) => title.toLowerCase().includes(q.toLowerCase()))
          .map(([title, date]) => (
            <div className="glass cert-card" key={title}>
              <h3>{title}</h3>
              <p>{date}</p>
              <a href="#" onClick={(e) => e.preventDefault()}>Verify certificate</a>
            </div>
          ))}
      </div>
    </section>
  );
}
