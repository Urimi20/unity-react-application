import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_URL = "https://69a8819c37caab4b8c61ecb5.mockapi.io/products";

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
                    onClick={(e) => e.stopPropagation()}
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
