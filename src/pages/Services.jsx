import React from 'react';

const services = [
  {
    title: "Website Development",
    description: "Get mobile-friendly websites that are fast, secure, and rank well on Google. Perfect for any business size.",
    icon: "🌐", // You can replace this with an actual icon or image.
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with personalized marketing strategies that drive traffic and generate leads.",
    icon: "📈",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on search engines with our expert SEO solutions tailored to your business goals.",
    icon: "🔍",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-heading">Our Services</h1>
        <p className="services-subheading">
          At <strong>MEHVERSE</strong>, we specialize in crafting tailored solutions that deliver real results for your business.
        </p>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
