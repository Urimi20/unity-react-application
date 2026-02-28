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
            Let us bring life <br /> to your garden
          </h1>
          <p>
            Expert landscaping services tailored to your lifestyle. We create
            sustainable and beautiful outdoor environments.
          </p>
          <div className="hero-btns">
            <button className="btn btn-green">Get in touch</button>
            <button className="btn-outline">Browse services →</button>
          </div>
        </div>

        <div className="hero-floating-card">
          <h3>Book your service today</h3>
          <p>Enter your email and we'll contact you for a free consultation.</p>
          <div className="input-group">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-arrow">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
