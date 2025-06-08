import React from 'react';
import { FaLocationArrow, FaRegUser, FaStar } from 'react-icons/fa';
import nonveg from '../../assets/showcaseImages/nonveg.png';
import veg from '../../assets/showcaseImages/veg.png';
import venueShowcase from '../../data/venueShowcase';
import './VenueShowcase.css';

const venues = venueShowcase;

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
          <label>{venue.venueStar} Star Venue</label>
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
        <div className="venue-capacity">
          <div className="venue-capacity-title">Capacity :</div>
          <div className="venue-capacity-value">
            {venue.capacity}
            <FaRegUser />
          </div>
        </div>
      </div>
      <div className="venue-secondaryInfo">
        <div className="venueRatings">
          <div className="ratingsInfo">
            <label className="customerRatingTitle">Customer Ratings :</label>
            <div className="customerRatingValueContainer">
              <div className="customerRatingValue">
                {Array.from({ length: venue.rating }).map((_, index) => (
                  <FaStar color="#ffc629" size={12} />
                ))}
              </div>
            </div>
          </div>
          <div className="reviewInfo">
            <div className="ratingBadge">{venue.badgeValue}</div>
            <label>{venue.reviewsCount} Reviews</label>
          </div>
        </div>

        <div className="venue-meta">
          <div className="venue-price-label">Starts from</div>
          <span className="venue-price-value">₹{venue.startPrice}</span>
          <span className="venue-price-subtext">for 100 Guests</span>
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;
