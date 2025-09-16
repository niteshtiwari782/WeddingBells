import React, { useEffect, useState } from 'react';
import VenueDetailData from '../../data/venueDetialData';
import { Tabs } from 'antd';
import { Button, Carousel } from 'antd';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './styles.css';
import { formattedAmount, shortenString } from '../../utility';
import { fetchVenueDetails } from '../../service/venueDetailService';
import ReviewData from './reviewData';
import FoodMenu from './foodMenu';
import FacilitiesList from './facilitesList';

export default function VenueAreaListing() {
  const [searchParams] = useSearchParams();
  const [areaData, setAreaData] = useState([]);
  const [venueName, setVenueName] = useState('');
  const [currentTab, setCurrentTab] = useState(1);
  const [foodMenuList, setFoodMenuList] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const id = searchParams.get('id');

  useEffect(() => {
    const res = fetchVenueDetails(parseInt(id));
    setAreaData(prevState => res[0].Areas);
    setVenueName(prevState => res[0].name);
    setFacilities(prevState => res[0].facilitiesList);
    setFoodMenuList(prevState => res[0].foodOption);
  }, []);

  const onChangeTab = key => {
    setCurrentTab(prevState => key);
  };

  const tabContent = [
    {
      key: 1,
      label: 'Areas',
      children: <AreaListing areaData={areaData} id={id} />,
    },
    {
      key: 2,
      label: 'Food Menu',
      children: <FoodMenu foodMenuList={foodMenuList} />,
    },
    {
      key: 3,
      label: 'Reviews',
      children: <ReviewData />,
    },
    {
      key: 4,
      label: 'Facilities',
      children: <FacilitiesList facilities={facilities} />,
    },
  ];

  return (
    <div>
      <div className="area-listiing-header">
        <div className="area-listing-header-title">{venueName}</div>
        <div>
          <Button className="appointment-btn">Book an Appointment</Button>
        </div>
      </div>
      <div className="venue-info-tab-container">
        <Tabs defaultActiveKey={currentTab} items={tabContent} onChange={onChangeTab} />
      </div>
    </div>
  );
}

function AreaListing({ areaData, id }) {
  return (
    <div className="area-listing-container">
      {areaData.map(area => (
        <RenderAreaCard areaData={area} venueId={id} />
      ))}
    </div>
  );
}

function RenderAreaCard({ areaData, venueId }) {
  const { id, images, name, rating, maxCap, area } = areaData;
  const navigate = useNavigate();

  return (
    <div
      className="area-card-container"
      onClick={() => {
        navigate(`/area_detail?pid=${venueId}&sid=${id}`);
        console.log('clicked');
      }}
    >
      <div className="carousel_container">
        <Carousel autoplay arrows={true}>
          {images.map((o, i) => (
            <img key={i} src={o} className="area-image" />
          ))}
        </Carousel>
      </div>
      <div className="area-meta-info-container">
        <div className="area-meta-left-info">
          <div className="area-title">{name}</div>
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
          <div className="area-meta">
            <div className="area-sub-label">Starts from</div>
            <div className="area-price">{formattedAmount(40000)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
