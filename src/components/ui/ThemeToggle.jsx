import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme-dark") === "1");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme-dark", dark ? "1" : "0");
  }, [dark]);

  return (
    <button
      className="hambtn"
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      aria-pressed={dark}
      type="button"
    >
      <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`} />
    </button>
  );
}
