import React from "react";

export default function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading">
      <div className="loader" aria-hidden="true" />
    </div>
  );
}
