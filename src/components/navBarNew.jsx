import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';


export default class NavBarNew extends Component {
    render() {
        return(
<div class="header" id="ourHeaderNav">
    <Container id="landing">
    <p>We just launched on Product Hunt! Check out our <a id="phlink" href="https://www.producthunt.com/posts/impactful">launch page.</a></p>

    </Container>
</div>
        )
    }
}