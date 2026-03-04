import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { teamData } from "./OurTeam";
import "./MemberDetail.css";

const MemberDetail = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const member = teamData.find((m) => m.id === memberId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div
        className="container"
        style={{ padding: "100px", textAlign: "center" }}
      >
        <h2>Anëtari nuk u gjet!</h2>
        <button onClick={() => navigate("/about")}>Kthehu te Ekipi</button>
      </div>
    );
  }

  return (
    <div className="member-detail-page">
      <div className="container">
        <div className="detail-header text-center">
          <div className="detail-img-wrapper">
            <img src={member.img} alt={member.name} />
          </div>
          <h1 className="detail-name">{member.name}</h1>
          <p className="detail-intro">{member.intro}</p>
          <div className="detail-socials">
            <span className="social-icon">f</span>
            <span className="social-icon">x</span>
            <span className="social-icon">ig</span>
            <span className="social-icon">in</span>
          </div>
        </div>

        <hr className="detail-divider" />

        <div className="detail-content">
          <h2>{member.aboutTitle}</h2>
          <p>{member.bio}</p>
          <p>{member.description}</p>

          <ul className="detail-list">
            {member.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <p>{member.footerText}</p>

          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Kthehu te Ekipi
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
