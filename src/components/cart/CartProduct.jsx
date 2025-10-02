import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './Cart.css';

export default function CartProduct({ data }) {
  const { id, name, image, price, description } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} alt={name} className="product-image" />

      <div className="description">
        <p className="cart-name">{name}</p>
        <span className="cart-price">₦{price.toLocaleString()}</span>
        <p className="cart-description">{description}</p>

        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
