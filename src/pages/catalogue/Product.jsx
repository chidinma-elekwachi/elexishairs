import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './Catalogue.css'


const getDiscountPercent = (oldPrice, price) => {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}


export const Product = (props) => {
  const { id, name, image, price, oldPrice, description} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
        <div className='myproducts'>
          <img src={image} alt={name} className='product-image' />

          <h2 className='product-name'>{name}</h2>
          <div className='product-prices'>
            <span className='product-price'>₦{price.toLocaleString()}</span>
            <span
              className='product-old-price'
              style={{ textDecoration: 'line-through', color: '#888', marginLeft: '10px' }}
            >
              ₦{oldPrice.toLocaleString()}
            </span>
            <span className='product-discount' style={{ color: 'red', marginLeft: '10px' }}>
              -{getDiscountPercent(oldPrice, price)}%
            </span>
          </div>

          <p className='product-description'>{description}</p>
          <button className='add-to-cart-button' onClick={() => addToCart(id)}>
            Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
          </button>
        </div>
  );
}

export default Product;