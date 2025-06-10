import React, { useEffect, useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

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
        <div
          onClick={e => {
            e.stopPropagation();
            prev();
          }}
        >
          <FaChevronLeft color="white" size={20} />
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            onClose();
          }}
        >
          <IoMdClose color="white" size={20} />
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            next();
          }}
        >
          <FaChevronRight color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
