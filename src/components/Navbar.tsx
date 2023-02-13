import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    showMobileMenu();
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

      <div className={mobileMenu ? 'nav-menu activated' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={handleClick}>
            {/* <AiOutlineClose className="x-icon" /> */}
            <p>X</p>
          </li>
          <p>list of items</p>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
