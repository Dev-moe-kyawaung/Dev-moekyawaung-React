import React from "react";

export default function Testimonials() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What clients say</h2>
      </div>

      <div id="testiCarousel" className="carousel slide glass" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <blockquote>
              "Moe built a performant Android app with excellent architecture — ship-ready and easy to maintain."
            </blockquote>
            <p>— Product Manager, Yangon</p>
          </div>
          <div className="carousel-item">
            <blockquote>
              "Reliable, fast, and communicative. Delivered features on time with clear tests."
            </blockquote>
            <p>— CTO, Bangkok</p>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#testiCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testiCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
