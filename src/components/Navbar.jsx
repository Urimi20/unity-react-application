import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          Kop<span>Shti</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <div className="dropdown">
              Pages <i className="arrow-down"></i>
            </div>
          </li>
          <li>
            <Link to="/cart">Cart (0)</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-green">
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
