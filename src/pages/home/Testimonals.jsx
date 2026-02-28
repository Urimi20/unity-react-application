import "./Testimonals.css";

const Testimonials = () => {
  const row1 = [
    {
      name: "John Carter",
      handle: "@john_c",
      text: "Fantastic landscaping service with remarkable results. Highly recommended!",
    },
    {
      name: "Sophie Moore",
      handle: "@sophi_m",
      text: "Transformed our yard into a beautiful outdoor oasis, absolutely stunning.",
    },
    {
      name: "Matt Cannon",
      handle: "@matt_c",
      text: "Exceptional service and breathtaking results. Our garden looks amazing!",
    },
    {
      name: "Lilly Woods",
      handle: "@lilly_w",
      text: "Highly professional team delivering top-notch landscaping every time.",
    },
  ];

  const row2 = [
    {
      name: "Sandy H.",
      handle: "@sandy_h",
      text: "The transformation of our space couldn't be better. Expert work!",
    },
    {
      name: "Patrick Meyer",
      handle: "@patrick_m",
      text: "Expert landscapers who deliver incredible results. Our yard is gorgeous!",
    },
    {
      name: "Kathie Corl",
      handle: "@kathie_c",
      text: "Unmatched expertise and dedication to landscaping perfection every time.",
    },
    {
      name: "Andy Smith",
      handle: "@andy_s",
      text: "Exceeded all our expectations with their landscaping skills and creativity.",
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
          <span className="subtitle">● TESTIMONIALS</span>
          <h2>
            What our clients say <br /> about our work
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
        <button className="btn btn-green">Get in touch</button>
      </div>
    </section>
  );
};

export default Testimonials;
