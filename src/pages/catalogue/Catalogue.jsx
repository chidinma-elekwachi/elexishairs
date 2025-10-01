import React from 'react'
import './Catalogue.css'

import {BESTSSELLERS} from '../products'

const bestSellers = BESTSSELLERS;


const getDiscountPercent = (oldPrice, price) => {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

const onClick = () => {
  console.log("Added to cart");
  alert("Item added to cart");
}

function Catalogue() {
  return (
    <div className='catalogue-container'>
      <h1>Welcome to Elexis Hairs</h1>

      <div className='products'>
        {bestSellers.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} className='product-image' />
            

            <h2 className='product-name'>{product.name}</h2>  
            <div className='product-prices'>
              <span className='product-price'>₦{product.price.toLocaleString()}</span>
              <span className='product-old-price' style={{textDecoration: 'line-through', color: '#888', marginLeft: '10px'}}>
                ₦{product.oldPrice.toLocaleString()}
              </span>
              <span className='product-discount' style={{color: 'red', marginLeft: '10px'}}>
                -{getDiscountPercent(product.oldPrice, product.price)}%
              </span>
            </div>
            <p className='product-description'>{product.description}</p>
            <button className='add-to-cart-button' onClick={onClick}>Add to Cart</button>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue