import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/elexishairlogo.png';
import './myNav.css';
import { ShopContext } from "../../context/shop-context";
import { BESTSSELLERS } from "../../pages/products";
import { useContext } from 'react';
const PRODUCTS = BESTSSELLERS;

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

  const { cartItems} = useContext(ShopContext);

  const getTotalCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const totalCount = getTotalCartCount();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Elexishairs Logo" className="logo" />
      </div>
      <div className='nav-small'>
        <li className='cart-icon-wrapper'>
            <Link
              to="/cart"
              className={isActive('/cart') ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaShoppingCart className="cart-icon" />
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount > 99 ? "99+" : totalCount}</span>
              )}
            </Link>
          </li>
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      
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
              to="/cart"
              className={isActive('/cart') ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaShoppingCart className="cart-icon1" />
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