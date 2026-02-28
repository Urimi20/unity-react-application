import "./Portfolio.css";

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
          <span className="subtitle">PORTFOLIO</span>
          <h2>
            Our past projects of <br /> landscaping work
          </h2>
        </div>

        <div className="portfolio-grid-custom">
          <div className="port-item big-top">
            <img src={portImg1} alt="Project 1" />
          </div>
          <div className="port-item small">
            <img src={portImg2} alt="Project 2" />
          </div>
          <div className="port-item small">
            <img src={portImg3} alt="Project 3" />
          </div>

          <div className="port-item small">
            <img src={portImg4} alt="Project 4" />
          </div>
          <div className="port-item small">
            <img src={portImg5} alt="Project 5" />
          </div>
          <div className="port-item big-bottom">
            <img src={portImg6} alt="Project 6" />
          </div>
        </div>

        <div className="portfolio-btn">
          <button className="btn btn-green">View all projects</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
