import React from "react";
import "./AboutMission.css";
import missionImg from "../../assets/images/about_images/MissionImg.png";
import authorImg from "../../assets/images/about_images/MissionProfile.png";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <div className="container mission-grid">
        <div className="mission-left">
          <div className="mission-image-wrapper">
            <img src={missionImg} alt="Shërbime të peizazhit" />
          </div>
        </div>

        <div className="mission-right">
          <span className="subtitle">Misioni ynë</span>
          <h2>Misioni ynë është të ofrojmë shërbime cilësore të peizazhit</h2>

          <p className="mission-text">
            Ne synojmë të krijojmë hapësira të gjelbra funksionale dhe estetike,
            duke përdorur zgjidhje moderne dhe materiale cilësore për çdo
            projekt.
          </p>

          <p className="mission-text">
            Çdo punë e realizojmë me përkushtim, profesionalizëm dhe vëmendje
            ndaj detajeve për të garantuar kënaqësinë tuaj.
          </p>

          <div className="mission-quote">
            <div className="quote-content">
              <p>
                “Qëllimi ynë është t’ju ofrojmë burimet dhe këshillat e
                nevojshme për ta kthyer idenë tuaj në realitet.”
              </p>
              <div className="quote-author">
                <img src={authorImg} alt="Sophie Moore" />
                <div className="author-info">
                  <h5>Sophie Moore</h5>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            <div className="quote-icon">“</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
