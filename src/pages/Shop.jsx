import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart, cartItems, getTotalPrice } = useCart();

  const API_URL = "https://69a8819c37caab4b8c61ecb5.mockapi.io/products";

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      title: product.name,
      price: product.price,
      description: product.description,
      image: product.img
    };
    addToCart(cartItem);
    
    const button = e.target;
    button.textContent = 'Added!';
    button.classList.add('added');
    setTimeout(() => {
      button.textContent = '+';
      button.classList.remove('added');
    }, 2000);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Duke ngarkuar produktet...</p>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <div className="container">
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Cart Summary ({cartItems.length} items)</h3>
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
          </div>
        )}
        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="product-card"
                key={product.id || Math.random()}
                onClick={() => navigate(`/shop/${product.slug}`)}
              >
                <div className="product-img-wrapper">
                  <img
                    src={
                      product.img ||
                      "https://via.placeholder.com/300x300?text=No+Image"
                    }
                    alt={product.name}
                  />

                  <span className="product-price">
                    ${product.price ? Number(product.price).toFixed(2) : "0.00"}
                  </span>

                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    +
                  </button>
                </div>
                <div className="product-info">
                  <h3>{product.name || "Unnamed Product"}</h3>
                  <p>{product.description || "No description available."}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found in database.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
