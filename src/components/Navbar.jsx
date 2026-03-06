import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-wrapper">
          <div className="nav-left">
            <Link to="/" className="logo">
              Kop<span>Shti</span>
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Ballina</Link>
            </li>
            <li>
              <Link to="/about">Rreth nesh</Link>
            </li>
            <li>
              <Link to="/shop">Dyqani</Link>
            </li>
            <li>
              <Link to="/cart">Shporta ({totalItems})</Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-green">
              Na kontaktoni
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <aside className={`nav-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            Kop<span>Shti</span>
          </div>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Ballina
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Rreth nesh
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMenu}>
              Dyqani
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggleMenu}>
              Shporta ({totalItems})
            </Link>
          </li>

          <li className="sidebar-btn-wrapper">
            <Link
              to="/contact"
              className="btn btn-green sidebar-btn"
              onClick={toggleMenu}
            >
              Na kontaktoni
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
