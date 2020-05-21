import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function OurNavBar() {
  return(
  <Navbar bg="primary" variant="dark" id="ourNavBar">
    <Navbar.Brand href="#home">Impactful</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#opportunities">Opportunities</Nav.Link>
      <Nav.Link href="#join">Community</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default OurNavBar;