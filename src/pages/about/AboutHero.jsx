import React from "react";
import "./AboutHero.css";
import heroLandscape from "../../assets/images/about_images/HeroImage.png";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-top">
          <h1>
            Rreth kompanise <br /> sone
          </h1>
          <div className="about-hero-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit phasellus mollis sit aliquam sit nullam neques.
            </p>
            <button className="btn btn-green">Na kontaktoni</button>
          </div>
        </div>
      </div>
      <div className="about-hero-image">
        <img src={heroLandscape} alt="hero img" />
      </div>
    </section>
  );
};

export default AboutHero;
