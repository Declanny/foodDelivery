// src/components/home/Home.js
import Hero from '../hero/Hero';
import './Home.css';
import { Link } from 'react-router-dom';
import MenuLink from '../menu/linkTomenuOnHome/menuLink';
import ChefLink from '../chefs/chefLink/ChefLink';

const Home = () => {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleLike = () => {
    alert("Item liked!");
  };

  return ( 
    <div className="home">
      <Hero />
      <div className="hot-features">
        <h2>Hot Features</h2>
        <MenuLink handleAddToCart={handleAddToCart} handleLike={handleLike} />
        <Link to="/menu" className="view-more">View More</Link>
      </div>
      <div className="chef-features">
        <h2>Featured Chefs</h2>
        <ChefLink />
        <Link to="/chefs" className="view-more">View More Chefs</Link>
      </div>
    </div>
  );
};

export default Home;
