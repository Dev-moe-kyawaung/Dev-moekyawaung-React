import React, { useState } from "react";
import Lightbox from "../ui/Lightbox";

const projects = [
  {
    title: "Social Dashboard",
    desc: "React analytics dashboard for social metrics.",
    image: "https://picsum.photos/seed/social/800/500",
    link: "https://github.com/moekyawaung-tech/social-dashboard"
  },
  {
    title: "PWA App",
    desc: "Offline-first installable web app.",
    image: "https://picsum.photos/seed/pwa/800/500",
    link: "https://github.com/moekyawaung-tech/pwa-app"
  },
  {
    title: "Video Player",
    desc: "Kotlin ExoPlayer-based media app.",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png",
    link: "https://github.com/moekyawaung-tech/video-player"
  }
];

export default function Projects() {
  const [lb, setLb] = useState({ open: false, src: "", alt: "" });

  return (
    <section id="projects" className="section-wrap">
      <div className="section-heading">
        <span>Featured Work</span>
        <h2>App Collection & Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card glass">
            <img
              src={p.image}
              alt={p.title}
              onClick={() => setLb({ open: true, src: p.image, alt: p.title })}
            />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Repo</a>
          </article>
        ))}
      </div>

      <div className="gallery-grid glass">
        {[
          "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp",
          "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png",
          "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png",
          "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png"
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            onClick={() => setLb({ open: true, src, alt: `Gallery ${i + 1}` })}
          />
        ))}
      </div>

      <Lightbox
        open={lb.open}
        src={lb.src}
        alt={lb.alt}
        onClose={() => setLb({ open: false, src: "", alt: "" })}
      />
    </section>
  );
}
