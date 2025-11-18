import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-hours">
          <h3>Nos Horaires</h3>
          <ul>
            <li>Lundi - Vendredi: 12h00 - 14h30 / 19h00 - 22h30</li>
            <li>Samedi: 12h00 - 15h00 / 19h00 - 23h00</li>
            <li>Dimanche: 12h00 - 15h00</li>
          </ul>
        </div>

        <div id="contact" className="footer-contact">
          <h3>Contact</h3>
          <p>123 Rue de la Gastronomie</p>
          <p>75001 Paris</p>
          <p>Tél : 01 23 45 67 89</p>
        </div>

        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MonRestaurant. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
