import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Button, Popover } from 'antd';

import './styles.css';
import { FaRegUser } from 'react-icons/fa';

const GuestFilter = ({ id, setFilterObj }) => {
  const [value, setValue] = useState([100, 300]);
  const filter_key = id;

  function roundToNearest50(num) {
    return Math.round(num / 50) * 50;
  }

  const handleRangeValue = value => {
    const newObj = [roundToNearest50(value[0]), roundToNearest50(value[1])];
    setValue(newObj);
    setFilterObj(prevState => {
      const newObj2 = {
        ...prevState,
        [filter_key]: {
          min: newObj[0],
          max: newObj[1],
        },
      };
      return newObj2;
    });
  };

  const filterContent = () => (
    <div className="budget-filter-container">
      <Slider
        range={{ editable: true, minCount: 1, maxCount: 5 }}
        value={value}
        onChange={handleRangeValue}
        min={50}
        max={1500}
      />
    </div>
  );

  const FilterSummary = () => (
    <div className="filter-summary">
      <label className="filter-summary-label">Min : </label>
      <label className="filter-summary-value">{value[0]}</label>
      <label className="filter-summary-label">Max : </label>
      <label className="filter-summary-value">{value[1]}</label>
    </div>
  );
  return (
    <Popover placement="bottom" content={filterContent} title={FilterSummary} trigger="click">
      <div className="budget-filter-btn-container">
        <label className="filter-label">Guest Count</label>
        <Button className="budget-filter-btn">
          {value[0]} to {value[1]} Guests
        </Button>
      </div>
    </Popover>
  );
};
export default GuestFilter;
