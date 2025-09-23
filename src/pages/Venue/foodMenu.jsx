import React, { useEffect, useState } from 'react';
import { formattedAmount } from '../../utility';
import { Carousel, Divider, Modal } from 'antd';
import { FaStar } from 'react-icons/fa';
import './styles.css';
import { GoDotFill } from 'react-icons/go';

export default function FoodMenu({ foodMenuList, venueID }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { foodOption, menuImg, rating } = foodMenuList;

  const handleModalOpen = () => {
    setIsModalOpen(prevState => true);
  };

  const handleModalClose = () => {
    setIsModalOpen(prevState => false);
  };
  return (
    <div>
      <div className="food-menu-header">
        <div className="food-menu-rating">
          <div className="food-rating-text">Food Rating: </div>
          <div>
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar color="#ec407a" size={12} />
            ))}
          </div>
        </div>
        <a onClick={handleModalOpen}>View Menu</a>
      </div>
      <div className="food-menu-list-container">
        {foodOption.map(menu => (
          <RenderFoodMenuCard menu={menu} />
        ))}
      </div>
      <Modal
        title="Menu"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        footer={null}
        onCancel={handleModalClose}
      >
        <RenderCarousel images={menuImg} />
      </Modal>
    </div>
  );
}

function RenderFoodMenuCard({ menu }) {
  const { name, price, options, foodRating } = menu;

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
          <div className="food-menu-name">{name}</div>
        </div>
        <div className="food-menu-price">{formattedAmount(price)}</div>
      </div>
      <Divider size="small" />
      <div className="food-menu-item-container">
        {options?.map((item, i) => (
          <div key={i} className="food-menu-item">
            <GoDotFill /> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderCarousel({ images }) {
  return (
    <div>
      <Carousel arrows={true}>
        {images?.map((o, i) => (
          <img key={i} src={o} />
        ))}
      </Carousel>
    </div>
  );
}
