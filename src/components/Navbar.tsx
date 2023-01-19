import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2>CROSSFIT XELA</h2>
      <ul className="links">
        <li>Hamburger</li>
      </ul>
    </nav>
  );
};

export default Navbar;
