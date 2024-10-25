// src/components/header/Header.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <Link to="/" className="logo">FoodDelivery</Link>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link"><AiOutlineHome /> Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/chefs" className="nav-link">Hire a Chef</Link>
        <Link to="/login" className="nav-link login-link">Login</Link>
        <Link to="/signup" className="nav-link signup-link">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
