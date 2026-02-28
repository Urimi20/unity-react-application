import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>
            Get in touch and <br /> receive a free quote!
          </h2>
          <div className="footer-cta-btns">
            <button className="btn btn-green">Get started now</button>
            <button className="btn-outline-white">View projects</button>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col about">
            <a href="/" className="footer-logo">
              Kop<span>Shti</span>
            </a>
            <p className="footer-desc">
              We create sustainable and breathtaking landscapes that bring
              nature closer to your home.
            </p>
            <div className="footer-subscribe-wrapper">
              <h4>Subscribe to our newsletter</h4>
              <div className="footer-subscribe">
                <input type="email" placeholder="Your email address" />
                <button className="btn-subscribe">➔</button>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Garden Design</a>
              </li>
              <li>
                <a href="#">Lawn Maintenance</a>
              </li>
              <li>
                <a href="#">Flower Planting</a>
              </li>
              <li>
                <a href="#">Tree Trimming</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Instagram Gallery</h4>
            <div className="footer-gallery">
              {[1, 2, 3, 4].map((i) => (
                <div className="gal-item" key={i}>
                  <img
                    src={`https://via.placeholder.com/150?text=Garden+${i}`}
                    alt="Gallery"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 GardenView. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon">
              Instagram
            </a>
            <a href="#" className="social-icon">
              Facebook
            </a>
            <a href="#" className="social-icon">
              LinkedIn
            </a>
          </div>
          <p>Privacy Policy • Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
