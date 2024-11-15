import { Link } from 'react-router-dom';
import Button from '../shared/button/Button';
import './Hero.css';

const Hero = () => {
  const heroImageUrl = "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729954092/Screenshot_2024-10-26_at_3.47.42_PM_gnortl.png";
  
  return (
    <div className="hero">
      <div className="hero-image">
        {/* Top underlines */}
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>
        
        <img
          src={heroImageUrl.replace('/upload/', '/upload/e_blur:2000,w_10/')} // low-res placeholder
          srcSet={`
            ${heroImageUrl.replace('/upload/', '/upload/f_webp,c_scale,w_400/')} 400w,
            ${heroImageUrl.replace('/upload/', '/upload/f_webp,c_scale,w_800/')} 800w,
            ${heroImageUrl.replace('/upload/', '/upload/f_webp,c_scale,w_1600/')} 1600w
          `}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 75vw, 50vw"
          alt="Cooking"
          loading="lazy"
          style={{ filter: 'blur(10px)', transition: 'filter 0.5s ease-in-out' }}
          onLoad={(e) => e.currentTarget.style.filter = 'none'}
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