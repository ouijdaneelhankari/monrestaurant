import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu'); // Redirige vers la page du menu
  };

  return (
    <div id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Bienvenue chez MonRestaurant</h1>
        <p>Restaurant cosy, saveurs d’exception.</p>
        <button className="menu-btn" onClick={goToMenu}>
          Découvrez nos plats savoureux
        </button>
      </div>
    </div>
  );
};

export default Hero;
