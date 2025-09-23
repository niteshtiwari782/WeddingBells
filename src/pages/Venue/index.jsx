import React, { useEffect, useState } from 'react';
import { Badge, Tabs } from 'antd';
import { Button, Carousel } from 'antd';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './styles.css';
import { formatCommas, formattedAmount } from '../../utility';
import {
  fetchFacilities,
  fetchFoodDetails,
  fetchPackages,
  fetchReviews,
  fetchVenueMetaData,
} from '../../service/venueDetailService';
import ReviewData from './reviewData';
import FoodMenu from './foodMenu';
import FacilitiesList from './facilitesList';
import LoadingScreen from '../../Component/Loadingscreen';

export default function VenueAreaListing() {
  const [searchParams] = useSearchParams();
  const [areaData, setAreaData] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [foodMenuList, setFoodMenuList] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [venueMeta, setVenueMeta] = useState({
    name: '',
    rating: 0,
    reviewsCount: 0,
  });
  const id = searchParams.get('id');

  useEffect(() => {
    // write new API to fetch name, rating & reviewsCount
    fetchVenueMetaData(id).then(res => {
      const { name, rating, reviewsCount } = res;
      const newMetaData = {
        name: name,
        rating: rating,
        reviewsCount: reviewsCount,
      };
      setVenueMeta(prevState => newMetaData);
    });
  }, []);

  useEffect(() => {
    fetchPackages(id).then(res => {
      setLoading(prevState => false);
      setAreaData(prevState => res);
    });
    fetchFoodDetails(id).then(res => {
      setFoodMenuList(prevState => res);
    });
    fetchReviews(id).then(res => {
      const { reviews } = res[0];
      setReviewsData(prevState => reviews);
    });
    fetchFacilities(id).then(res => {
      const {} = res[0];
      setFacilities(prevState => res[0].facilities);
    });
  }, []);

  const onChangeTab = key => {
    setCurrentTab(prevState => key);
  };

  const tabContent = [
    {
      key: 1,
      label: 'Packages',
      children: <AreaListing areaData={areaData} id={id} venueMetaData={venueMeta} />,
    },
    {
      key: 2,
      label: 'Food Packages',
      children: <FoodMenu foodMenuList={foodMenuList[0]} venueID={id} />,
    },
    {
      key: 3,
      label: 'Reviews',
      children: <ReviewData reviewsData={reviewsData} />,
    },
    {
      key: 4,
      label: 'Facilities',
      children: <FacilitiesList facilities={facilities} />,
    },
  ];

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div className="area-listiing-header">
        <div className="area-listing-header-title">{venueMeta.name}</div>
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

function AreaListing({ areaData, id, venueMetaData }) {
  return (
    <div className="area-listing-container">
      {areaData.map(area => (
        <RenderAreaCard
          areaData={area}
          venueId={id}
          rating={venueMetaData.rating}
          reviewsCount={venueMetaData.reviewsCount}
        />
      ))}
    </div>
  );
}

function RenderAreaCard({ areaData, venueId, rating, reviewsCount }) {
  const { _id, img, name, capacity, areaSize, startPrice } = areaData;
  const navigate = useNavigate();
  return (
    <div
      className="area-card-container"
      onClick={() => {
        navigate(`/area_detail?pid=${venueId}&sid=${_id}`);
      }}
    >
      <div className="carousel_container">
        <Carousel autoplay arrows={true}>
          {img.map((o, i) => (
            <img key={i} src={o} className="area-image" />
          ))}
        </Carousel>
      </div>
      <div className="area-meta-info-container">
        <div className="area-meta-left-info">
          <div className="area-title">{name}</div>
          <div className="area-sub-title">Floating Capacity: {formatCommas(capacity)} pax</div>
          <div className="area-sub-title">
            Area: {formatCommas(areaSize)} <label>sqft</label>
          </div>
        </div>
        <div className="area-meta-right-info">
          <div className="rating--title">
            <div>
              {Array.from({ length: rating }).map((_, index) => (
                <FaStar color="#ec407a" size={12} />
              ))}
            </div>
            <div className="area-sub-label">{reviewsCount} reviews</div>
          </div>
          <div className="area-meta">
            <div className="area-sub-label">Starts from</div>
            <div className="area-price">{formattedAmount(startPrice)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
