import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "Sa përvojë keni në fushën e peizazhit?",
      a: "Kemi disa vite përvojë në projektimin dhe realizimin e hapësirave të jashtme, duke ofruar zgjidhje të personalizuara sipas kërkesave të klientëve.",
    },
    {
      q: "Në cilat zona të New York-ut punoni?",
      a: "Ne operojmë në zona të ndryshme të New York-ut dhe rrethinës. Mund të na kontaktoni për të konfirmuar nëse mbulojmë zonën tuaj.",
    },
    {
      q: "A ofroni shërbime peizazhi për biznese?",
      a: "Po, ofrojmë shërbime si për klientë individualë ashtu edhe për biznese, duke përfshirë mirëmbajtje dhe projekte të plota të gjelbërimit.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header text-center">
          <span className="subtitle">● PYETJE TË SHPESHTA</span>
          <h2>Keni pyetje?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="faq-q">
                <h4>{f.q}</h4>
                <button className="faq-arrow-btn">
                  <span>{activeIndex === index ? "↓" : "→"}</span>
                </button>
              </div>

              <div className="faq-a-container">
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
