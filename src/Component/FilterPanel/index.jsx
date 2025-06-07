import React from 'react';
import { FaMapSigns } from 'react-icons/fa';
import { FaCircleUser, FaFilter, FaIndianRupeeSign, FaRegCalendarPlus } from 'react-icons/fa6';
import './styles.css';

export default function FilterPane() {
  return (
    <div className="FilterPanelContainer">
      <div className="FilterTitle">
        <FaFilter />
        <label>Filters</label>
      </div>
      <div className="scroll-container">
        <div className="scroll-item">
          <label>Date</label>
          <FaRegCalendarPlus />
        </div>
        <div className="scroll-item">
          <label>Budget</label>
          <FaIndianRupeeSign />
        </div>
        <div className="scroll-item">
          <label>Location</label>
          <FaMapSigns />
        </div>
        <div className="scroll-item">
          <label>Guests</label>
          <FaCircleUser />
        </div>
      </div>
    </div>
  );
}
