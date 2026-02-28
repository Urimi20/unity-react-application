import "./Process.css";
import processImg from "../../assets/images/Home_Images/processImg.png";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Contact us",
      text: "Reach out to us via our form or phone to discuss your initial vision and requirements.",
    },
    {
      id: "02",
      title: "Schedule an appointment",
      text: "We will visit your site to take measurements and understand the unique potential of your space.",
    },
    {
      id: "03",
      title: "Get your project done",
      text: "Our expert team brings the design to life with precision and care for every plant.",
    },
  ];

  return (
    <section className="process section-padding">
      <div className="container">
        <div className="process-header">
          <div className="header-left">
            <span className="subtitle">OUR PROCESS</span>
            <h2>Our process is simple and effective</h2>
          </div>
          <button className="btn btn-green">Get in touch</button>
        </div>

        <div className="process-content">
          <div className="process-image-container">
            <img src={processImg} alt="Landscaping process" />
            <div className="image-overlay-badge">
              <span>Working with passion</span>
            </div>
          </div>
          <div className="process-steps">
            {steps.map((step) => (
              <div className="step-card" key={step.id}>
                <div className="step-info">
                  <span className="step-number">STEP {step.id}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
