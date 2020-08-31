import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">George Wang's Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link as={Nav.Link} to="/">Home</Link>
        <Link as={Nav.Link} to="/resume">Resume</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
