import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/elexishairlogo.png';
import './myNav.css';

function MyNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Elexishairs Logo" className="logo" />
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active' : ''}
            onClick={closeMenu}
          >
            Catalogue
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? 'active' : ''}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className={isActive('/offers') ? 'active' : ''}
            onClick={closeMenu}
          >
            Offers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={isActive('/cart') ? 'active' : ''}
            onClick={closeMenu}
          >
            <FaShoppingCart className="cart-icon" />
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={isActive('/login') ? 'active' : ''}
            onClick={closeMenu}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className={isActive('/register') ? 'active' : ''}
            onClick={closeMenu}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNav;