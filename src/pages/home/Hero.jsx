import React from "react";
import "./Hero.css";
import images from "../../assets/images/Home_Images/heroBackground.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images})`,
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
            <button className="btn btn-green">Na kontaktoni</button>
            <button className="btn-outline">Eksploroni shërbimet →</button>
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
            <button className="btn-arrow">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
