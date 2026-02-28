import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Services.css";

import serviceImg1 from "../../assets/images/Home_Images/exploreImg1.png";
import serviceImg2 from "../../assets/images/Home_Images/exploreImg2.png";
import serviceImg3 from "../../assets/images/Home_Images/exploreImg3.png";

const servicesData = [
  {
    title: "Garden design",
    desc: "Professional layouts and 3D visualizations.",
    img: serviceImg1,
  },
  {
    title: "Flower planting",
    desc: "Seasonal flowers selected for your soil.",
    img: serviceImg2,
  },
  {
    title: "Maintenance",
    desc: "Weekly care to keep your garden pristine.",
    img: serviceImg3,
  },
  {
    title: "Lawn Care",
    desc: "Perfectly mowed and healthy green grass.",
    img: serviceImg1,
  },
  {
    title: "Tree Pruning",
    desc: "Professional cutting for tree health.",
    img: serviceImg2,
  },
  {
    title: "Irrigation",
    desc: "Smart systems for water efficiency.",
    img: serviceImg3,
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <div className="header-left">
            <span className="subtitle" style={{ color: "#A3C9A8" }}>
              SERVICES
            </span>
            <h2 className="text-white">
              Explore our wide <br /> range of services
            </h2>
          </div>
          <div className="services-btns">
            <button className="btn btn-green">Get in touch</button>
            <button className="btn-outline-white">Browse all</button>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={false}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="services-swiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-img-container">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-main-img"
                  />
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
