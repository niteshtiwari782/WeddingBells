import React from 'react';
import DropdownMenu from '../../Component/City';
import FilterPanel from '../../Component/FilterPanel';

export default function HomePage() {
  return (
    <div>
      <DropdownMenu />
      <FilterPanel />
    </div>
  );
}
