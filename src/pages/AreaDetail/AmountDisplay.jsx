import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { formattedAmount } from '../../utility';
const formatter = value => {
  return (
    <CountUp
      className="package-price-color"
      end={value}
      duration={1}
      separator=","
      formattingFn={value => formattedAmount(value)}
    />
  );
};
const AmountDisplay = ({ value }) => (
  <Statistic value={value} precision={2} formatter={formatter} />
);
export default AmountDisplay;
