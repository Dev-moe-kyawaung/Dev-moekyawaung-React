import React from "react";
import { Link } from "react-router-dom";
import ParticlesHero from "../ui/ParticlesHero";
import Counter from "../ui/Counter";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <ParticlesHero />
      <div className="hero-shell glass">
        <div className="hero-copy">
          <p className="eyebrow">Hello — I'm</p>
          <h1>Moe Kyaw Aung · Senior Android Developer</h1>
          <p>
            Kotlin · Jetpack Compose · Firebase · Clean Architecture.
            Building premium Android experiences with strong UI and scalable architecture.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-gold">View Projects</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Me</Link>
          </div>

          <div className="hero-stats">
            <div className="stat glass">
              <small>Certificates</small>
              <strong><Counter target={82} /></strong>
            </div>
            <div className="stat glass">
              <small>Projects</small>
              <strong><Counter target={24} /></strong>
            </div>
            <div className="stat glass">
              <small>Years</small>
              <strong><Counter target={3} /></strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp"
            alt="Moe Kyaw Aung profile"
          />
          <div className="mini-card glass">
            <strong>Tachileik, Myanmar ↔ Bangkok, Thailand</strong>
            <span>Languages: Burmese, English, Kotlin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
