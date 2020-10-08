import React, {Component} from 'react';
import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Iframe from 'react-iframe';
import TitleWithLogo from '../img/title_with_logo.png';

export default class LandingPage extends Component {
  render() {
    return (
      <Container id="rectangle-2" style={{
        paddingTop: 55,
        // paddingBottom: 55
      }}>
        <Row className="justify-content-md-center">
        <br></br><br></br>
        <img
        style={{marginLeft:"15px", marginTop:"50px", marginBottom: "50px"}}
        class="titleWithLogo" // Todo: add styling, remove need for br tag
        src={TitleWithLogo}
        />

          </Row>
          <Row  className="justify-content-md-center">
            <p style = {{ fontFamily: "CircularStd",
               fontStyle: "Book",
                marginLeft:"50px", marginRight:"50px", marginTop: "130px", marginBottom:"130px", fontSize:"36px",
                height: "202px",
                width: "595px",
                opacity: 0.9,
                color: "#FFF",
                fontSize: "42px",
                fontWeight: 300,
                letterSpacing: "1.15px",
                lineHeight: "58px",
                textAlign: "center",
              }}>
                  impactful is your place to search for opportunities in social impact technology.
                  </p></Row>
          <Row className="justify-content-md-center" style={{marginBottom:"190px"}}>
          <Col  sm={4}>
<a id="landingLink"  href="#jobOpportunities" className="landingLink">Explore Jobs</a>
          </Col><Col sm={4}>
          <a id="landingLink" href="#joinCommunity" className="landingLink">Join Our Community</a>

          </Col><Col sm={4}>
          <a id="landingLink" href="#aboutUs" className="landingLink">Learn More</a>
          </Col>

          </Row>
          </Container>)
            }
          }
