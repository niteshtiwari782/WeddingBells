import React from 'react';

import { FaRegUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <IoMenu size={30} />
        <h1 className="site-title">FindMYVenu</h1>
      </div>

      <div className="header-center"></div>

      <div className="header-right">
        <input type="text" className="search-input" placeholder="Search venues..." />
        <FaRegUser size={20} />
      </div>
    </header>
  );
};

export default Header;
