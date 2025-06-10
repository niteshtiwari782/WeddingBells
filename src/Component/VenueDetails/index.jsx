import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.css';
import VenuePhotoShowcase from './VenuePhotoShowcase';

import { FaChevronLeft, FaStar } from 'react-icons/fa6';
import { fetchVenueDetails } from '../../service/venueDetailService';

export default function VenueDetails() {
  const [searchParams] = useSearchParams();

  const [venueData, setVenueData] = useState([]);

  const id = searchParams.get('id');

  useEffect(() => {
    const res = fetchVenueDetails(parseInt(id));
    setVenueData(prevState => res[0]);
  }, []);

  useEffect(() => {
    console.log(venueData);
  }, [venueData]);

  return (
    <div className="venueDetailContainer">
      <div className="venueDetailHeader">
        <div className="viewDetailsBackBtn">
          <FaChevronLeft /> Back
        </div>
        <button className="getQuotationBtn">Get Quotation</button>
      </div>
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
        </div>
      </div>
    </div>
  );
}
