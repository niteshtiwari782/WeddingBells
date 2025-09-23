import { Avatar, List } from 'antd';

import './styles.css';

const ReviewData = ({ reviewsData }) => {
  return (
    <>
      <List
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={reviewsData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={
                <div>
                  <div className="review-author">{item.author}</div>
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
