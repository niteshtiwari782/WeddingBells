import React from 'react';
import { FaSort } from 'react-icons/fa';
import FilterPanel from '../../Component/FilterPanel';
import VenueShowcase from '../../Component/VenueShowcase';

import './styles.css';

export default function HomePage() {
  return (
    <div className="homeContainer">
      <FilterPanel />
      <div className="property-listing">
        <span className="bold-label">Listing 153 Properties</span>
        <div className="sorting-btn">
          <span>Sort</span>
          <FaSort />
        </div>
      </div>
      <VenueShowcase />
    </div>
  );
}
