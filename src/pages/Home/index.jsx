import React from 'react';
import DropdownMenu from '../../Component/City';
import FilterPanel from '../../Component/FilterPanel';
import VenueShowcase from '../../Component/VenueShowcase';

export default function HomePage() {
  return (
    <div>
      <DropdownMenu />
      <FilterPanel />
      <VenueShowcase />
    </div>
  );
}
