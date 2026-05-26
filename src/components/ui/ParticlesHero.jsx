import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesHero() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: ["#d4a843", "#ffffff", "#ffdd99"] },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 0.9, outModes: "bounce" }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: { repulse: { distance: 80 } }
        },
        detectRetina: true
      }}
      className="particles-layer"
    />
  );
}
