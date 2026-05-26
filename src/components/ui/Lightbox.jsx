import React from "react";

export default function Lightbox({ open, src, alt, onClose }) {
  if (!open) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-label="Image preview">
      <img src={src} alt={alt} />
    </div>
  );
}
