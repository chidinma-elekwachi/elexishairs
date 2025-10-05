import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import { BESTSSELLERS } from '../products';

const PRODUCTS = BESTSSELLERS;

function Catalogue() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceSort, setPriceSort] = useState('');

  // 🔍 Filter + Sort Logic
  const filteredProducts = PRODUCTS
    .filter((product) => {
      // Search filter
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Category filter
      if (selectedCategory === 'all') return matchesSearch;
      if (selectedCategory === 'curly')
        return matchesSearch && product.image.includes('/curly/');
      if (selectedCategory === 'straight')
        return matchesSearch && product.image.includes('/straight/');
      if (selectedCategory === 'bouncy')
        return matchesSearch && product.image.includes('/bouncy/');
      return matchesSearch;
    })
    .sort((a, b) => {
      if (priceSort === 'lowest') return a.price - b.price;
      if (priceSort === 'highest') return b.price - a.price;
      return 0;
    });

  return (
    <div className="catalogue-container">
      {/* 💫 Moving Banner */}
      <div className="free-banner">
        <p className="scrolling-text">
          🚚 Free delivery on every first order in Nigeria!
        </p>
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
        <h1>
          Welcome to <span className="brand-name">Elexis Hairs</span>
        </h1>
        <p className="catalogue-p">
          From virgin human hair to luxury wigs, we have everything you need to
          achieve your dream look. Discover your next favorite hair today!
        </p>
        <button className="shop-now-btn">
          <a href="#filters">Shop Now</a>
        </button>
      </div>

      {/* 💇🏽 Category + Sort Controls */}
      <div className="filters" id="filters">
        <select
          className="filter-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="curly">Curly</option>
          <option value="straight">Straight</option>
          <option value="bouncy">Bouncy</option>
        </select>

        <select
          className="filter-dropdown"
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </div>

      {/* 🛍 Products */}
      <div className="products" id="prod">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p className="no-results">No products match your filters.</p>
        )}
      </div>

      {/* 🛒 Cart Button */}
      <button className="cartButt" onClick={() => navigate('/cart')}>
        Check Cart
      </button>
    </div>
  );
}

export default Catalogue;
