import React from "react";

import Hero from "./home/Hero.jsx";
import WhyChooseUs from "./home/WhyChooseUs.jsx";
import Services from "./home/Services.jsx";
import Portfolio from "./home/Portfolio.jsx";
import Process from "./home/Process.jsx";
import Testimonials from "./home/Testimonals.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;
