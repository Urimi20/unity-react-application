import "./WhyChooseUs.css";
import whyChoseUsImg from "../../assets/images/Home_Images/whyChoseUsImg.png";

const WhyChooseUs = () => {
  return (
    <section className="why-us section-padding">
      <div className="container why-us-grid">
        <div className="why-us-image">
          <div
            className="image-wrapper"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${whyChoseUsImg})`,
            }}
          >
            <div className="experience-badge">
              <p>
                <strong>
                  "Reliable and meticulous work made the renovation process
                  easy"
                </strong>
              </p>
              <span>- Sophie Moore</span>
            </div>
          </div>
        </div>

        <div className="why-us-content">
          <span className="subtitle">ABOUT US</span>
          <h2>Why choose us?</h2>
          <p className="description">
            We bring years of experience and a passion for nature to every
            project. Our mission is to create spaces that breathe life into your
            home.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="icon-check">✓</div>
              <div>
                <h4>Eco friendly</h4>
                <p>We use sustainable materials and organic fertilizers.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-check">✓</div>
              <div>
                <h4>Done with love</h4>
                <p>Every plant is placed with care and attention to detail.</p>
              </div>
            </div>
          </div>

          <button className="btn btn-green">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
