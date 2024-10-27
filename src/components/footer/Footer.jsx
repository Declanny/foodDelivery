// src/components/footer/Footer.js

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
// import { FaHome, FaInfoCircle } from 'react-icons/fa';
// import { PiBowlFoodLight } from "react-icons/pi";
// import { SiCodechef } from "react-icons/si";
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* <div className="footer-icon">
        <FaHome />
        <p>Home</p>
      </div>
      <div className="footer-icon">
        <SiCodechef />
        <p>Chef</p>
      </div>
      <div className="footer-icon">
        <PiBowlFoodLight />
        <p>Menu</p>
      </div>
      <div className="footer-icon">
        <FaInfoCircle />
        <p>About</p>
      </div> */}
    </div>
    <div className="social-icons">
      <AiFillFacebook />
      <AiFillTwitterCircle />
      <AiFillInstagram />
    </div>
    <p>© 2024 FoodDelivery</p>
  </footer>
);

export default Footer;
