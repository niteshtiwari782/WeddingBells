import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { TiTick } from 'react-icons/ti';
import './HorizontalCardScroll.css';

import Carousel from '../Carousel';

function HorizontalCardScroll({ title, foodOptions, foodImages, handlePlatePrice }) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openCarousel = (index = 0) => {
    setStartIndex(index);
    setShowCarousel(true);
  };
  const [selectedId, setSelectedId] = useState(1);
  const scrollRef = useRef(null);

  const scroll = direction => {
    const container = scrollRef.current;
    const scrollAmount = 220; // Scroll by approx 1 card width
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderBtnText = (price, isSelected) => {
    if (isSelected) {
      return (
        <div className="selectedBtn">
          <label>{price}</label>
          <TiTick />
        </div>
      );
    }

    return <div>Add</div>;
  };

  return (
    <div className="horizontal-scroll-wrapper">
      <label className="scroll-title">{title}</label>
      <div className="scroll-controls">
        <button onClick={() => scroll('left')} className="scroll-button">
          <FaChevronLeft />
        </button>
        <div className="scroll-container" ref={scrollRef}>
          {foodOptions?.map(card => (
            <div
              key={card.id}
              className={`scroll-card ${selectedId === card.id ? 'selected' : ''}`}
            >
              <label>{card.title}</label>
              <div className="cardBody">
                <div className="foodOptionsList">
                  {['3 Gravy', '4 Breads', '2 Sweets', '2 Drinks', '4 Starters'].map((num, i) => (
                    <span className="list-item" key={i}>
                      {num}
                    </span>
                  ))}
                </div>
                <div className="foodOptionImage">
                  <div className="tile" onClick={() => openCarousel(0)}>
                    <img src={foodImages[0]} alt="Side 1" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedId(card.id);
                  handlePlatePrice(card.price);
                }}
                className="add-button"
              >
                {renderBtnText(card.price, selectedId === card.id)}
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="scroll-button">
          <FaChevronRight />
        </button>
      </div>
      {showCarousel && (
        <Carousel images={images} startIndex={startIndex} onClose={() => setShowCarousel(false)} />
      )}
    </div>
  );
}

export default HorizontalCardScroll;
