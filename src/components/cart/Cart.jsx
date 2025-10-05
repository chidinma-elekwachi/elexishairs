import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { BESTSSELLERS } from "../../pages/products";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const PRODUCTS = BESTSSELLERS;

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [showPopup, setShowPopup] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const navigate = useNavigate();

  const deliveryFee = 15000;
  const deliveryMessage =
    totalAmount >= 300000
      ? "Free delivery on orders above ₦300,000."
      : "Free delivery on your first order.";

  // create message string
  const getOrderSummary = () => {
    let summary = "";
    PRODUCTS.forEach((product) => {
      if (cartItems[product.id] > 0) {
        summary += `${cartItems[product.id]} x ${product.name}, `;
      }
    });
    return summary.trim().replace(/,\s*$/, "");
  };

  const handlePaymentDone = () => {
    const productSummary = getOrderSummary();
    const message = `Hello, I just made a payment of ₦${totalAmount.toLocaleString()} for the following items: ${productSummary}. My name is ${customerName}. I’d like to follow up with my order.`;
    const whatsappUrl = `https://wa.me/2349138661387?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    checkout();
    setShowPopup(false);
  };

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
              Delivery:{" "}
              <span className="strike">
                ₦{deliveryFee.toLocaleString()}
              </span>{" "}
              <span className="free-text">Free</span>
            </p>
            <p className="delivery-msg">{deliveryMessage}</p>
          </div>

          <hr className="divider" />

          <p className="total">Total: ₦{totalAmount.toLocaleString()}</p>
          <p> PLEASE SCREENSHOT YOUR CART BEFORE CHECKOUT!</p>
          <div className="options">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={() => setShowPopup(true)}>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Your Cart is Empty</h2>
          <p>Browse our luxury hair collection.</p>
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div>
      )}

      {showPopup && (
        <div className="payment-popup">
          <div className="popup-content">
            <h3>Make Payment</h3>
            <p>
              Please make a payment of{" "}
              <strong>₦{totalAmount.toLocaleString()}</strong> to:
            </p>
            <p>
              <strong>Account:</strong> 2052037928 <br />
              <strong>Bank:</strong> Zenith Bank PLC <br />
              <strong>Name:</strong> Elekwachi Chidinma Salome
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              className="name-input"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <div className="popup-buttons">
              <button
                onClick={() => {
                  if (!customerName.trim()) {
                    alert("Please enter your name before continuing.");
                    return;
                  }
                  handlePaymentDone();
                }}
                className="paid-btn"
              >
                I Have Paid
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
