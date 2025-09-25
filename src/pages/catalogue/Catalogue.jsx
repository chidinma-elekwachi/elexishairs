import React from 'react'
import firstwig from '../../assets/16inchfrontalJerrycurl.jpg'
import secondwig from '../../assets/18inchpixiesddwig.jpg'
import thirdwig from '../../assets/2x6DDdeepwave.jpg'
import './catalogue.css'
import { useNavigate } from 'react-router-dom';

const bestSellers = [
  {
    id: 1,
    image: firstwig,
    name: '16 inch frontal Jerry curl',
    price: 180000,
    description: 'This is a beautiful 16 inch frontal Jerry curl wig that gives you a natural look and feel. Perfect for any occasion.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'natural black',
  },
  {
    id: 2,
    image: secondwig,
    name: '18 inch pixie sdd wig',
    price: 195000,
    description: 'This is a stunning 18 inch pixie sdd wig that offers a chic and stylish appearance. Ideal for everyday wear.',
    hairtype: 'human hair',
    length: '18 inches',
    color: 'natural black',
  },
  {
    id: 3,
    image: thirdwig,
    name: '2x6 DD deep wave',
    price: 250000,
    description: 'This is a luxurious 2x6 DD deep wave wig that provides a voluminous and glamorous look. Great for special events.',
    hairtype: 'human hair',
    length: '20 inches',
    color: 'natural black',
  }

] 

const onClick = () => {
  console.log("Added to cart");
  alert("Item added to cart");
}


function Catalogue() {
  return (
    <div className='catalogue-container'>
      <h1>Best sellers</h1>

      <div className='products'>
        {bestSellers.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} className='product-image' />
            <h2 className='product-name'>{product.name}</h2>  
            <p className='product-price'>₦{product.price.toLocaleString()}</p>
            <p className='product-description'>{product.description}</p>
            
            <button className='add-to-cart-button' onClick={onClick}>Add to Cart</button>

            {/* <ul className='product-details'>  
              <li><strong>Hair Type:</strong> {product.hairtype}</li>
              <li><strong>Length:</strong> {product.length}</li>
              <li><strong>Color:</strong> {product.color}</li>  
            </ul> */}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Catalogue