import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from 'react-icons/ai';
import { SiCodechef } from "react-icons/si";
import './Header.css';
import Button from '../shared/button/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <CgMenuLeft />}
      </div>
      <Link to="/" className="logo">FoodDelivery</Link>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/chefs" className="nav-link hire-chef-link"><SiCodechef /> Hire a Chef</Link>
        <Link to="/login" className="nav-link login-link">Login</Link>
        <Link to="/signup" className="nav-link">
        <Button text="Sign Up" />
       </Link>
      </nav>
    </header>
  );
};

export default Header;
