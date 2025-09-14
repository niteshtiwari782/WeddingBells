import React, { useState } from 'react';
import { Avatar, List } from 'antd';
import reviewData from '../../data/reviewData';

import './styles.css';

const ReviewData = () => {
  return (
    <>
      <List
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={reviewData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={
                <div>
                  <div className="review-author">{item.name}</div>
                  <div className="review-date">{item.date}</div>
                </div>
              }
              description={item.comment}
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default ReviewData;
