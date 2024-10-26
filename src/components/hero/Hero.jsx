import { Link } from 'react-router-dom';
import Button from '../shared/button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        {/* Top underlines */}
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>
        
        <img
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729954092/Screenshot_2024-10-26_at_3.47.42_PM_gnortl.png"
          alt="Cooking"
        />
        
        {/* Bottom underlines */}
        <div className="bottom-third-underline"></div>
      </div>

      <div className="hero-text">
        <h1>Welcome to Your Culinary Adventure<br /> 
         Cook with Passion,<br /> Enjoy Every Bite</h1>
         <Link to="/menu">
          <Button 
            text="Place your Order now" 
            width="200px" 
            height="50px" 
            className="hero-button"
          />
        </Link>
      </div>

    </div>
  );
};

export default Hero;
