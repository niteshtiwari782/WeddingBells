import React, { useState } from 'react';

import './styles.css';

import { MdFastfood, MdHome, MdOutlineReviews } from 'react-icons/md';
import { TbChristmasTreeFilled } from 'react-icons/tb';

import HorizontalCardScroll from '../FoodOptions/index';
import VenueAreaCard from '../FoodOptions/veneuArea';

export default function VenueOptionsDetails({ venueData, handlePlatePrice }) {
  const [selectedDetail, setSelectedDetail] = useState('foodOptions');
  return (
    <div className="veneuDetailContainer">
      <div className="venueDetailsOptions">
        <div
          className={`foodOption ${selectedDetail === 'foodOptions' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedDetail('foodOptions');
          }}
        >
          <MdFastfood />
          <label>Plates</label>
        </div>
        <div
          className={`foodOption ${selectedDetail === 'areaOptions' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedDetail('areaOptions');
          }}
        >
          <MdHome />
          <label>Area</label>
        </div>
        <div
          className={`foodOption ${selectedDetail === 'decorOptions' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedDetail('decorOptions');
          }}
        >
          <TbChristmasTreeFilled />
          <label>Decoration</label>
        </div>
        <div
          className={`foodOption ${selectedDetail === 'reviewsOptions' ? 'selected' : ''}`}
          onClick={() => {
            setSelectedDetail('reviewsOptions');
          }}
        >
          <MdOutlineReviews />
          <label>Reviews</label>
        </div>
      </div>
      <div className="foodOptionContainer">
        {selectedDetail === 'foodOptions' && (
          <HorizontalCardScroll
            title={'Food Options'}
            ratings={venueData.foodRating}
            listOptions={venueData.foodOption}
            listImages={venueData.foodImages}
            handlePriceChange={handlePlatePrice}
          />
        )}
        {selectedDetail === 'areaOptions' && (
          <VenueAreaCard
            title={'Areas Available'}
            listOptions={venueData.Areas}
            handlePriceChange={() => {}}
          />
        )}
      </div>
    </div>
  );
}
