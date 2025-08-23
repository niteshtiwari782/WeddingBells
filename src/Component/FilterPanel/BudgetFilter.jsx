import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Button, Popover } from 'antd';

import './styles.css';
import { formattedAmount } from '../../utility';

function roundToNearest500(num) {
  return Math.round(num / 500) * 500;
}

const BudgetFilter = ({ id, setFilterObj }) => {
  const [value, setValue] = useState([1000, 3000]);
  const filter_key = id;

  const handleRangeValue = value => {
    const newObj = [roundToNearest500(value[0]), roundToNearest500(value[1])];
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
        min={500}
        max={10000}
      />
    </div>
  );

  const FilterSummary = () => (
    <div className="filter-summary">
      <label className="filter-summary-label">Min : </label>
      <label className="filter-summary-value">{formattedAmount(value[0])}</label>
      <label className="filter-summary-label">Max : </label>
      <label className="filter-summary-value">{formattedAmount(value[1])}</label>
    </div>
  );
  return (
    <Popover placement="bottom" content={filterContent} title={FilterSummary} trigger="click">
      <div className="budget-filter-btn-container">
        <label className="filter-label">Budget</label>
        <Button className="budget-filter-btn">
          {formattedAmount(value[0])} - {formattedAmount(value[1])}
        </Button>
      </div>
    </Popover>
  );
};
export default BudgetFilter;
