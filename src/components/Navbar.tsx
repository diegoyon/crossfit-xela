import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const handleClick = (event: React.BaseSyntheticEvent) => {
    event.currentTarget.classList.toggle('open');
  };

  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <ul className="links">
        <div id="hamburger-icon" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
