import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.css';
import VenuePhotoShowcase from './VenuePhotoShowcase';

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
        <div className="venueDetailTitle">{venueData?.name}</div>
        <button className="getQuotationBtn">Get Quotation</button>
      </div>
      <VenuePhotoShowcase />
    </div>
  );
}
