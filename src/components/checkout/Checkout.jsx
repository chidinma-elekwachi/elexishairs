import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { BESTSSELLERS } from "../../pages/products";
import "./Checkout.css";

function Checkout() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.state) {
      alert("Please fill all fields before placing order");
      return;
    }
    setShowPopup(true);
  };

  const handlePaymentDone = () => {
    const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
    const message = `I just paid ₦${totalAmount.toLocaleString()} for ${totalItems} wigs. I want to follow up with my order.`;
    const whatsappUrl = `https://wa.me/2349138661387?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    checkout();
    setShowPopup(false);
  };

  return (
    <div className="checkout-wrapper">
      <h1>Checkout</h1>

      <div className="checkout-summary">
        {BESTSSELLERS.map((product) => {
          const qty = cartItems[product.id];
          if (qty > 0) {
            return (
              <div key={product.id} className="checkout-item">
                <img src={product.image} alt={product.name} />
                <div className="checkout-item-details">
                  <p className="checkout-name">{product.name}</p>
                  <p className="checkout-price">
                    ₦{product.price.toLocaleString()} × {qty} ={" "}
                    <strong>
                      ₦{(product.price * qty).toLocaleString()}
                    </strong>
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="checkout-total">
        <h2>Total: ₦{totalAmount.toLocaleString()}</h2>
      </div>

      <div className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          {[
            "Lagos",
            "Abuja",
            "Rivers",
            "Ogun",
            "Oyo",
            "Anambra",
            "Enugu",
            "Edo",
          ].map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>

        <button className="place-order" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

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

            <div className="popup-buttons">
              <button onClick={handlePaymentDone} className="paid-btn">
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
}

export default Checkout;
