import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link-custom active" : "nav-link-custom";

  return (
    <header className="site-header glass">
      <div className="brand">
        <img
          src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp"
          alt="Moe Kyaw Aung"
          className="brand-avatar"
        />
        <div>
          <div className="brand-name">Moe Kyaw Aung</div>
          <div className="brand-sub">Android Senior Developer</div>
        </div>
      </div>

      <div className="nav-actions">
        <ThemeToggle />
        <button
          className="hambtn"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          type="button"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>

      <nav className={`nav-panel glass ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="hambtn close-btn" onClick={closeMenu} aria-label="Close navigation menu" type="button">
          <i className="fa-solid fa-xmark" />
        </button>

        <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
        <NavLink to="/projects" className={linkClass} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}
