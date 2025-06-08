import React from 'react';
import DropdownMenu from '../../Component/City';
import FilterPanel from '../../Component/FilterPanel';
import VenueShowcase from '../../Component/VenueShowcase';

import './styles.css';

export default function HomePage() {
  return (
    <div className="homeContainer">
      <DropdownMenu />
      <FilterPanel />
      <VenueShowcase />
    </div>
  );
}
