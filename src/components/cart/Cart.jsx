import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { BESTSSELLERS } from "../../pages/products";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import './cart.css';

const PRODUCTS = BESTSSELLERS;

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartProduct key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₦{totalAmount.toLocaleString()}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
      <div className='emptyCart'>
        <h2> Oops Your Shopping Cart is Empty</h2>
        <button onClick={() => navigate("/")}>Continue Shopping</button>

      </div>
      )}
    </div>
  );
};
