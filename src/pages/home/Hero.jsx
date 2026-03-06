import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/Home_Images/heroBackground.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      }}
    >
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="fade-in">
            Na lejoni t'i japim <br /> jetë kopshtit tuaj
          </h1>
          <p>
            Shërbime profesionale të peizazhit, të përshtatura sipas stilit tuaj
            të jetesës. Ne krijojmë mjedise të jashtme të qëndrueshme dhe
            estetike.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-green">
              Na kontaktoni
            </Link>

            <Link to="/shop" className="btn-outline">
              Eksploroni shërbimet →
            </Link>
          </div>
        </div>

        <div className="hero-floating-card">
          <h3>Rezervoni shërbimin tuaj</h3>
          <p>
            Vendosni adresën tuaj elektronike dhe ne do t'ju kontaktojmë për një
            konsultë falas.
          </p>
          <div className="input-group">
            <input type="email" placeholder="Adresa juaj elektronike" />

           
            <Link to="/cart" className="btn-arrow">
              →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
