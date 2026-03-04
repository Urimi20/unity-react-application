import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurTeam.css";

import Profile1 from "../../assets/images/about_images/Profile1.png";
import Profile2 from "../../assets/images/about_images/Profile2.png";
import Profile3 from "../../assets/images/about_images/Profile3.png";
import Profile4 from "../../assets/images/about_images/Profile4.png";

export const teamData = [
  {
    id: "john-carter",
    name: "John Carter",
    role: "CEO & Themelues",
    img: Profile1,
    intro:
      "Me përvojë të gjatë në arkitekturë të peizazhit dhe menaxhim biznesi.",
    aboutTitle: "Rreth John Carter",
    bio: "John është vizionari pas kompanisë sonë, me mbi 20 vite përvojë në arkitekturë të peizazhit dhe menaxhim.",
    description:
      "Ai e nisi këtë rrugëtim me një qëllim të thjeshtë: të bashkojë arkitekturën moderne me bukurinë natyrore.",
    points: [
      "Udhëheqje Strategjike",
      "Inovacion në Dizajn",
      "Rritje e Qëndrueshme",
    ],
    footerText: "Duke udhëhequr me pasion dhe integritet që nga dita e parë.",
  },
  {
    id: "sophie-moore",
    name: "Sophie Moore",
    role: "Dizajnere Kryesore e Peizazhit",
    img: Profile2,
    intro: "Eksperte në dizajn të qëndrueshëm dhe hapësira të gjelbra urbane.",
    aboutTitle: "Rreth Sophie Moore",
    bio: "Sophie kombinon kreativitetin artistik me njohuritë mjedisore në çdo projekt që drejton.",
    description:
      "Projektet e saj janë vlerësuar për kursimin e ujit dhe përdorimin e bimëve vendase.",
    points: [
      "Dizajn i Qëndrueshëm",
      "Menaxhim i Fidanishteve",
      "Planifikim Urban",
    ],
    footerText: "E përkushtuar për të krijuar bukuri në çdo hapësirë.",
  },
  {
    id: "matt-cannon",
    name: "Matt Cannon",
    role: "Peizazhist",
    img: Profile3,
    intro: "Specialist në elemente strukturore dhe punime me gurë.",
    aboutTitle: "Rreth Matt Cannon",
    bio: "Matt është eksperti praktik që i kthen projektet në struktura të forta dhe afatgjata.",
    description:
      "Nga muret me gurë deri te sistemet komplekse të ujitjes, ai siguron që baza e çdo kopshti të jetë perfekte.",
    points: ["Ekspert në Hardscape", "Sisteme Ujitjeje", "Përgatitje Terreni"],
    footerText: "Duke ndërtuar bazën e kopshtit tuaj ideal.",
  },
  {
    id: "lilly-woods",
    name: "Lilly Woods",
    role: "Peizazhiste",
    img: Profile4,
    intro: "E apasionuar pas aranzhimeve me lule dhe mirëmbajtjes sezonale.",
    aboutTitle: "Rreth Lilly Woods",
    bio: "Lilly ka një sy të veçantë për ngjyrat dhe teksturat, duke i dhënë jetë çdo kopshti.",
    description:
      "Ajo menaxhon mbjelljet sezonale dhe siguron që çdo hapësirë të mbetet e gjallë gjatë gjithë vitit.",
    points: [
      "Specialiste Hortikulture",
      "Mbjellje Sezonale",
      "Menaxhim Dëmtuesish",
    ],
    footerText: "Duke sjellë ngjyra dhe jetë në hapësirën tuaj të jashtme.",
  },
];

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <section className="our-team">
      <div className="container">
        <div className="team-header text-center">
          <span className="subtitle">● EKIPI YNË</span>
          <h2>
            Vlerat që udhëheqin <br /> gjithçka që bëjmë
          </h2>
        </div>

        <div className="team-grid">
          {teamData.map((member) => (
            <div
              className="team-card"
              key={member.id}
              onClick={() => navigate(`/about/team/${member.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="member-img">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <div className="social-links">
                <span className="social-icon">f</span>
                <span className="social-icon">x</span>
                <span className="social-icon">in</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
