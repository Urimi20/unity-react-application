import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>
            Na kontaktoni dhe përfitoni <br /> një ofertë falas!
          </h2>
          <div className="footer-cta-btns">
            <Link to="/contact" className="btn btn-green">
              Fillo tani
            </Link>
            <Link to="/shop" className="btn-outline-white">
              Shiko produktet
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col about-section">
            <Link to="/" className="footer-logo">
              Kop<span>Shti</span>
            </Link>
            <p className="footer-desc">
              Ne krijojmë peizazhe të qëndrueshme dhe mahnitëse që sjellin
              natyrën më afër shtëpisë tuaj. Ekspertizë në dizajn dhe
              mirëmbajtje.
            </p>
          </div>

          <div className="footer-col">
            <h4>Linqe të shpejta</h4>
            <ul>
              <li>
                <Link to="/about">Rreth Nesh</Link>
              </li>
              <li>
                <Link to="/shop">Shërbimet tona</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Kontakti</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Shërbimet tona</h4>
            <ul>
              <li>
                <Link to="/shop">Dizajn Kopshti</Link>
              </li>
              <li>
                <Link to="/shop">Mirëmbajtje Bari</Link>
              </li>
              <li>
                <Link to="/shop">Mbjellje Lulesh</Link>
              </li>
              <li>
                <Link to="/shop">Krasitje Pemësh</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Abonohuni</h4>
            <p>Merrni këshilla për kopshtarinë çdo muaj.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email-i juaj" />
              <button className="btn-subscribe">➔</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 KopShti. Të gjitha të drejtat e rezervuara.</p>
          <div className="social-links">
            <a href="https://instagram.com" className="social-icon">
              Instagram
            </a>
            <a href="https://facebook.com" className="social-icon">
              Facebook
            </a>
            <a href="https://linkedin.com" className="social-icon">
              LinkedIn
            </a>
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privatësia</Link>
            <span>•</span>
            <Link to="/terms">Kushtet</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
