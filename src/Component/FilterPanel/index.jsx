import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { setFilters } from '../../app/FilterSlice';

export default function FilterPane() {
  const dispatch = useDispatch();
  const [filterObj, setFilterObj] = useState({});

  const handeApply = () => {
    dispatch(setFilters(filterObj));
  };

  return (
    <div className="filter-panel-container">
      <div className="filter-panel-content">
        <Filter
          id={'city'}
          label="City"
          placeholder={'Indore...'}
          options={cityFilterOptions}
          defaultValue={cityFilterOptions[0]}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
        />
        <BudgetFilter id={'budget_range'} filterObj={filterObj} setFilterObj={setFilterObj} />
        <Filter
          id={'property_type'}
          label="Property Type"
          placeholder={'Resort..'}
          options={propertyFilterOptions}
          defaultValue={propertyFilterOptions[0]}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
        />
        <GuestFilter id={'guest_range'} filterObj={filterObj} setFilterObj={setFilterObj} />
        <Filter
          id={'area'}
          label="Area"
          placeholder={'Palasia..'}
          options={areaFilterOptions}
          defaultValue={areaFilterOptions[0]}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
        />
        <Filter
          id={'property_quality'}
          label="Property Rating"
          placeholder={'Any..'}
          options={ratingFilterOptions}
          defaultValue={ratingFilterOptions[0]}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
        />
      </div>
      <div className="filter-panel-action">
        <Button
          style={{ background: '#ec407a', color: 'white', fontWeight: 'bolder' }}
          onClick={handeApply}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
