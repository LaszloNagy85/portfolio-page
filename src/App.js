import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


const App = () => {
  const title = "Laszlo Nagy";
  const headerLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const home = {
    title: "Be Aspiring",
    subtitle: "Projects that make a difference",
    text: "Check out my projects below",
  };
  const about = {
    title: "About Me",
  };
  const contact = {
    title: "Let's Talk",
  };
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Laszlo Nagy</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={home.title} subtitle={home.subtitle} text={home.text}/>} /> 
        <Route path="/about" render={() => <AboutPage title={about.title} />} /> 
        <Route path="/contact" render={() => <ContactPage title={contact.title}/>} /> 
        
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
