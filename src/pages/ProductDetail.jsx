import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const API_URL = `https://69a8819c37caab4b8c61ecb5.mockapi.io/products?slug=${slug}`;

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProduct(data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  if (!product)
    return (
      <div className="container">
        <h2>Product not found!</h2>
      </div>
    );

  const totalPrice = product.price * quantity;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-main-info">
          <div className="product-image-section">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="product-details-section">
            <h1>{product.name}</h1>
            <p className="short-desc">{product.description}</p>

            <div className="specs-table">
              <div className="spec-row">
                <span>Weight</span> <strong>{product.weight}</strong>
              </div>
              <div className="spec-row">
                <span>Dimensions</span> <strong>{product.dimensions}</strong>
              </div>
            </div>

            <div className="price-tag">
              <span className="current-price">
                ${totalPrice.toFixed(2)} USD
              </span>
              {product.oldPrice && (
                <span className="old-price">
                  ${(product.oldPrice * quantity).toFixed(2)} USD
                </span>
              )}
            </div>

            <div className="purchase-actions">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="qty-input"
              />
              <select className="size-select">
                <option>Select plant size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="product-full-desc">
          <ul className="points-list">
            {product.points &&
              product.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
          <p>{product.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
