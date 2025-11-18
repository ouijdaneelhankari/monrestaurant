import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Si on est sur une autre page, aller sur l'accueil
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Si on est déjà sur l'accueil, scroller directement
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => handleScroll("hero")} style={{ cursor: "pointer" }}>
          MonRestaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScroll("hero")}>Accueil</Nav.Link>
            <Nav.Link onClick={() => handleScroll("gallery")}>Galerie</Nav.Link>
            <Nav.Link onClick={() => handleScroll("services")}>Services</Nav.Link>
            <Nav.Link onClick={() => handleScroll("map")}>Localisation</Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
