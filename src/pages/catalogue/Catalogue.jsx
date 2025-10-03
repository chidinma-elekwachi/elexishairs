import React from 'react'
import { useNavigate } from 'react-router-dom';
import Product from './Product'
import { BESTSSELLERS } from '../products'

const PRODUCTS = BESTSSELLERS;

function Catalogue() {

    const navigate = useNavigate();
  return (
    <div className='catalogue-container'>
      <div className='cataIntro'>
        <h1>Welcome to Elexis Hairs</h1>
        <p className='catalogue-intro'>From virgin human hair to luxury hairs, we have everything you need to achieve the perfect look. Explore our catalogue and find your new favorite today!</p>
        <button><a href='#prod'>Check Catalogue</a></button>
      </div>

      <div className='products' id='prod'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      
      <button className='cartButt' onClick={() => navigate("/cart")}>Check Cart</button>
      
    </div>
  )
}

export default Catalogue
