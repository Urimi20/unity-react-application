import "./Process.css";
import processImg from "../../assets/images/Home_Images/processImg.png";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Na kontaktoni",
      text: "Na kontaktoni përmes formularit tonë ose me telefon për të diskutuar vizionin dhe kërkesat tuaja fillestare.",
    },
    {
      id: "02",
      title: "Caktoni një takim",
      text: "Ne do të vizitojmë ambientin tuaj për të kryer matjet dhe për të kuptuar potencialin unik të hapësirës suaj.",
    },
    {
      id: "03",
      title: "Realizimi i projektit",
      text: "Ekipi ynë i ekspertëve jetëson projektin me saktësi dhe kujdes të veçantë për çdo bimë.",
    },
  ];

  return (
    <section className="process section-padding">
      <div className="container">
        <div className="process-header">
          <div className="header-left">
            <span className="subtitle">PROCESI YNË</span>
            <h2>Procesi ynë është i thjeshtë dhe efektiv</h2>
          </div>
          <button className="btn btn-green">Na kontaktoni</button>
        </div>

        <div className="process-content">
          <div className="process-image-container">
            <img src={processImg} alt="Procesi i rregullimit të peizazhit" />
            <div className="image-overlay-badge">
              <span>Punojmë me pasion</span>
            </div>
          </div>
          <div className="process-steps">
            {steps.map((step) => (
              <div className="step-card" key={step.id}>
                <div className="step-info">
                  <span className="step-number">HAPI {step.id}</span>
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
