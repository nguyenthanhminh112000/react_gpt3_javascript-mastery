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
        <div className="gpt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default index;
