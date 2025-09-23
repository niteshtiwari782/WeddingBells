import { Badge, Button, Carousel, Image, Modal, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.css';
import {
  fetchAreaDetails,
  fetchPackageDetail,
  fetchVenueMetaData,
} from '../../service/venueDetailService';
import { FaStar, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { formattedAmount, shortenString } from '../../utility';
import AreaInfoTab from './AreaInfoTab';
import AboutPackage from './AboutPackage';
import LoadingScreen from '../../Component/Loadingscreen';
import { ImInfo } from 'react-icons/im';
import AmountDisplay from './AmountDisplay';

export default function AreaDetail() {
  const [areaDetail, setAreaDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [venueMeta, setVenueMeta] = useState({
    rating: 0,
    reviewsCount: 0,
    location: '',
    badgeValue: '',
    speciality: [],
  });
  const [modalData, setModalData] = useState({
    foodPrice: 0,
    decorPrice: 0,
    musicPrice: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const [searchParams] = useSearchParams();
  const parent_id = searchParams.get('pid');
  const self_id = searchParams.get('sid');

  useEffect(() => {
    fetchPackageDetail(self_id).then(res => {
      setLoading(prevState => false);
      setAreaDetail(prevState => res[0]);
      setTotalPrice(prevState => res[0].startPrice);
    });
    fetchVenueMetaData(parent_id).then(res => {
      const newVenueMeta = {
        rating: res?.rating,
        reviewsCount: res?.reviewsCount,
        location: res?.location,
        badgeValue: res?.badgeValue,
        speciality: res?.speciality,
      };
      setVenueMeta(prevState => newVenueMeta);
    });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const totalAmount = (foodPrice, decorPrice, musicPrice) => {
    const newModalData = {
      foodPrice: foodPrice,
      decorPrice: decorPrice,
      musicPrice: musicPrice,
    };
    setModalData(prevState => newModalData);
    if (foodPrice?.price != null && decorPrice?.price != null && musicPrice?.price != null) {
      const newAmount = 100 * foodPrice?.price + decorPrice?.price + musicPrice?.price;
      setTotalPrice(prevState => newAmount);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <div className="area-listiing-header">
        <div className="area-listing-header-title">{areaDetail.name}</div>
        <div>
          <Button style={{ background: '#ec407a', color: 'white', fontWeight: 'bolder' }}>
            Book an Appointment
          </Button>
        </div>
      </div>
      <div style={{ padding: '2px' }}>
        <div className="area-info-container">
          <div className="area-detial-images-container">
            <div className="area-detail-main-images">
              <RenderCarousel images={areaDetail?.img} />
            </div>
            <div className="area-detail-side-images">
              <div className="side-image">
                <Image src={areaDetail?.img ? areaDetail?.img[0] : null} />
              </div>
              <div className="side-image">
                <Image src={areaDetail?.img ? areaDetail?.img[0] : null} />
              </div>
              <div className="side-image show-more-tile">
                <Image src={areaDetail?.img ? areaDetail?.img[0] : null} className="blur-bg" />
                <div className="overlay-text">{areaDetail?.img?.length} more images</div>
              </div>
            </div>
          </div>

          <div className="areadetail-content-container">
            <div className="areadetail-content-left">
              <div className="areadetail-name">{areaDetail.name}</div>
              <div className="areadetail-sub-title">
                <div>
                  {Array.from({ length: venueMeta.rating }).map((_, index) => (
                    <FaStar color="#ec407a" size={12} />
                  ))}
                </div>
                {venueMeta.reviewsCount} Reviews
              </div>
              <div className="areadetail-sub-title">
                Floating Capacity: {areaDetail.capacity} pax
              </div>
              <div className="areadetail-sub-title">Total Area: {areaDetail.areaSize} sqft</div>
              <div>
                {venueMeta.speciality.map(ob => (
                  <Tag color="red">{ob}</Tag>
                ))}
              </div>
            </div>
            <div className="areadetail-content-right">
              <div className="areadetail-badge">
                <div>
                  <Tag color="red">{venueMeta.badgeValue}</Tag>
                </div>
              </div>
              <div className="areadetail-sub-title">
                <a
                  style={{
                    color: '#ec407a',
                  }}
                >
                  <FaMapMarkerAlt /> {venueMeta.location}
                </a>
              </div>
              <div className="areadetail-price">
                <span className="areadetail-price-sub">Starts From</span>
                <span className="areadetail-price-primary">
                  <AmountDisplay value={totalPrice || areaDetail.startPrice} />
                  <FaInfoCircle size={15} color={'gray'} onClick={showModal} />
                </span>
                <span className="areadetail-price-sub">Per 100 guests</span>
              </div>
            </div>
          </div>
        </div>
        <div className="area-info-tab-container">
          <AreaInfoTab packageDetail={areaDetail} totalAmount={totalAmount} />
        </div>
        <div>
          <AboutPackage />
        </div>
        <Modal
          title="Price Detail"
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="final-price-modal">
            <RenderModalTable data={modalData} />
          </div>
          <div className="final-price-heading">
            <span>Approx. Cost: </span>
            <span>
              <AmountDisplay value={totalPrice} />
            </span>
          </div>
        </Modal>
      </div>
    </div>
  );
}

function RenderCarousel({ images }) {
  return (
    <div className="areadetail-carousel-container">
      <Carousel autoplay arrows={true}>
        {images?.map((o, i) => (
          <img key={i} src={o} className="areadetail-image" />
        ))}
      </Carousel>
    </div>
  );
}

function RenderModalTable({ data }) {
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
      render: text => <span className="final-price-modal">{text}</span>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: text => <span className="final-price-modal">{text}</span>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: text => <span className="final-price-modal">{text}</span>,
    },
  ];

  useEffect(() => {
    const newData = [];
    newData.push({
      key: '1',
      item: data.foodPrice.name,
      category: 'Food Package',
      price: formattedAmount(data.foodPrice.price),
    });
    newData.push({
      key: '2',
      item: data.decorPrice.title,
      category: 'Decoration',
      price: formattedAmount(data.decorPrice.price),
    });
    newData.push({
      key: '3',
      item: data.musicPrice.title,
      category: 'Music',
      price: formattedAmount(data.musicPrice.price),
    });
    setTableData(prevState => newData);
  }, [data]);

  // const data = [
  //   {
  //     key: '1',
  //     item: 'Silver',
  //     category: 'Food Package',
  //     price: formattedAmount(150000),
  //   },
  //   {
  //     key: '2',
  //     item: 'Intermediate',
  //     category: 'Decoration',
  //     price: formattedAmount(120000),
  //   },
  //   {
  //     key: '3',
  //     item: 'DJ',
  //     category: 'Music',
  //     price: formattedAmount(150000),
  //   },
  // ];
  return <Table columns={columns} dataSource={tableData} pagination={false} />;
}
