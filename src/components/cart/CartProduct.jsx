import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartProduct = ({ data }) => {
  const { id, name, price, image, description } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} alt={name} className="cart-image" />

      <div className="cart-details">
        <div className="cart-top">
          <div className="cart-info">
            <h3 className="cart-name">{name}</h3>
            <p className="cart-price"> Unit Price: ₦{price.toLocaleString()}</p>
          </div>

          <div className="cart-quantity">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>

        <p className="cart-description">{description}</p>
      </div>
    </div>
  );
};

export default CartProduct;
