import { Button, Card, Carousel, ConfigProvider } from 'antd';
import React, { useEffect, useState } from 'react';

import './styles.css';
import { fetchVenueDetails } from '../../service/venueDetailService';
import { FaStar, FaMapMarkerAlt, FaRegDotCircle } from 'react-icons/fa';
import { formattedAmount, shortenString } from '../../utility';
import AreaInfoTab from './AreaInfoTab';
export default function AreaDetail() {
  const [areaDetail, setAreaDetail] = useState([]);
  const [venueDetail, setVenueDetail] = useState([]);
  useEffect(() => {
    const res = fetchVenueDetails(3);
    setVenueDetail(prevState => res[0]);
  }, []);

  useEffect(() => {
    if (venueDetail?.Areas?.length >= 2) {
      setAreaDetail(prevState => venueDetail?.Areas[2]);
    }
  }, [venueDetail]);

  return (
    <div>
      <div className="area-listiing-header">
        <div className="area-listing-header-title">{shortenString(venueDetail.name)}</div>
        <div>
          <Button style={{ background: '#ec407a', color: 'white', fontWeight: 'bolder' }}>
            Book an Appointment
          </Button>
        </div>
      </div>
      <div className="area-info-container">
        <ConfigProvider
          theme={{
            token: {
              bodyPadding: 10,
            },
          }}
        >
          <Card className="card-padding" bodyPaddingSM>
            <div className="areadetail-carousel-container">
              <Carousel autoplay arrows={true}>
                {areaDetail?.images?.map((o, i) => (
                  <img key={i} src={o} className="areadetail-image" />
                ))}
              </Carousel>
            </div>
            <div className="areadetail-content-container">
              <div className="areadetail-content-left">
                <div className="areadetail-name">{areaDetail.name}</div>
                <div className="areadetail-sub-title">
                  <div>
                    {Array.from({ length: venueDetail.rating }).map((_, index) => (
                      <FaStar color="#ec407a" size={12} />
                    ))}
                  </div>
                  {venueDetail.reviewsCount} Reviews
                </div>
                <div className="areadetail-sub-title">Capacity: {venueDetail.capacity}</div>
              </div>
              <div className="areadetail-content-right">
                <div className="areadetail-sub-title">
                  <a
                    style={{
                      color: '#ec407a',
                    }}
                  >
                    <FaMapMarkerAlt /> {venueDetail.area}
                  </a>
                </div>
                <div className="areadetail-price">
                  <span className="areadetail-price-sub">Starts From</span>
                  <span className="areadetail-price-primary">
                    {formattedAmount(venueDetail.startPrice)}
                  </span>
                  <span className="areadetail-price-sub">Per 100 guests</span>
                </div>
              </div>
            </div>
          </Card>
        </ConfigProvider>
      </div>
      <div className="area-info-tab-container">
        <AreaInfoTab facilities={venueDetail.facilitiesList} />
      </div>
    </div>
  );
}
