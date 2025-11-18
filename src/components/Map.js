import React from "react";
import "./Map.css";

const RestaurantMap = () => {
  const address = "55 C Impasse des Rosiers, 74970 Marignier, France";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}&z=17&hl=fr`;

  return (
    <section id="map" className="map-section">
      <h2>Où nous trouver</h2>
      <div className="map-container">
        <iframe
          title="Restaurant Location"
          src={googleMapsUrl + "&output=embed"}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default RestaurantMap;
