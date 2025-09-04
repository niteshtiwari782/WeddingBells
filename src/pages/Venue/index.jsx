import React, { useEffect, useState } from 'react';
import VenueDetailData from '../../data/venueDetialData';
import { Button, Carousel } from 'antd';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './styles.css';
import { formattedAmount, shortenString } from '../../utility';
import { fetchVenueDetails } from '../../service/venueDetailService';

export default function VenueAreaListing() {
  const [searchParams] = useSearchParams();
  const [areaData, setAreaData] = useState([]);
  const [venueName, setVenueName] = useState('');
  const id = searchParams.get('id');

  useEffect(() => {
    const res = fetchVenueDetails(parseInt(id));
    setAreaData(prevState => res[0].Areas);
    setVenueName(prevState => res[0].name);
  }, []);

  return (
    <div>
      <div className="area-listiing-header">
        <h2 className="area-listing-header-title">{shortenString(venueName)}</h2>
        <div>
          <Button style={{ background: '#ec407a', color: 'white', fontWeight: 'bolder' }}>
            Book an Appointment
          </Button>
        </div>
      </div>
      <div className="area-listing-container">
        {areaData.map(area => (
          <AreaCard areaData={area} />
        ))}
      </div>
    </div>
  );
}

function AreaCard({ areaData }) {
  const { images, name, rating, maxCap, area } = areaData;
  const navigate = useNavigate();

  return (
    <div className="area-card-container" onClick={() => navigate(`/venue?id=${venue.id}`)}>
      <div className="carousel_container">
        <Carousel autoplay arrows={true}>
          {images.map((o, i) => (
            <img key={i} src={o} className="area-image" />
          ))}
        </Carousel>
      </div>
      <div className="area-meta-info-container">
        <div className="area-meta-left-info">
          <h3 className="area-title">{name}</h3>
          <div className="area-sub-title">Capacity: {maxCap}</div>
          <div className="area-sub-title">Area: {area}</div>
        </div>
        <div className="area-meta-right-info">
          <div className="rating--title">
            <div>
              {Array.from({ length: rating }).map((_, index) => (
                <FaStar color="#ec407a" size={12} />
              ))}
            </div>
            <div className="area-sub-label">38 reviews</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div className="area-sub-label">Starts from</div>
            <h3 className="area-price">{formattedAmount(40000)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
