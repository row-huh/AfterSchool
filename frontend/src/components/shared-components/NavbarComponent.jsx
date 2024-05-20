// src/NavbarComponent.js
import logo from "../../assets/ai.png"
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar variant="dark" expand="lg"className='navbar-bg'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo-img"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
