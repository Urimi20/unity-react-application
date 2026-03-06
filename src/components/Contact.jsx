import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'e pergjithjithje'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Formulari i dorëzuar:', formData);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Dërgoni mesazh',
      description: ' kontaktoni nëpërmes email për pyetje të hollta dhe diskutime mbi projektin.',
      contact: 'contact@gardenview.com',
      type: 'email'
    },
    {
      icon: '📞',
      title: 'Thirrani telefon',
      description: 'Thirrani direkt për asistencë të menjëhershme dhe çështjet e rëndësishme.',
      contact: '(123) 456 - 7890',
      type: 'phone'
    },
    {
      icon: '📍',
      title: 'Vizitoni zyrën tonë',
      description: 'Ndaleni në showroom tonë për të diskutuar projektin tuaj personalisht.',
      contact: 'Rruga Kopshti 123, Qyteti i Gjelbëra, KG 12345',
      type: 'address'
    },
    {
      icon: '⏰',
      title: 'Orari i punës',
      description: 'Jemi të gatshë t\'ju ndihmojnë gjatë këtyre orare.',
      contact: 'Hën-E Prem: 8AM-6PM, Sat: 9AM-4PM',
      type: 'hours'
    }
  ];

  const faqs = [
    {
      question: 'Cfarë është përvoja juaj në peisazhin?',
      answer: 'Kemi mbi shumë vjet përvojë në dizajnim profesional të peisazheve, instalim dhe mirëmbajtje. Ekipi ynë ka përfunduar mbi shumë shumë projekte të suksesshme në pronësi rezidenciale dhe komerciale.'
    },
    {
      question: 'Në cilat zona punoni?',
      answer: 'Ne shërbejmë kryesisht zonën metropolitane dhe periferitë e saj. Kontaktoni për të konfirmuar nëse shërbejmë zonën tuaj specifike - ne gjithmonë po zgjerojmë zonën tonë të shërbimit!'
    },
    {
      question: 'A ofroni shërbime peisazhimi komercial?',
      answer: 'Po! Ne ofrojmë shërbime të plota peisazhimi komercial duke përfshirë komplekse zyra, hapësira dyqanore dhe kampusë korporate. Kontaktoni për një propozim komercial të personalizuar.'
    },
    {
      question: 'A keni shembuj të punëve të mëparshme?',
      answer: 'Absolutisht! Kemi një portofoliot të gjerë që tregon projektet tona të përfunduara. Vizitoni faqen tonë për të parë shembuj të dizajneve të peisazheve, instalimeve dhe projekteve të mirëmbajtjes.'
    },
    {
      question: 'Si mund të marr një ofertë për projektin tim?',
      answer: 'Marrja e një oferte është e lehtë! Plotësoni formularin tonë të kontaktit, telefononi direkt, ose përdorni kalkulatorin tonë online ofertash. Ne përgjigjemi zakonisht brenda 24 orë me një vlerësim të detajuar.'
    },
    {
      question: 'Llojet e pagesave cilat pranoni?',
      answer: 'Ne pranojmë metoda të ndryshme pagesash duke përfshirë para, çek, karta krediti dhe opsione financimi për projekte më të mëdha. Planet e pagesave janë të disponueshme për projekte kualifikuese.'
    }
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>Ready to transform your outdoor space? Our expert team is here to bring your garden dreams to life with professional landscaping services.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header">
                <h2>Reach out to us</h2>
                <p>Multiple ways to connect with our landscaping experts for your project needs.</p>
              </div>
              
              <div className="contact-methods">
                {contactInfo.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-content">
                      <h3>{method.title}</h3>
                      <p>{method.description}</p>
                      <a 
                        href={method.type === 'email' ? `mailto:${method.contact}` : 
                           method.type === 'phone' ? `tel:${method.contact}` : '#'}
                        className="contact-link"
                      >
                        {method.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-section">
              <div className="section-header">
                <h2>Send us a message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Emri Juaj *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Adresa Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Numri i Telefonit</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Lloji i Shërbimit</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="e pergjithjithje">Pyetje e Përgjithshme</option>
                      <option value="design">Dizajnim i Kopshtit</option>
                      <option value="maintenance">Mirëmbajtja e Kopshtit</option>
                      <option value="planting">Mbjellja e Luleve</option>
                      <option value="lawn">Kujdesi i Gazonit</option>
                      <option value="commercial">Shërbime Komerciale</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Detajet e Projektit *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tregoni për projektin tuaj, afatin dhe kërkesat specifike..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                  ></textarea>
                </div>
                
                <button type="submit" className={`submit-button ${isSubmitted ? 'submitted' : ''}`}>
                  {isSubmitted ? 'Mesazhi U Dërgua!' : 'Dërgo Mesazhin'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Pyetje të Bëra</h2>
            <p>Përgjigje të shpejta për pyetjet e zakonshme rreth shërbimeve tona peisazhimore.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
