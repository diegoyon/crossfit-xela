import React from 'react';
import cfxela from '../../images/cfxela.png';
import './Footer.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={cfxela} alt="logo blanco" />
      <div className="social">
        <BsFacebook className="icon" size={25} />
        <BsInstagram className="icon" size={25} />
      </div>
      <p>2023 CrossFit Xela. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
