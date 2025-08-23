import React from 'react';
import './styles.css';
import Filter from './Filter';
import {
  areaFilterOptions,
  cityFilterOptions,
  propertyFilterOptions,
  ratingFilterOptions,
} from './filterOption';
import BudgetFilter from './BudgetFilter';
import GuestFilter from './GuestFilter';
import { Button } from 'antd';

export default function FilterPane() {
  return (
    <div className="filter-panel-container">
      <div className="filter-panel-content">
        <Filter label="City" placeholder={'Indore...'} options={cityFilterOptions} />
        <BudgetFilter />
        <Filter label="Property Type" placeholder={'Resort..'} options={propertyFilterOptions} />
        <GuestFilter />
        <Filter label="Area" placeholder={'Palasia..'} options={areaFilterOptions} />
        <Filter
          label="Property Rating"
          placeholder={'Any..'}
          options={ratingFilterOptions}
          defaultValue={ratingFilterOptions[1]}
        />
      </div>
      <div className="filter-panel-action">
        <Button style={{ background: '#8b0000', color: 'white', fontWeight: 'bolder' }}>
          Search
        </Button>
      </div>
    </div>
  );
}
