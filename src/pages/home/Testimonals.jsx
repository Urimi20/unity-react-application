import "./Testimonals.css";

const Testimonials = () => {
  const row1 = [
    {
      name: "John Carter",
      handle: "@john_c",
      text: "Shërbim fantastik i rregullimit të peizazhit me rezultate të jashtëzakonshme. I rekomandoj plotësisht!",
    },
    {
      name: "Sophie Moore",
      handle: "@sophi_m",
      text: "E transformuan oborrin tonë në një oaz të vërtetë natyror. Rezultati është thjesht mahnitës.",
    },
    {
      name: "Matt Cannon",
      handle: "@matt_c",
      text: "Shërbim cilësor dhe rezultate që të lënë pa frymë. Kopshti ynë duket i mrekullueshëm!",
    },
    {
      name: "Lilly Woods",
      handle: "@lilly_w",
      text: "Ekip tejet profesional që ofron cilësi maksimale në çdo projekt rregullimi.",
    },
  ];

  const row2 = [
    {
      name: "Sandy H.",
      handle: "@sandy_h",
      text: "Transformimi i hapësirës sonë nuk mund të ishte më i mirë se aq. Punë ekspertësh!",
    },
    {
      name: "Patrick Meyer",
      handle: "@patrick_m",
      text: "Peizazhistë profesionistë që ofrojnë rezultate të pabesueshme. Oborri ynë është i shkëlqyer!",
    },
    {
      name: "Kathie Corl",
      handle: "@kathie_c",
      text: "Përvojë e pakrahasueshme dhe përkushtim maksimal drejt përsosmërisë në çdo detaj.",
    },
    {
      name: "Andy Smith",
      handle: "@andy_s",
      text: "Tejkaluan të gjitha pritshmëritë tona me aftësitë e tyre krijuese dhe profesionale.",
    },
  ];

  const Card = ({ rev }) => (
    <div className="testimonial-card">
      <div className="card-top">
        <div className="client-img">
          <img
            src={`https://i.pravatar.cc/150?u=${rev.handle}`}
            alt={rev.name}
          />
        </div>
        <div className="client-meta">
          <h4>
            {rev.name} <span className="verify-icon">✔</span>
          </h4>
          <span>{rev.handle}</span>
        </div>
      </div>
      <p>"{rev.text}"</p>
    </div>
  );

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="testimonials-header text-center">
          <span className="subtitle">● PËRSHTYPYET E KLIENTËVE</span>
          <h2>
            Çfarë thonë klientët tanë <br /> për punën tonë
          </h2>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-row scroll-left">
          <div className="marquee-content">
            {row1.map((rev, i) => (
              <Card key={`r1-${i}`} rev={rev} />
            ))}
            {row1.map((rev, i) => (
              <Card key={`r1-dup-${i}`} rev={rev} />
            ))}
          </div>
        </div>

        <div className="marquee-row scroll-right">
          <div className="marquee-content">
            {row2.map((rev, i) => (
              <Card key={`r2-${i}`} rev={rev} />
            ))}
            {row2.map((rev, i) => (
              <Card key={`r2-dup-${i}`} rev={rev} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-50">
        <button className="btn btn-green">Na kontaktoni</button>
      </div>
    </section>
  );
};

export default Testimonials;
