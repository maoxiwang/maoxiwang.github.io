import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand >George Wang's Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Projects</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
