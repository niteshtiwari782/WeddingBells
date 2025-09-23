import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { DecorMenu } from './PackageOption';
import { fetchFoodDetails } from '../../service/venueDetailService';
import { FoodOptionMenu } from './FoodOption';

export default function AreaInfoTab({ packageDetail, totalAmount }) {
  const [decorList, setDecorList] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [foodOptionList, setFoodOptionList] = useState([]);
  const [selectedFoodPlate, setSelectedFoodPlate] = useState(0);
  const [decorPack, setDecorPack] = useState(0);
  const [musicPack, setMusicPack] = useState(0);

  useEffect(() => {
    setDecorList(prevState => packageDetail?.decor);
    setMusicList(prevState => packageDetail?.music);
    setDecorPack(prevState => packageDetail?.decor[0]);
    setMusicPack(prevState => packageDetail?.music[0]);
    if (packageDetail?.venue_id) {
      fetchFoodDetails(packageDetail?.venue_id).then(res => {
        const { foodOption } = res[0];
        setFoodOptionList(prevState => foodOption);
      });
    }
  }, [packageDetail]);

  useEffect(() => {
    totalAmount(selectedFoodPlate, decorPack, musicPack);
  }, [selectedFoodPlate]);

  useEffect(() => {
    totalAmount(selectedFoodPlate, decorPack, musicPack);
  }, [decorPack]);

  useEffect(() => {
    totalAmount(selectedFoodPlate, decorPack, musicPack);
  }, [musicPack]);

  const items = [
    {
      key: '1',
      label: 'Food Packages',
      children: (
        <FoodOptionMenu foodOptionList={foodOptionList} setPackage={setSelectedFoodPlate} />
      ),
    },
    {
      key: '2',
      label: 'Decor',
      children: <DecorMenu DecorMenu={decorList} setPackage={setDecorPack} />,
    },
    {
      key: '3',
      label: 'Music',
      children: <DecorMenu DecorMenu={musicList} setPackage={setMusicPack} />,
    },
  ];

  const [currentTab, setCurrentTab] = useState('1');

  const onChange = key => {};
  return <Tabs defaultActiveKey={currentTab} items={items} onChange={onChange} />;
}
