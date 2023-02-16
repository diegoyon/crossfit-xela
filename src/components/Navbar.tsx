import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';
import NavbarContent from './NavbarContent';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleHomeClick = () => {
    setMobileMenu(false);
  };

  const handleClick = () => {
    showMobileMenu();
  };

  return (
    <nav>
      <Link to="/" onClick={handleHomeClick}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul className="links">
        <div
          className={mobileMenu ? 'hamburger-icon open' : 'hamburger-icon'}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ul>

      <div className={mobileMenu ? 'nav-menu activated' : 'nav-menu'}>
        <ul className="nav-menu-items">
          {NavbarContent.map((item, index) => {
            return (
              <li key={index} className={item.title} onClick={handleClick}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://wa.link/crossfitxela"
              target="_blank"
              rel="noreferrer"
            >
              <button>CLASE DE PRUEBA</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
