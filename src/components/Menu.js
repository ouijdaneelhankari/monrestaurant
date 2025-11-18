// MenuRestaurant.jsx
import React from "react";
import "./Menu.css";

const menuData = {
  entrees: [
    { titre: "Salade César", ingredients: "Laitue, poulet, parmesan, croûtons", prix: "8€" },
    { titre: "Soupe du jour", ingredients: "Légumes frais de saison", prix: "6€" },
    { titre: "Bruschetta", ingredients: "Tomates, basilic, pain grillé", prix: "7€" },
  ],
  specialites: [
    { titre: "Tartare de saumon", ingredients: "Saumon frais, citron, câpres", prix: "12€" },
    { titre: "Risotto aux champignons", ingredients: "Riz arborio, champignons, parmesan", prix: "11€" },
  ],
  plats: [
    { titre: "Poulet rôti", ingredients: "Poulet fermier, herbes de Provence", prix: "14€" },
    { titre: "Pâtes Carbonara", ingredients: "Pâtes, œufs, pancetta, parmesan", prix: "13€" },
  ],
  desserts: [
    { titre: "Tiramisu", ingredients: "Mascarpone, café, cacao", prix: "6€" },
    { titre: "Fondant au chocolat", ingredients: "Chocolat noir, beurre, sucre", prix: "7€" },
  ],
};

const Section = ({ id, title, items }) => {
  return (
    <section id={id} className="menu-section">
      <h2>{title}</h2>
      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <h3>{item.titre}</h3>
            <p className="ingredients">{item.ingredients}</p>
            <p className="prix">{item.prix}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuRestaurant = () => {
  return (
    <div>
      <header>
        <h1>Notre Menu</h1>
      </header>
      <nav className="menu-nav">
        <a href="#entrees">Nos Entrées</a>
        <a href="#specialites">Nos Spécialités</a>
        <a href="#plats">Nos Plats</a>
        <a href="#desserts">Nos Desserts</a>
      </nav>
      <main>
        <Section id="entrees" title="Nos Entrées" items={menuData.entrees} />
        <Section id="specialites" title="Nos Spécialités" items={menuData.specialites} />
        <Section id="plats" title="Nos Plats" items={menuData.plats} />
        <Section id="desserts" title="Nos Desserts" items={menuData.desserts} />
      </main>
    </div>
  );
};

export default MenuRestaurant;
