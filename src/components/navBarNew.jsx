import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBarNew extends Component {
    render() {
        return(
<Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">impactful</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#link">community</Nav.Link>
            <NavDropdown title="search for opportunities" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">jobs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">organizations</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">add to our database!</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
</Navbar>
        )
    }
}