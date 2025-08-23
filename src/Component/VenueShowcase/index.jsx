import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../app/FilterSlice';
import { FaLocationArrow, FaRegUser, FaStar } from 'react-icons/fa';
import nonveg from '../../assets/showcaseImages/nonveg.png';
import veg from '../../assets/showcaseImages/veg.png';
import venueShowcase from '../../data/venueShowcase';
import { formattedAmount } from '../../utility';
import './VenueShowcase.css';
import { Badge, Skeleton } from 'antd';

const venues = venueShowcase;

const VenueShowcase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filters, products, loading, error } = useSelector(state => state.filters);

  const [venueList, setVenueList] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [filters]);

  useEffect(() => {
    setVenueList(prevState => products);
  }, [products]);

  if (loading)
    return (
      <div style={{ padding: '10px' }}>
        <Skeleton active />
      </div>
    );

  return (
    <div className="venue-container">
      {venueList.map(venue => (
        <div
          className="venue-card"
          key={venue.id}
          onClick={() => navigate(`/venue?id=${venue.id}`)}
        >
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
          <div>
            {Array.from({ length: venue.venueStar }).map((_, index) => (
              <FaStar size={10} color="gray" />
            ))}
          </div>
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
            <div style={{ fontSize: '10px' }}>{venue.capacity}</div>
            <div style={{ paddingTop: '3px' }}>
              <FaRegUser />
            </div>
          </div>
        </div>
      </div>
      <div className="venue-secondaryInfo">
        <div className="venueRatings">
          <div className="ratingsInfo">
            <label className="customerRatingTitle">Customer Ratings</label>
            <div className="customerRatingValueContainer">
              <div className="customerRatingValue">
                {Array.from({ length: venue.rating }).map((_, index) => (
                  <FaStar color="#8b0000" size={12} />
                ))}
              </div>
            </div>
          </div>
          <div className="reviewInfo">
            <Badge size="small" count={venue.badgeValue} showZero color="#8b0000" />
            <label>{venue.reviewsCount} Reviews</label>
          </div>
        </div>

        <div className="venue-meta">
          <div className="venue-price-label">Starts from</div>
          <span className="venue-price-value">{formattedAmount(venue.startPrice)}</span>
          <span className="venue-price-subtext">for 100 Guests</span>
        </div>
      </div>
    </div>
  );
};

export default VenueShowcase;
