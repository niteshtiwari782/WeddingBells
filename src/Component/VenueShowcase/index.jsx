import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow, FaRegUser, FaStar } from 'react-icons/fa';
import nonveg from '../../assets/showcaseImages/nonveg.png';
import veg from '../../assets/showcaseImages/veg.png';
import { formattedAmount } from '../../utility';
import './VenueShowcase.css';
import { Badge, Tag } from 'antd';

const VenueShowcase = ({ venueList, handleLoadingFlag }) => {
  const navigate = useNavigate();

  return (
    <div className="venue-container">
      {venueList?.map((venue, idx) => {
        if (idx % 8 == 2 && idx < 10) {
          return (
            <div
              className="venue-card"
              key={venue._id}
              // onClick={() => navigate(`/venue?id=${venue._id}`)}
            >
              <div className="card-filter-option">
                <div className="card-filter-option-title">Whats your Budget for 100 Guests ?</div>
                <div className="card-filter-option-list">
                  <Tag color="red">{formattedAmount(20000)}</Tag>
                  <Tag color="red">{formattedAmount(40000)}</Tag>
                  <Tag color="red" onClick={() => navigate(`/venue?id=${venue._id}`)}>
                    {formattedAmount(60000)}
                  </Tag>
                  <Tag color="red">{formattedAmount(100000)}</Tag>
                  <Tag color="red">{formattedAmount(130000)}</Tag>
                  <Tag color="red">{formattedAmount(170000)}</Tag>
                  <Tag color="red">
                    {' '}
                    {'>'} {formattedAmount(200000)}
                  </Tag>
                </div>
              </div>

              <div className="card-filter-option">
                <div className="card-filter-option-title">How Many Guests will be there ?</div>
                <div className="card-filter-option-list">
                  <Tag color="red">
                    {200}-{300}
                  </Tag>
                  <Tag color="red">
                    {350}-{450}
                  </Tag>
                  <Tag color="red">
                    {500}-{600}
                  </Tag>
                  <Tag color="red">
                    {650}- {900}
                  </Tag>
                  <Tag color="red">
                    {'>'} {1000}
                  </Tag>
                </div>
              </div>

              <div className="card-filter-option">
                <div className="card-filter-option-title">Whats your preferred venue type?</div>
                <div className="card-filter-option-list">
                  <Tag color="red">Banquet Hall</Tag>
                  <Tag color="red">Resort</Tag>
                  <Tag color="red">Garden</Tag>
                  <Tag color="red">Pool Side</Tag>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div
            className="venue-card"
            key={venue._id}
            onClick={() => navigate(`/venue?id=${venue._id}`)}
          >
            <img src={venue.img} className="venue-card-image" />
            <VenueInformation venue={venue} />
          </div>
        );
      })}
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
          {venue.location}
        </div>
        <div className="venue-capacity">
          <div className="venue-capacity-title">Capacity :</div>
          <div className="venue-capacity-value">
            <div>{venue.capacity}</div>
            <div style={{ paddingTop: '3px' }}>
              <FaRegUser />
            </div>
          </div>
        </div>
        <div className="venue-speciality">
          {venue.speciality.map(spcl => {
            return (
              <div className="venue-speciality-item">
                <Tag color="red">{spcl}</Tag>
              </div>
            );
          })}
        </div>
      </div>
      <div className="venue-secondaryInfo">
        <div className="venueRatings">
          <div className="ratingsInfo">
            <label className="customerRatingTitle">Customer Ratings</label>
            <div className="customerRatingValueContainer">
              <div className="customerRatingValue">
                {Array.from({ length: venue.rating }).map((_, index) => (
                  <FaStar color="#ec407a" size={12} />
                ))}
              </div>
            </div>
          </div>
          <div className="reviewInfo">
            <Badge size="small" count={venue.badgeValue} showZero color="#ec407a" />
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
