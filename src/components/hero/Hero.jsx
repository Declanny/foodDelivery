// src/components/hero/Hero.js
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hero page welcome <br /> Cooking for <br /> just for it</h1>
      </div>
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1729869497/Screenshot_2024-10-25_at_4.17.33_PM_bdomgd.png"
          alt="Cooking"
        />
      </div>
    </div>
  );
};

export default Hero;
