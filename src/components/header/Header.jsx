import React from 'react';
import './header.css';
import logo from '../../assets/chiefs-logo.png';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <img src={logo} className='header__left-img' alt='chiefs-logo' />
        <h1>Kansas City Chiefs</h1>
        <img src={logo} className='header__right-img' alt='chiefs-logo' />
      </div>
    </header>
  );
};

export default Header;
