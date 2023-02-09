import React from 'react';
import cfxela from '../../images/cfxela.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={cfxela} alt="logo blanco" />

      <p>2023 CrossFit Xela. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
