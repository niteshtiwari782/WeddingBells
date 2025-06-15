import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaUser } from 'react-icons/fa6';
import { TiTick } from 'react-icons/ti';
import './HorizontalCardScroll.css';

import Carousel from '../Carousel';

function VenueAreaCard({ title, listOptions, handlePriceChange }) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openCarousel = (index = 0) => {
    // setStartIndex(index);
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
          <label>Selected</label>
          <TiTick />
        </div>
      );
    }

    return (
      <div className="selectedBtn">
        <label>Add</label>
      </div>
    );
  };

  return (
    <div className="horizontal-scroll-wrapper">
      <h3 className="scroll-title">{title}</h3>
      <div className="scroll-controls">
        <button onClick={() => scroll('left')} className="scroll-button">
          <FaChevronLeft />
        </button>
        <div className="scroll-container" ref={scrollRef}>
          {listOptions?.map(card => (
            <div
              key={card.id}
              className={`scroll-card ${selectedId === card.id ? 'selected' : ''}`}
            >
              <div className="cardHeader">
                <label>{card.name}</label>
                <div className="optionRating">
                  <label>Ratings :</label>
                  <div style={{ 'margin-top': '4px' }}>
                    {Array.from({ length: card.rating }).map((_, index) => (
                      <FaStar color="#ffc629" size={12} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="cardBody">
                <div className="areaOptionList">
                  <span className="list-item" key={1}>
                    Min. <FaUser size={10} /> : {card.minCap}
                  </span>
                  <span className="list-item" key={2}>
                    Max. <FaUser size={10} /> : {card.maxCap}
                  </span>
                  <span className="list-item" key={3}>
                    Type: {card.type}
                  </span>
                  <span className="list-item" key={4}>
                    Size: {card.area}
                  </span>
                </div>
                <div className="areaOptionImage">
                  <div className="tile" onClick={() => openCarousel(0)}>
                    <img src={card.images[0]} alt="Side 1" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedId(card.id);
                  handlePriceChange();
                }}
                className="add-button"
              >
                {renderBtnText(card.price, selectedId === card.id)}
              </button>
              {showCarousel && (
                <Carousel
                  images={card.images}
                  startIndex={startIndex}
                  onClose={() => setShowCarousel(false)}
                />
              )}
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="scroll-button">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default VenueAreaCard;
