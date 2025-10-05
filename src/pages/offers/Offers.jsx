import React, { useRef } from "react";
import "./offers.css";
import { BESTSSELLERS } from "../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Offers() {
  const under100kRef = useRef(null);
  const discountRef = useRef(null);
  const { addToCart } = useContext(ShopContext);

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (direction === "left") current.scrollLeft -= 350;
    else current.scrollLeft += 350;
  };

  const under100k = BESTSSELLERS.filter((item) => item.price < 100000);
  const biggestDiscount = [...BESTSSELLERS]
    .sort(
      (a, b) =>
        (b.oldPrice - b.price) / b.oldPrice -
        (a.oldPrice - a.price) / a.oldPrice
    )
    .slice(0, 5);

  const renderCard = (item) => {
    const showUrgency = Math.random() < 0.4; 
    return (
      <div className="offer-card" key={item.id}>
        <div className="offer-img-container">
          <img src={item.image} alt={item.name} />
          {showUrgency && <span className="offer-badge">Only 1 Left!</span>}
        </div>
        <div className="offer-details">
          <h3>{item.name}</h3>
          <p className="offer-price">
            ₦{item.price.toLocaleString()}
            <span className="offer-old">
              ₦{item.oldPrice.toLocaleString()}
            </span>
          </p>
          <button className="buy-now" onClick={() => addToCart(item.id)}>
            Shop Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="offers">
      <div className="offer-section">
        <h2 className="offer-title"> Under ₦100k Deals</h2>
        <div className="offer-wrapper">
          

          <div className="offer-row" ref={under100kRef}>
            {under100k.map(renderCard)}
          </div>

         
        </div>
      </div>

      <div className="offer-section">
        <h2 className="offer-title">Biggest Discount Offers $$</h2>
        <div className="offer-wrapper">
         

          <div className="offer-row" ref={discountRef}>
            {biggestDiscount.map(renderCard)}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Offers;
