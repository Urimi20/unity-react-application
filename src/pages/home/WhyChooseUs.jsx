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
                  "Puna e besueshme dhe e përpiktë e bëri procesin e renovimit
                  shumë të lehtë"
                </strong>
              </p>
              <span>- Sophie Moore</span>
            </div>
          </div>
        </div>

        <div className="why-us-content">
          <span className="subtitle">RRETH NESH</span>
          <h2>Pse të na zgjidhni ne?</h2>
          <p className="description">
            Ne sjellim përvojë shumëvjeçare dhe pasion për natyrën në çdo
            projekt. Misioni ynë është të krijojmë hapësira që i japin frymë dhe
            jetë shtëpisë suaj.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="icon-check">✓</div>
              <div>
                <h4>Ekologjikë</h4>
                <p>Ne përdorim materiale të qëndrueshme dhe plehra organikë.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-check">✓</div>
              <div>
                <h4>Punë me përkushtim</h4>
                <p>
                  Çdo bimë vendoset me kujdes dhe vëmendje maksimale ndaj
                  detajeve.
                </p>
              </div>
            </div>
          </div>

          <button className="btn btn-green">Na kontaktoni</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
