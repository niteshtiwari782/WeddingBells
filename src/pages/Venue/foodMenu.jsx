import React from 'react';
import { formattedAmount } from '../../utility';
import { Divider } from 'antd';
import { FaRegDotCircle, FaStar } from 'react-icons/fa';

import nonveg from '../../assets/showcaseImages/nonveg.png';
import veg from '../../assets/showcaseImages/veg.png';

import './styles.css';

export default function FoodMenu({ foodMenuList }) {
  return (
    <div className="food-menu-list-container">
      {foodMenuList.map(menu => (
        <RenderFoodMenuCard menu={menu} />
      ))}
    </div>
  );
}

function RenderFoodMenuCard({ menu }) {
  const { title, price, options, foodRating } = menu;
  return (
    <div className="area-card-container">
      <div className="food-menu-title">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <div className="food-menu-name">{title}</div>
        </div>
        <div className="food-menu-price">{formattedAmount(price)}</div>
      </div>
      <Divider size="small" />
      <div className="food-menu-item-container">
        {options?.map((item, i) => (
          <div key={i} className="food-menu-item">
            <FaRegDotCircle /> {item}
          </div>
        ))}
      </div>
      <Divider size="small" />
      <div className="food-menu-footer">
        <div className="food-menu-rating">
          <div className="food-rating-text">Food Rating: </div>
          <div>
            {Array.from({ length: foodRating }).map((_, index) => (
              <FaStar color="#ec407a" size={12} />
            ))}
          </div>
        </div>
        <a>Download Menu</a>
      </div>
    </div>
  );
}
