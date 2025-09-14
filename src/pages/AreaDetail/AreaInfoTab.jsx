import React, { useState } from 'react';
import { Tabs } from 'antd';
import { FaRegDotCircle } from 'react-icons/fa';
import FacilitiesList from '../Venue/facilitesList';

export default function AreaInfoTab({ facilities }) {
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Facilities',
      children: <FacilitiesList facilities={facilities} />,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const [currentTab, setCurrentTab] = useState('1');

  const onChange = key => {
    console.log(key);
  };
  return <Tabs defaultActiveKey={currentTab} items={items} onChange={onChange} />;
}
