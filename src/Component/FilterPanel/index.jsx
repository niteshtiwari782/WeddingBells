import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import './styles.css';

export default function FilterPane() {
  return (
    <div className="FilterPanelContainer">
      <div className="FilterTitle">
        <HiOutlineAdjustmentsHorizontal size={20} />
        <label>Filters</label>
      </div>
      <div className="scroll-container">
        <div className="scroll-item">
          <label>Date</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <label>Budget</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <label>Location</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <label>Guests</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <label>Ratings</label>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
}
