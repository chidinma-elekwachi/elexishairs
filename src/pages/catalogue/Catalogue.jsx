import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import { BESTSSELLERS } from '../products';

const PRODUCTS = BESTSSELLERS;

function Catalogue() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalogue-container">
      {/* 🩷 Banner Section */}
      <div className="free-banner">
        <p>🚚 Free delivery on every first order in Nigeria!</p>
      </div>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for wigs, bundles, closures..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 💖 Hero Section */}
      <div className="cataIntro">
        <h1>Welcome to <span className="brand-name">Elexis Hairs</span></h1>
        <p className="catalogue-p">
          From virgin human hair to luxury wigs, we have everything you need to achieve your dream look.  
          Discover your next favorite hair today!
        </p>
        <button className="shop-now-btn">
          <a href="#prod">Shop Now</a>
        </button>
      </div>

      {/* 🛍 Product List */}
      <div className="products" id="prod">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p className="no-results">No products match your search.</p>
        )}
      </div>

      {/* 🛒 Cart Button */}
      <button className="cartButt" onClick={() => navigate("/cart")}>
        Check Cart
      </button>
    </div>
  );
}

export default Catalogue;
