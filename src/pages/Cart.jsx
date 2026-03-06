import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
 
  const { cartItems, getTotalPrice, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shporta e Blerjeve</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Shporta juaj është bosh.</p>
            <Link
              to="/shop"
              className="btn-green add-btn"
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Kthehu te Dyqani
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={item.id || index}>
                  <div className="cart-item-img">
                    <img
                      src={
                        item.image ||
                        "https://via.placeholder.com/100?text=No+Image"
                      }
                      alt={item.title}
                    />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p className="item-price">
                      ${Number(item.price).toFixed(2)}
                    </p>
                    <p className="item-qty">Sasia: {item.quantity || 1}</p>
                  </div>

                
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart && removeFromCart(item.id)}
                  >
                    Hiq
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary-box">
              <h2>Përmbledhja</h2>
              <hr />
              <div className="summary-row">
                <span>Totali i produkteve:</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="summary-row total">
                <span>Totali për pagesë:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button className="checkout-btn add-btn">
                Vazhdo me Pagesën
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
