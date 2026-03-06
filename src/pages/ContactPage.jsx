import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'e pergjithjithje'
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => ({
      id: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    }));
    setPhotos([...photos, ...newPhotos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Mesazhi u dërgua me sukses!');
      alert('Mesazhi juaj u dërgua me sukses! Do të kontaktoemi së shpejt.');
      setFormData({ name: '', email: '', phone: '', message: '', service: 'e pergjithjithje' });
      setPhotos([]);
    }, 1500);
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const removePhoto = (photoId) => {
    setPhotos(photos.filter(photo => photo.id !== photoId));
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Dërgoni mesazh',
      description: 'Kontaktoni nëpërmes email për pyetje të hollta dhe diskutime mbi projektin.',
      contact: 'contact@gardenview.com',
      type: 'email'
    },
    {
      icon: '📞',
      title: 'Thirrani telefon',
      description: 'Thirrani direkt për asistencë të menjëhershme dhe çështjet e rëndësishme.',
      contact: '+355 123 456 7890',
      type: 'phone'
    },
    {
      icon: '📍',
      title: 'Vizitoni zyrën tonë',
      description: 'Vjeni në zyrën tonë për të diskutuar projektin tuaj personalisht.',
      contact: 'Rruga "Gjelbëra" 123, Prishtinë, Shqipëri',
      type: 'address'
    },
    {
      icon: '⏰',
      title: 'Orari i punës',
      description: 'Jemi të gatshë për ju ndihmojnë gjatë këtyre ore.',
      contact: 'Hën-E Prem: 8AM-6PM, Sat: 9AM-4PM',
      type: 'hours'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Kontaktoni</h1>
            <p>Na kontaktoni për të transformuar hapësirën tuaj në një oazë të mahnitshme.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header">
                <h2>Mënyra të Kontaktonit</h2>
                <p>Zgjidhni metodën që ju përshtat më shumë për të na kontaktuar.</p>
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
                <h2>Dërgoni Mesazh</h2>
                <p>Plotësoni formularin më poshtë dhe do të ju kthejmë sa më shpejt të mundshëm.</p>
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
                      placeholder="+355 123 456 7890"
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
                      <option value="dizajnim">Dizajnim i Kopshtit</option>
                      <option value="mirëmbajtje">Mirëmbajtja e Kopshtit</option>
                      <option value="mbjellja">Mbjellja e Luleve</option>
                      <option value="kujdesi">Kujdesi i Gazonit</option>
                      <option value="komercial">Shërbime Komerciale</option>
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
                
                <div className="photo-upload-section">
                  <label htmlFor="photos">Ngarkoni Foto (Opsionale)</label>
                  <div className="photo-upload-area">
                    <input
                      type="file"
                      id="photos"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="photo-input"
                    />
                    <div className="photo-upload-text">
                      Klikoni për të zgjedhur foto ose vizatoni dhe zvarrini këtu
                    </div>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="photo-preview">
                      <h4>Fotot e Ngarkuara:</h4>
                      <div className="photo-grid">
                        {photos.map((photo, index) => (
                          <div key={index} className="photo-item">
                            <img src={photo.id} alt={photo.name} />
                            <div className="photo-info">
                              <span className="photo-name">{photo.name}</span>
                              <span className="photo-size">{photo.size}</span>
                              <button 
                                type="button" 
                                className="remove-photo"
                                onClick={() => removePhoto(photo.id)}
                              >
                                Fshije
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <button type="submit" className={`submit-button ${isSubmitted ? 'submitted' : ''}`}>
                  {isSubmitted ? 'Mesazhi U Dërgua!' : 'Dërgo Mesazhin'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
