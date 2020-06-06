import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function OurNavBar() {
  return (
// <Container>
    <Navbar bg="primary" variant="dark" id="ourNavBar">
    <Navbar.Brand href="#">Impactful</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#opportunities">Opportunities</Nav.Link>
      <Nav.Link href="#community">Community</Nav.Link>
      <Nav.Link href="#team">About Us</Nav.Link>
    </Nav>
  </Navbar>
// </Container>
)
}

export default OurNavBar;
