import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import RestaurantMap from './components/Map';
import Footer from './components/Footer';
import MenuRestaurant from './components/Menu';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title); // Nettoyer state après scroll
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
              <Services />
              <RestaurantMap />
            </>
          }
        />
        <Route path="/menu" element={<MenuRestaurant />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
