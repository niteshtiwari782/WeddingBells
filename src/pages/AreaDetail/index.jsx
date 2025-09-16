import { Button, Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.css';
import { fetchAreaDetails, fetchVenueDetails } from '../../service/venueDetailService';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { formattedAmount, shortenString } from '../../utility';
import AreaInfoTab from './AreaInfoTab';

export default function AreaDetail() {
  const [areaDetail, setAreaDetail] = useState([]);
  const [venueDetail, setVenueDetail] = useState([]);
  const [searchParams] = useSearchParams();
  const parent_id = searchParams.get('pid');
  const self_id = searchParams.get('sid');
  useEffect(() => {
    const res = fetchVenueDetails(parseInt(parent_id));
    const areaDetail = fetchAreaDetails(res[0]?.Areas, parseInt(self_id));
    setVenueDetail(prevState => res[0]);
    setAreaDetail(prevState => areaDetail[0]);
  }, []);

  useEffect(() => {
    console.log(areaDetail);
  }, [areaDetail]);

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
        <div className="area-detial-images-container">
          <div className="area-detail-main-images">
            <RenderCarousel images={areaDetail?.images} />
          </div>
          <div className="area-detail-side-images">
            <div className="tile">
              <Image src={areaDetail?.images ? areaDetail?.images[0] : null} />
            </div>
            <div className="tile">
              <Image src={areaDetail?.images ? areaDetail?.images[0] : null} />
            </div>
            <div className="tile show-more-tile">
              <Image src={areaDetail?.images ? areaDetail?.images[0] : null} className="blur-bg" />
              <div className="overlay-text">20 more images</div>
            </div>
          </div>
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
      </div>
      <div className="area-info-tab-container">
        <AreaInfoTab facilities={venueDetail.facilitiesList} />
      </div>
    </div>
  );
}

function RenderCarousel({ images }) {
  return (
    <div className="areadetail-carousel-container">
      <Carousel autoplay arrows={true}>
        {images?.map((o, i) => (
          <img key={i} src={o} className="areadetail-image" />
        ))}
      </Carousel>
    </div>
  );
}
