import React, { useState } from 'react';
import { Tabs } from 'antd';
import { FaRegDotCircle } from 'react-icons/fa';

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

function FacilitiesList({ facilities }) {
  return (
    <div className="areadetail-content-left">
      <div className="areadetail-facilities">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {facilities?.map((item, i) => (
            <div key={i} className="facilities-item">
              <FaRegDotCircle /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
