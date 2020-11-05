import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className='app-logo' />
    </div>
  );
};

export default Header;
