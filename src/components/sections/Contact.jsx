import React, { useState } from "react";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [newsletter, setNewsletter] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    setValidated(true);
    if (form.checkValidity()) {
      alert("Thank you — message sent (demo).");
      form.reset();
      setValidated(false);
    }
  };

  return (
    <section id="contact" className="section-wrap">
      <div className="section-heading">
        <span>Contact</span>
        <h2>Let's build something together</h2>
      </div>

      <div className="contact-grid">
        <form
          className={`glass contact-form needs-validation ${validated ? "was-validated" : ""}`}
          noValidate
          onSubmit={submitForm}
        >
          <label className="form-label">
            Full name
            <input className="form-control" type="text" required placeholder="Your full name" />
            <div className="invalid-feedback">Name is required.</div>
          </label>

          <label className="form-label">
            Email address
            <input className="form-control" type="email" required placeholder="you@example.com" />
            <div className="invalid-feedback">Please enter a valid email address.</div>
          </label>

          <label className="form-label">
            Message
            <textarea className="form-control" rows="6" required placeholder="Tell me about your project" />
            <div className="invalid-feedback">Message cannot be empty.</div>
          </label>

          <div className="newsletter-row">
            <input
              className="form-control"
              placeholder="Subscribe email (optional)"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => {
                if (!newsletter) return alert("Please enter an email");
                alert("Subscribed (demo)");
              }}
            >
              Subscribe
            </button>
          </div>

          <button className="btn btn-gold" type="submit">Send message</button>
        </form>

        <aside className="glass contact-side">
          <p><strong>Phone:</strong> +95 9 889 000 889</p>
          <p><strong>Email:</strong> moekyawaung@programmer.net</p>
          <div className="map-box">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=..."
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
