import React from "react";

export default function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-grid">
        <div>
          <h5>Moe Kyaw Aung</h5>
          <p>Senior Android Developer focused on Kotlin, Compose, and scalable products.</p>
        </div>
        <div>
          <h6>Links</h6>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h6>Social</h6>
          <a href="https://github.com/Dev-moe-kyawaung/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <div>
          <h6>Contact</h6>
          <p>moekyawaung@programmer.net</p>
          <p>+95 9 889 000 889</p>
        </div>
      </div>
    </footer>
  );
}
