import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { BESTSSELLERS } from "../../pages/products";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const PRODUCTS = BESTSSELLERS;

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const deliveryFee = 15000;

  const deliveryMessage =
    totalAmount >= 300000
      ? "Free delivery on orders above ₦300,000."
      : "Free delivery on your first order.";

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>

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
          <p className="subtotal">Subtotal: ₦{totalAmount.toLocaleString()}</p>

          <div className="delivery-section">
            <p className="delivery-fee">
              Delivery: <span className="strike">₦{deliveryFee.toLocaleString()}</span>{" "}
              <span className="free-text">Free</span>
            </p>
            <p className="delivery-msg">{deliveryMessage}</p>
          </div>

          <hr className="divider" />

          <p className="total">Total: ₦{totalAmount.toLocaleString()}</p>

          <div className="options">
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
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Your Cart is Empty</h2>
          <p>Browse our luxury hair collection.</p>
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div>
      )}
    </div>
  );
};
