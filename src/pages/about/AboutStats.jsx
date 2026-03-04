import React from "react";
import "./AboutStats.css";
import iconHappy from "../../assets/images/about_images/statsIcon1.png";
import iconProjects from "../../assets/images/about_images/statsIcon2.png";
import iconTeam from "../../assets/images/about_images/statsIcon3.png";

const AboutStats = () => {
  const statsData = [
    {
      percent: "100%",
      title: "Klientë të kënaqur",
      desc: "Ne sigurojmë cilësi maksimale në çdo projekt të gjelbërimit.",
      icon: iconTeam,
    },
    {
      percent: "400+",
      title: "Projekte të realizuara",
      desc: "Të përfunduara me sukses dhe përpikëri në mbarë vendin.",
      icon: iconProjects,
    },
    {
      percent: "90+",
      title: "Anëtarë në ekip",
      desc: "Profesionistë dhe ekspertë të kualifikuar në shërbimin tuaj.",
      icon: iconHappy,
    },
  ];

  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-header text-center">
          <span className="subtitle">● Pse ne?</span>
          <h2>Shifrat tona</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur sed tristique <br />{" "}
            fermentum malesuada massa cursus vel vulputate.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-card-header">
                <img className="icon-circle" src={item.icon} alt="icon" />
                <h3>{item.percent}</h3>
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
