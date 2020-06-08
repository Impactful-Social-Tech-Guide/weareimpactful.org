import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image1 from '../img/illustrations/intro1.svg';
import Iframe from 'react-iframe'


export default class LandingPage extends Component {
    render() {
        return (
            <div >
                <h1>impactful</h1>
                <br></br><br></br>
                <Container id="landing">
                    <Row className="justify-content-md-center">
                        <Col id="about" sm={8}>
                            <h3>want to use your tech skills to create social impact?</h3>
                            <br></br>
                            <p>
                                Impactful is a platform for technologists to develop their careers in social good by connecting them with socially-impactful opportunities and with other impact-driven technologists.
                        </p>
                            <p>
                                Whether you're an (aspiring) engineer, designer, PM, etc, and you’re looking for your next job, meaningful projects to contribute to, or a community of like-minded technologists, Impactful has the information and resources you need to make it possible.
                        </p>
                        </Col>
                        <Col sm={4}>
                            <h4>join our slack community</h4>
                            <a href='https://airtable.com/shrHRVGAqiv3fVXCH'>
                                <Button variant="outline-info" size="lg">Apply</Button>{}
                            </a>
                            <br></br><br></br><br></br>
                            <h4>join our mailing list</h4>
                            <a href="https://airtable.com/shrz6v3BtuOsJuQbR">
                                <Button variant="outline-info" size="lg">Subscribe</Button>{''}
                            </a>

                        </Col>
                    </Row>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col><h4>explore opportunities</h4></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col><h1>⇩</h1></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}