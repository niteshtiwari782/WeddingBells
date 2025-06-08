import React from 'react';
import {
  FaChevronDown,
  FaIndianRupeeSign,
  FaLocationArrow,
  FaRegCalendar,
  FaRegUser,
  FaStar,
} from 'react-icons/fa6';
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
          <FaRegCalendar />
          <label>Date</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <FaIndianRupeeSign />
          <label>Budget</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <FaLocationArrow />
          <label>Location</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <FaRegUser />
          <label>Guests</label>
          <FaChevronDown />
        </div>
        <div className="scroll-item">
          <FaStar />
          <label>Ratings</label>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
}
