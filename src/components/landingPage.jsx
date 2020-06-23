import React, {Component} from 'react';
import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Image1 from '../img/girl_world.svg';
import Iframe from 'react-iframe';
import Image2 from '../img/newglobe.svg';

export default class LandingPage extends Component {
  render() {
    return (
      <div >
      <h1 >impactful.</h1>
      <br></br>
      <br></br>
      <Container id="landing">
        <Row className="justify-content-md-center">
          <Col id="about" sm={8}>
            <br></br>
            <br></br>
            <h3>Want to use your tech skills to create social impact?</h3>
            <br></br>
            <p style = {{ fontFamily: "CircularStd", fontStyle: "Book"}}>
              Impactful is a platform for technologists to develop their careers in social good by connecting them with socially-impactful opportunities and with other impact-driven technologists.
            </p>
            <p style = {{ fontFamily: "CircularStd"}}>
              Whether you're an (aspiring) engineer, designer, PM, etc, and you’re looking for your next job, meaningful projects to contribute to, or a community of like-minded technologists, Impactful has the information and resources you need to make it possible.
            </p>
          </Col>
          <Col  style = {{ paddingTop:30, paddingBottom: 40  }} sm={4}>
            <img style = {{ textAlign: "center;",maxHeight:"150px",
                paddingBottom: 25
              }}
								class="img-fluid"
								src={Image2}
								alt="For Companies"
						/>
            <br></br>

            <h4>join our slack community</h4>
            <a href='https://airtable.com/shrHRVGAqiv3fVXCH'>
              <Button bsClass="flat" size="lg">Apply</Button>{}</a>
            <br></br>
            <br></br>
            <h4>join our mailing list</h4>
              <a href = "https://airtable.com/shrz6v3BtuOsJuQbR" > <Button bsClass="flat" size="lg">Subscribe</Button></a>
                {''}

            </Col>
          </Row>
          <br></br>
          <Row className="justify-content-md-center">
            <Col>
              <h4>explore opportunities & organizations</h4>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <h1>⇩</h1>
            </Col>
          </Row>
        </Container>
      </div>)
            }
          }
