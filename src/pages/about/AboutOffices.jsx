import React, { useState } from "react";
import "./AboutOffices.css";
import officeImg from "../../assets/images/about_images/officeBg.png";

const AboutOffices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const offices = [
    {
      city: "New York, NY",
      desc: "Ne ofrojmë shërbime profesionale të peizazhit me përkushtim dhe cilësi të lartë.",
      address: "123 Main Street, New York, NY 10001",
      email: "newyork@gardenview.com",
    },
    {
      city: "San Francisco, CA",
      desc: "Ekipi ynë është i gatshëm t’ju ndihmojë me projekte të ndryshme të gjelbërimit.",
      address: "456 Market St, San Francisco, CA 94105",
      email: "sf@gardenview.com",
    },
    {
      city: "Chicago, IL",
      desc: "Zgjidhje moderne dhe të qëndrueshme për çdo hapësirë të jashtme.",
      address: "789 Michigan Ave, Chicago, IL 60611",
      email: "chicago@gardenview.com",
    },
  ];

  return (
    <section className="about-offices">
      <div className="container">
        <div className="offices-header">
          <div className="header-left">
            <span className="subtitle">● ZYRAT TONA</span>
            <h2>Vizitoni zyrat tona</h2>
          </div>
          <div className="header-right">
            <p>
              Jemi gjithmonë të hapur për t’ju mirëpritur dhe për të diskutuar
              rreth projektit tuaj.
            </p>
          </div>
        </div>

        <div className="office-main-content">
          <div className="office-bg-image">
            <img src={officeImg} alt="Brendësia e zyrës" />
          </div>

          <div className="office-accordion-card">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="accordion-title">
                  <h3>{office.city}</h3>
                  <button className="arrow-btn">
                    <span>{activeIndex === index ? "<" : ">"}</span>
                  </button>
                </div>

                <div className="accordion-content">
                  <p className="office-desc">{office.desc}</p>
                  <p className="office-detail">
                    <strong>{office.address}</strong> ↗
                  </p>
                  <p className="office-detail">
                    <strong>{office.email}</strong> ↗
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOffices;
