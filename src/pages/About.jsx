import React from "react";
import AboutHero from "./about/AboutHero";
import AboutStats from "./about/AboutStats";
import AboutMission from "./about/AboutMission";
import AboutValues from "./about/AboutValues";
import OurTeam from "./about/OurTeam";
import AboutOffices from "./about/AboutOffices";
import FAQSection from "./about/FaqSection";

const About = () => {
  return (
    <main>
      <div className="about-page">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutValues />
        <OurTeam />
        <AboutOffices />
        <FAQSection />
      </div>
    </main>
  );
};

export default About;
