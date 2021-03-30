import React, { useState } from "react";
import "../App.css";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setcolor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          collapseOnSelect
          className={nav ? "nav active" : "nav"}
        >
          <Container>
            <Navbar.Brand className="navLogo font-weight-bold" href="#home">
              <Image roundedCircle width={120} src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home" className="mr-3 navLinks ">
                  <span className="btn">Home</span>
                </Nav.Link>
                <Nav.Link className="mr-3 navLinks " href="#features">
                  <span className="btn">Services</span>
                </Nav.Link>
                <Nav.Link className="mr-3 navLinks " href="#pricing">
                  <span className="btn"> Portfolio</span>
                </Nav.Link>
                <Nav.Link className="mr-3 navLinks " href="#about">
                  <span className="btn"> About Us</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="mainCon"></main>
      <div>
        <div className="textwithcontact">
          <div className="text">
            <h2>Your Ideas, Our Process</h2>
          </div>
          <p className="dummy">
            Our fast-paced software development methodologies and techniques are
            used to put your idea through an epic process, as we shape your
            thoughts into reality through the power of technology.
          </p>
          <div className="button">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
