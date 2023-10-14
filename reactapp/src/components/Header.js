import React from 'react';
import './Header.css';

import Logo from './Logo';
import Title from './Title';
import Navbar from './Navbar';
import Search from './Search';



function Header() {
  return (
    <div className="header">
      <Logo />
      <Title />
      <Navbar />
      <Search />
    </div>
  );
}

export default Header;
