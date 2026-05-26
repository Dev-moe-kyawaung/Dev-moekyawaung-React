import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-wrap notfound">
      <div className="glass">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="btn btn-gold">Back to Home</Link>
      </div>
    </section>
  );
}
