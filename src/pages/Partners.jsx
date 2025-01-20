import React from 'react';

const DigitalPartners = () => {
  const partners = [
    { name: 'EduCareer', logo: 'educareer.jpg' },
    { name: 'Ghunchas', logo: 'ghunchas.jpg' },
    { name: 'ALT-ED', logo: 'alted.png' },
    { name: 'she-Guard', logo: 'she-guard.png' },
  ];

  return (
    <section className="digital-partners">
      <h2 className="section-title">
        <span>Our Trusted</span> Digital Partners
      </h2>
      <div className="partners-slider">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img
              src={`/images/${partner.logo}`}
              alt={partner.name}
              className="partner-logo"
            />
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalPartners;
