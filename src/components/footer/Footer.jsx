// src/components/footer/Footer.js

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© 2024 FoodDelivery</p>
    <div className="social-icons">
      <AiFillFacebook />
      <AiFillTwitterCircle />
      <AiFillInstagram />
    </div>
  </footer>
);

export default Footer;
