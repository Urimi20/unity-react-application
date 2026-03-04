import React from "react";
import "./AboutValues.css";

import icon1 from "../../assets/images/about_images/Value1.png";
import icon2 from "../../assets/images/about_images/Value2.png";
import icon3 from "../../assets/images/about_images/Value3.png";

const AboutValues = () => {
  const valuesData = [
    {
      title: "Përpikëria",
      icon: icon1,
    },
    {
      title: "Besimi",
      icon: icon2,
    },
    {
      title: "Eko-miqësor",
      icon: icon3,
    },
    {
      title: "Inovacioni",
      icon: icon1,
    },
    {
      title: "Përkushtimi",
      icon: icon2,
    },
    {
      title: "Cilësia",
      icon: icon3,
    },
  ];

  return (
    <section className="about-values">
      <div className="container">
        <div className="values-header text-center">
          <span className="subtitle">Vlerat Tona </span>
          <h2>
            Vlerat që udhëheqin <br /> punën tonë
          </h2>
        </div>

        <div className="values-grid">
          {valuesData.map((item, index) => (
            <div className="value-item" key={index}>
              <div>
                <img className="value-icon" src={item.icon} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> sed tristique.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
