import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Services.css";

import serviceImg1 from "../../assets/images/Home_Images/exploreImg1.png";
import serviceImg2 from "../../assets/images/Home_Images/exploreImg2.png";
import serviceImg3 from "../../assets/images/Home_Images/exploreImg3.png";

const servicesData = [
  {
    title: "Dizajni i kopshtit",
    desc: "Planimetri profesionale dhe vizualizime 3D për projektin tuaj.",
    img: serviceImg1,
  },
  {
    title: "Mbjellja e luleve",
    desc: "Lule sezonale të përzgjedhura sipas specifikave të tokës suaj.",
    img: serviceImg2,
  },
  {
    title: "Mirëmbajtja",
    desc: "Kujdes i përjavshëm për ta mbajtur kopshtin tuaj në gjendje të përsosur.",
    img: serviceImg3,
  },
  {
    title: "Kujdesi për barin",
    desc: "Korrje e rregullt dhe trajtim për një bar të shëndetshëm dhe të gjelbër.",
    img: serviceImg1,
  },
  {
    title: "Krasitja e pemëve",
    desc: "Prerje profesionale për shëndetin dhe estetikën e pemëve tuaja.",
    img: serviceImg2,
  },
  {
    title: "Sistemet e ujitjes",
    desc: "Sisteme inteligjente për efikasitet maksimal të përdorimit të ujit.",
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
              SHËRBIMET TONA
            </span>
            <h2 className="text-white">
              Eksploroni gamën tonë <br /> të gjerë të shërbimeve
            </h2>
          </div>
          <div className="services-btns">
            <button className="btn btn-green">Na kontaktoni</button>
            <button className="btn btn-gray">Shiko të gjitha</button>
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
