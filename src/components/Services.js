import React from "react";
import "./Services.css";

const services = [
  {
    titre: "Cuisine Maison",
    description: "Des plats préparés avec des ingrédients frais et locaux.",
    icon: "🍲"
  },
  {
    titre: "Ambiance Conviviale",
    description: "Un cadre chaleureux pour partager de bons moments.",
    icon: "🏠"
  },
  {
    titre: "Service Rapide",
    description: "Une équipe attentionnée pour vous servir rapidement.",
    icon: "⏱️"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Nos Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card ">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.titre}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
