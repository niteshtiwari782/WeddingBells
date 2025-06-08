import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const handleKeyDown = e => {
    if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="carousel-overlay" onClick={onClose}>
      <img src={images[index]} alt={`Slide ${index}`} />
      <div className="carousel-controls">
        <button
          onClick={e => {
            e.stopPropagation();
            prev();
          }}
        >
          Previous
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            next();
          }}
        >
          Next
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Carousel;
