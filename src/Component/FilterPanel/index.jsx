import React, { useEffect, useState } from 'react';
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
import { Button, Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../app/FilterSlice';
import { FaChevronDown } from 'react-icons/fa';

export default function FilterPane() {
  const dispatch = useDispatch();
  const [filterObj, setFilterObj] = useState({});
  const [open, setOpen] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const handeApply = () => {
    const len = Object.keys(filterObj).length;
    setFilterCount(prevState => len);
    onClose();
    // dispatch(setFilters(filterObj));
  };

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
      const mql = window.matchMedia(query);
      const onChange = () => setMatches(mql.matches);
      setMatches(mql.matches);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }, [query]);
    return matches;
  }

  const onClose = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const isSmall = useMediaQuery('(max-width: 500px)');

  if (isSmall) {
    return (
      <div className="filter-panel-container-small">
        <div className="filter-panel-content">
          {filterCount > 0 && (
            <div className="pill pill--outline" onClick={openDrawer}>
              Filter <FaChevronDown className="chev" size={12} /> {filterCount}
            </div>
          )}
          {filterCount == 0 && (
            <div className="pill" onClick={openDrawer}>
              Filter <FaChevronDown className="chev" size={12} />
            </div>
          )}
          {filterObj.hasOwnProperty('budget_range') && (
            <div className="pill pill--outline" onClick={openDrawer}>
              Budget <FaChevronDown className="chev" size={12} />
            </div>
          )}
          {!filterObj.hasOwnProperty('budget_range') && (
            <div className="pill" onClick={openDrawer}>
              Budget <FaChevronDown className="chev" size={12} />
            </div>
          )}
          {filterObj.hasOwnProperty('guest_range') && (
            <div className="pill pill--outline" onClick={openDrawer}>
              Guest <FaChevronDown className="chev" size={12} />
            </div>
          )}
          {!filterObj.hasOwnProperty('guest_range') && (
            <div className="pill" onClick={openDrawer}>
              Guest <FaChevronDown className="chev" size={12} />
            </div>
          )}
        </div>
        <Drawer
          title="Filters"
          placement={'bottom'}
          closable={false}
          onClose={onClose}
          open={open}
          height="fit-content"
          key={'bottom'}
        >
          <div className="drawer-content">
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
        </Drawer>
      </div>
    );
  }

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
