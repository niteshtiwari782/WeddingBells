import { Checkbox, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { formattedAmount } from '../../utility';

export const DecorMenu = ({ DecorMenu, setPackage }) => {
  const [selectedBox, setSelectedBox] = useState(0);

  const onChange = (e, idx) => {
    setPackage(prevState => DecorMenu[idx]);
    setSelectedBox(prevState => idx);
  };

  return (
    <div className="option-menu">
      {DecorMenu.map((item, idx) => {
        if (idx == selectedBox) {
          return (
            <div className="option-menu-item menu-item-selected">
              <div>
                <Checkbox checked={selectedBox === idx} onChange={e => onChange(e, idx)}>
                  {item.title}
                </Checkbox>
              </div>
              <Divider size="small" />
              <div className="menu-sub-title">
                <div>Total Price :</div>
                <div className="menu-sub-price">{formattedAmount(item.price)}</div>
              </div>
            </div>
          );
        }
        return (
          <div className="option-menu-item">
            <div>
              <Checkbox checked={selectedBox === idx} onChange={e => onChange(e, idx)}>
                {item.title}
              </Checkbox>
            </div>
            <Divider size="small" />
            <div className="menu-sub-title">
              <div>Total Price :</div>
              <div className="menu-sub-price">{formattedAmount(item.price)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
