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
        <p className='catalogue-intro'>Discover our exclusive collection of premium hair products, designed to enhance your natural beauty and boost your confidence. From luxurious extensions to nourishing care essentials, we have everything you need to achieve the perfect look. Explore our catalogue and find your new favorite today!</p>
      </div>

      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      
      <button className='cartButt' onClick={() => navigate("/cart")}>Check Cart</button>
      
    </div>
  )
}

export default Catalogue
