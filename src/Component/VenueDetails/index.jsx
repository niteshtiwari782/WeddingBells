import React, { useState } from 'react';
import Carousel from '../Carousel';
import './VenuePhotoShowcase.css';

import { garden, goldenLight, goldenRoom, lalit, sayaji } from '../../assets/showcaseImages';

const VenuePhotoShowcase = () => {
  const images = [goldenRoom, sayaji, garden, goldenLight, lalit];

  const [showCarousel, setShowCarousel] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openCarousel = (index = 0) => {
    setStartIndex(index);
    setShowCarousel(true);
  };

  return (
    <>
      <div className="gallery-container">
        <div className="main-thumbnail">
          <img src={images[0]} alt="Main" />
        </div>

        <div className="side-tiles">
          <div className="tile" onClick={() => openCarousel(1)}>
            <img src={images[1]} alt="Side 1" />
          </div>
          <div className="tile" onClick={() => openCarousel(2)}>
            <img src={images[2]} alt="Side 2" />
          </div>
          <div className="tile show-more-tile" onClick={() => openCarousel(0)}>
            <img src={images[3]} alt="Show More Background" className="blur-bg" />
            <div className="overlay-text">20 more images</div>
          </div>
        </div>
      </div>
      {showCarousel && (
        <Carousel images={images} startIndex={startIndex} onClose={() => setShowCarousel(false)} />
      )}
    </>
  );
};

export default VenuePhotoShowcase;
