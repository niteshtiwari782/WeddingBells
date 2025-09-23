import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'About this Package',
    children: <p>{text}</p>,
  },
];
const AboutPackage = () => <Collapse accordion={true} defaultActiveKey={[]} items={items} />;
export default AboutPackage;
