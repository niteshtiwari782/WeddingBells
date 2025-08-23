import React, { useState } from 'react';

import { FaSearchLocation } from 'react-icons/fa';
import { CgPushLeft } from 'react-icons/cg';
import MyMehfilLogo from '../../assets/mymehfil_logo.png';
import MyMehfilText from '../../assets/mymehfil_text.png';
import { IoMenu } from 'react-icons/io5';

import './Header.css';
import { Input, Popover } from 'antd';

const Header = () => {
  const [sidenavWidth, setSidenavWidth] = useState('0px');

  const handleSideBarOpen = () => {
    setSidenavWidth(prevState => '250px');
  };

  const handleSideBarClose = () => {
    setSidenavWidth(prevState => '0px');
  };
  return (
    <header className="header">
      <div
        className="sidenav"
        style={{
          width: sidenavWidth,
        }}
      >
        <div className="sidenav-heading">
          <h3>Menu</h3>
          <CgPushLeft size={20} onClick={handleSideBarClose} />
        </div>
        <div className="sidenav-content">
          <div className="sidenav-item">Profile</div>
          <div className="sidenav-item">Services</div>
          <div className="sidenav-item">About Us</div>
        </div>
      </div>
      <div className="header-left" onClick={handleSideBarOpen}>
        <IoMenu size={30} />
      </div>

      <div className="header-center">
        <img src={MyMehfilLogo} className="primary_logo" />
        <img src={MyMehfilText} className="primary_text" />
      </div>

      <div className="header-right">
        <input type="text" className="search-input" placeholder="Search Properties" />
        <Popover className="search-icon" placement="bottom" content={SearchBox} trigger="click">
          <FaSearchLocation size={25} className="search-icon" />
        </Popover>
      </div>
    </header>
  );
};

const SearchBox = () => {
  return (
    <div>
      <Input.Search placeholder="Filled" variant="filled" />
    </div>
  );
};

export default Header;
