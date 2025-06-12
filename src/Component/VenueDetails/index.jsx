import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.css';
import VenuePhotoShowcase from './VenuePhotoShowcase';

import { FaStar } from 'react-icons/fa6';
import { fetchVenueDetails } from '../../service/venueDetailService';
import EditableDropdown from '../Dropdown';
import HorizontalCardScroll from '../FoodOptions';

const guestMenuOptions = [100, 200, 300, 400];

export default function VenueDetails() {
  const [searchParams] = useSearchParams();

  const [venueData, setVenueData] = useState([]);

  const [guestCount, setGuestCount] = useState(100);

  const [platePrice, setPlatePrice] = useState(0);

  const [totalCost, setTotalcost] = useState(0);

  const id = searchParams.get('id');

  const handleSelect = value => {
    setGuestCount(prevState => value);
  };

  useEffect(() => {
    const res = fetchVenueDetails(parseInt(id));
    setVenueData(prevState => res[0]);
    setPlatePrice(prevState => res[0].foodOption[0].price);
  }, []);

  useEffect(() => {
    setTotalcost(prevState => guestCount * platePrice);
  }, [platePrice, guestCount]);

  const handlePlatePrice = val => {
    setPlatePrice(prevState => val);
  };

  const formattedAmount = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="venueDetailContainer">
      <div className="venueMetaDetailsContainer">
        <VenuePhotoShowcase />
        <div className="venueMetaDetailsContent">
          <div className="venueNameNRatingContainer">
            <div className="venueDetailTitle">
              <label>{venueData?.name}</label>
            </div>
            <div className="venueDetailsRatings">
              <div className="detailsReviewInfo">
                <div className="venueDetailsRatingBadge">{venueData.badgeValue}</div>
                <label className="venueDetailReviewText">{venueData.reviewsCount} Reviews</label>
              </div>
              <div className="venueDetailsratingsInfo">
                <label className="customerRatingTitle">Customer Ratings ({venueData.rating})</label>
                <div className="customerRatingValueContainer">
                  <div className="customerRatingValue">
                    {Array.from({ length: venueData.rating }).map((_, index) => (
                      <FaStar color="#ffc629" size={12} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="venue-detail-capacity">
            <label className="venue-detail-capacity-title">Capacity</label>
            <div className="venue-detail-capacity-container">
              {venueData.capacityList?.map((num, i) => (
                <span className="list-item" key={i}>
                  {num}
                </span>
              ))}
            </div>
          </div>
          <div className="venue-detail-capacity">
            <label className="venue-detail-capacity-title">Facilites</label>
            <div className="venue-detail-capacity-container">
              {venueData.facilitiesList?.map((num, i) => (
                <span className="list-item" key={i}>
                  {num}
                </span>
              ))}
            </div>
          </div>
          <div className="venuePriceNGuestContainer">
            <div className="guestCountFilterContainer">
              <div className="guestCountFilterLabel">
                <div>No. of Guests :</div>
              </div>
              <EditableDropdown
                value={guestCount}
                onSelect={handleSelect}
                options={guestMenuOptions}
                label="No. of Guests"
              />
            </div>
            <div className="venueCost">
              <div className="venue-detail-price-label">Starts from</div>
              <span className="venue-detail-price-value">{formattedAmount(totalCost)}</span>
            </div>
          </div>
          <div className="checkAvailBtnContainer">
            <button className="checkAvailBtn">Check Availability</button>
          </div>
        </div>
      </div>
      <div className="foodOptionContainer">
        <HorizontalCardScroll
          title={'Food Options'}
          foodOptions={venueData.foodOption}
          foodImages={venueData.foodImages}
          handlePlatePrice={handlePlatePrice}
        />
      </div>
    </div>
  );
}
