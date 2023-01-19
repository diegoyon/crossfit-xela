import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleClick = (event: React.BaseSyntheticEvent) => {
    event.currentTarget.classList.toggle('open');
  };

  return (
    <nav>
      <h2>CROSSFIT XELA</h2>
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
