import React from "react";
import { useForm } from "react-hook-form";
import "./ContactPage.css";

import contactImg from "../assets/images/contactImages/FirstImage.png";
import emailIcon from "../assets/images/contactImages/Icon1.png";
import phoneIcon from "../assets/images/contactImages/Icon2.png";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Të dhënat që do të ruhen:", data);
    
    alert("Mesazhi u dërgua me sukses! Faleminderit që na kontaktuat.");
    reset();
  };

  return (
    <div className="contact-page">
      <section className="consultation-section container">
        <div className="consultation-wrapper">
          <div className="consultation-image">
            <img src={contactImg} alt="Zyra GardenView" />
          </div>

          <div className="consultation-form-container">
            <span className="subtitle">KONSULTIM</span>
            <h1 className="form-title">
              Plotësoni formularin për një konsultim falas
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Emri i plotë</label>
                  <input
                    {...register("fullName", {
                      required: "Ju lutem shkruani emrin",
                    })}
                    placeholder="Emri Mbiemri"
                    className={errors.fullName ? "error-input" : ""}
                  />
                  {errors.fullName && (
                    <span className="error-msg">{errors.fullName.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Adresa e email-it</label>
                  <input
                    {...register("email", {
                      required: "Email-i është i detyrueshëm",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email jo valid",
                      },
                    })}
                    placeholder="shembull@gmail.com"
                    className={errors.email ? "error-input" : ""}
                  />
                  {errors.email && (
                    <span className="error-msg">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Numri i telefonit</label>
                  <input
                    {...register("phone", {
                      required: "Numri është i detyrueshëm",
                    })}
                    placeholder="04X XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label>Shërbimi</label>
                  <select {...register("service")}>
                    <option value="garden-design">Dizajn i kopshtit</option>
                    <option value="landscaping">Rregullim i peizazhit</option>
                    <option value="maintenance">Mirëmbajtje</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Mesazhi juaj</label>
                <textarea
                  {...register("message", {
                    required: "Shkruani arsyen e kontaktit",
                  })}
                  placeholder="Shkruani mesazhin tuaj këtu..."
                  rows="4"
                ></textarea>
                {errors.message && (
                  <span className="error-msg">{errors.message.message}</span>
                )}
              </div>

              <button type="submit" className="send-btn">
                Dërgo Mesazhin
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="reach-out-section bg-light">
        <div className="container">
          <span className="subtitle text-center d-block">NA KONTAKTONI</span>
          <h2 className="text-center section-h2">Na gjeni këtu</h2>

          <div className="contact-cards">
            <div className="info-card">
              <div className="icon">
                <img src={emailIcon} alt="" />
              </div>
              <h3>Na shkruani</h3>
              <p>Jemi në dispozicion për çdo pyetje tuajën.</p>
              <a href="mailto:contact@kopshti.com">contact@kopshti.com</a>
            </div>

            <div className="info-card">
              <div className="icon">
                <img src={phoneIcon} alt="" />
              </div>
              <h3>Na telefononi</h3>
              <p>Na kontaktoni direkt për konsulta të shpejta.</p>
              <a href="tel:044123456">+383 44 123 456</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
