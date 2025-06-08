import React from 'react';
import { FaLocationArrow, FaStar } from 'react-icons/fa';
import garden from '../../assets/showcaseImages/garden.jpg';
import goldenLight from '../../assets/showcaseImages/goldenLight.jpg';
import lalit from '../../assets/showcaseImages/lalit.jpg';
import nonveg from '../../assets/showcaseImages/nonveg.png';
import sayaji from '../../assets/showcaseImages/sayaji.jpg';
import veg from '../../assets/showcaseImages/veg.png';
import './VenueShowcase.css';

const venues = [
  {
    id: 1,
    name: 'Royal Palace',
    location: 'Indore',
    img: lalit,
    venueStar: 3,
    rating: 4,
    isOnlyVeg: true,
    area: 'Palasia',
  },
  {
    id: 2,
    name: 'Sunshine Garden',
    location: 'Bhopal',
    img: garden,
    venueStar: 3,
    rating: 4,
    isOnlyVeg: false,
    area: 'Vijay Nagar',
  },
  {
    id: 3,
    name: 'Moonlight Banquet',
    location: 'Ujjain',
    img: sayaji,
    venueStar: 3,
    rating: 4,
    isOnlyVeg: true,
    area: 'Bhawarkua',
  },
  {
    id: 4,
    name: 'Emerald Venue',
    location: 'Dewas',
    img: goldenLight,
    venueStar: 3,
    rating: 4,
    isOnlyVeg: true,
    area: 'Vijay Nagar',
  },
];

const VenueShowcase = () => {
  return (
    <div className="venue-container">
      {venues.map(venue => (
        <div className="venue-card" key={venue.id}>
          <img src={venue.img} className="venue-card-image" />
          <VenueInformation venue={venue} />
        </div>
      ))}
    </div>
  );
};

const VenueInformation = ({ venue }) => {
  return (
    <div className="venue-info">
      <div className="venue-primaryInfo">
        <div className="venue-title" title={venue.name}>
          {venue.name}
        </div>
        <div className="venueQuality">
          {Array.from({ length: venue.venueStar }).map((_, index) => (
            <FaStar size={5} color="gray" />
          ))}
          <label>3 Star Venue</label>
        </div>
        {venue.isOnlyVeg && (
          <div className="venue-food-option">
            <img src={veg} className="venue-foodChoice-image" />
            <label>Veg Only</label>
          </div>
        )}
        {!venue.isOnlyVeg && (
          <div className="venue-food-option">
            <img src={veg} className="venue-foodChoice-image" />
            <label>Veg</label>
            <img src={nonveg} className="venue-foodChoice-image" />
            <label>Non-Veg</label>
          </div>
        )}
        <div className="venue-area">
          <FaLocationArrow size={10} />
          {venue.area}
        </div>
      </div>
      <div className="venue-secondaryInfo">
        <div className="venueRatings">
          <div className="ratingsInfo">
            <label>Rating</label>
            <div>
              {Array.from({ length: venue.rating }).map((_, index) => (
                <FaStar color="#ffc629" size={8} />
              ))}
            </div>
          </div>
          <div className="reviewInfo">
            <div className="ratingBadge">Very Good</div>
            <label>44 Reviews</label>
          </div>
        </div>

        <div className="venue-meta">
          <span className="venue-price">Starts from ₹76,000</span>
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;
