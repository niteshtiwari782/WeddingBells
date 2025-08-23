import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Button, Popover } from 'antd';

import './styles.css';
import { FaRegUser } from 'react-icons/fa';

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1000);
  const onChange = newValue => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={500}
          max={20000}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={500}
          max={100000}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const GuestFilter = () => {
  const [value, setValue] = useState([100, 300]);

  const filterContent = () => (
    <div className="budget-filter-container">
      <Slider
        range={{ editable: true, minCount: 1, maxCount: 5 }}
        value={value}
        onChange={setValue}
        min={50}
        max={2000}
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
