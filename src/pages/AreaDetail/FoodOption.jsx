import { Checkbox, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { formattedAmount } from '../../utility';

export const FoodOptionMenu = ({ foodOptionList, setPackage }) => {
  const [selectedBox, setSelectedBox] = useState(0);

  const onChange = (e, idx) => {
    setPackage(prevState => foodOptionList[idx]);
    setSelectedBox(prevState => idx);
  };

  useEffect(() => {
    setPackage(prevState => foodOptionList[selectedBox]);
  }, [foodOptionList]);

  return (
    <div className="option-menu">
      {foodOptionList.map((item, idx) => {
        if (idx == selectedBox) {
          return (
            <div className="option-menu-item menu-item-selected">
              <div>
                <Checkbox checked={idx === selectedBox} onChange={e => onChange(e, idx)}>
                  {item.name}
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
              <Checkbox value={idx === selectedBox} onChange={e => onChange(e, idx)}>
                {item.name}
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
