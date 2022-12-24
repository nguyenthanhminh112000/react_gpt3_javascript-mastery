import React from 'react';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './index.css';
console.log('src/components/Navbar/index.tsx outside');

const index = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo as any} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default index;
