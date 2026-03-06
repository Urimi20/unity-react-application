import "./Portfolio.css";
import { Link } from "react-router-dom";

import portImg1 from "../../assets/images/Home_Images/project1.png";
import portImg2 from "../../assets/images/Home_Images/project2.png";
import portImg3 from "../../assets/images/Home_Images/project3.png";
import portImg4 from "../../assets/images/Home_Images/project4.png";
import portImg5 from "../../assets/images/Home_Images/project5.png";
import portImg6 from "../../assets/images/Home_Images/project6.png";

const Portfolio = () => {
  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="portfolio-header">
          <span className="subtitle">PORTOFOLIO</span>
          <h2>
            Projektet tona të realizuara <br /> në arkitekturën e peizazhit
          </h2>
        </div>

        <div className="portfolio-grid-custom">
          <div className="port-item big-top">
            <img src={portImg1} alt="Projekti 1" />
          </div>
          <div className="port-item small">
            <img src={portImg2} alt="Projekti 2" />
          </div>
          <div className="port-item small">
            <img src={portImg3} alt="Projekti 3" />
          </div>

          <div className="port-item small">
            <img src={portImg4} alt="Projekti 4" />
          </div>
          <div className="port-item small">
            <img src={portImg5} alt="Projekti 5" />
          </div>
          <div className="port-item big-bottom">
            <img src={portImg6} alt="Projekti 6" />
          </div>
        </div>

        <div className="portfolio-btn">
          <Link to="/shop" className="btn btn-green">
            Shikoni të gjitha projektet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
