import React from 'react'
import firstwig from '../../assets/16inchfrontalJerrycurl.jpg'
import secondwig from '../../assets/18inchpixiesddwig.jpg'
import thirdwig from '../../assets/2x6DDdeepwave.jpg'
import './Catalogue.css'
import forthwig from '../../assets/20inchpixiebundle.jpg'
import fifthwig from '../../assets/4x4brownbobwig.jpg'
import sixthwig from '../../assets/20inchpixiebundleand4x4.jpg'
import seventhwig from '../../assets/4x4jerrycurlwig.jpg'
import eighthwig from '../../assets/5x5orangebounce.jpg'
import ninthwig from '../../assets/5x5pianobounce.jpg'
import tenthwig from '../../assets/bodywave.jpg'
import eleventhwig from '../../assets/ddblondewig.jpg'
import twelvethwig from '../../assets/ddbrownrootblonde.jpg'

const bestSellers = [
  {
    id: 1,
    image: firstwig,
    name: '16 inch Jerry curl',
    price: 100000,
    oldPrice: 150000,
    description: 'This is a beautiful 16 inch frontal Jerry curl wig that gives you a natural look and feel. Perfect for any occasion.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'natural black',
  },
  {
    id: 2,
    image: secondwig,
    name: '18 inch pixie sdd wig',
    price: 165000,
    oldPrice: 200000,
    description: 'This is a stunning 18 inch pixie sdd wig that offers a chic and stylish appearance. Ideal for everyday wear.',
    hairtype: 'human hair',
    length: '18 inches',
    color: 'natural black',
  },
  {
    id: 3,
    image: thirdwig,
    name: '2x6 DD deep wave',
    price: 175000,
    oldPrice: 250000,
    description: 'This is a luxurious 2x6 DD deep wave wig that provides a voluminous and glamorous look. Great for special events.',
    hairtype: 'human hair',
    length: '20 inches',
    color: 'natural black',
  }
  ,{
    id: 4,
    image: forthwig,
    name: '20 inch pixie bundle',
    price: 85000,
    oldPrice: 100000,
    description: 'This is a trendy 20 inch pixie bundle wig that delivers a bold and fashionable style. Perfect for making a statement.',
    hairtype: 'human hair',
    length: '20 inches',
    color: 'natural black',
  },{
    id: 5,
    image: fifthwig,
    name: '4x4 brown bob wig',
    price: 70000,
    oldPrice: 80000,
    description: 'This is a chic 4x4 brown bob wig that offers a sleek and modern look. Suitable for both casual and formal occasions.',
    hairtype: 'human hair', 
    length: '12 inches',
    color: 'brown',
  },{
    id: 6,
    image: sixthwig, 
    name: '20 inch pixie bundle',
    price: 250000,
    oldPrice: 280000,
    description: 'This is a 20 inch pixie bundle and 4x4 wig that provides a dynamic and stylish appearance. Great for any event.',
    hairtype: 'human hair',
    length: '20 inches',
    color: 'natural black',
  },{
    id: 7,
    image: seventhwig,
    name: '4x4 jerry curl wig',
    price: 86000,
    oldPrice: 150000,
    description: 'This is a beautiful 4x4 jerry curl wig that gives you a natural look and feel. Perfect for any occasion.',
    hairtype: 'human hair',
    length: '14 inches',
    color: 'natural black',
  },{
    id: 8,
    image: eighthwig,
    name: '5x5 orange bounce',
    price: 220000,
    oldPrice: 250000,
    description: 'This is a vibrant 5x5 orange bounce wig that offers a bold and lively style. Ideal for making a statement.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'orange',
  },{
    id: 9,
    image: ninthwig,
    name: '5x5 piano bounce',
    price: 110000,
    oldPrice: 150000,
    description: 'This is a stunning 5x5 piano bounce wig that provides a voluminous and glamorous look. Great for special events.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'black and blonde',
  },{
    id: 10,
    image: tenthwig,
    name: 'Body wave',
    price: 100000,
    oldPrice: 130000,
    description: 'This is a luxurious body wave wig that delivers a smooth and elegant appearance. Perfect for any occasion.',
    hairtype: 'human hair',
    length: '18 inches',
    color: 'natural black',
  },{
    id: 11,
    image: eleventhwig,
    name: 'DD blonde wig',
    price: 95000,
    oldPrice: 150000,
    description: 'This is a chic DD blonde wig that offers a sleek and modern look. Suitable for both casual and formal occasions.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'blonde',
  },{
    id: 12,
    image: twelvethwig,
    name: 'DD brown root blonde',
    price: 95000,
    oldPrice: 150000,
    description: 'This is a trendy DD brown root blonde wig that delivers a bold and fashionable style. Perfect for making a statement.',
    hairtype: 'human hair',
    length: '16 inches',
    color: 'brown with blonde roots',
  }

] 

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
      <h1>Best sellers</h1>

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