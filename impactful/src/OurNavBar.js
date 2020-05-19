import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function OurNavBar() {
  return(
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Impactful</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#opportunites">Opportunites</Nav.Link>
      <Nav.Link href="#pricing">Community</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default OurNavBar;