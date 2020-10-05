import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (
      <div id="joinCommunity">
        <Container id="landing"  style={{
            paddingTop: 55,
            paddingBottom: 55
          }}>
          <Row>
            <Col>
            <h5 id="teamTitle" >ABOUT US</h5>
              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              Impactful bridges the gap between job-seekers and opportunities in public interest technology, and brings together a group of like-minded thinkers interested in exploring and learning more about technology and social impact.
              </p>

              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              Founded in 2020, we are backed by Mozilla's Spring MVP Lab and The New America Foundation.
              </p>

            </Col>
            <Col>
              <p style={{ fontSize:"24px", marginTop:"40px", textAlign: "left"}}>
              Have any feedback, questions, or comments about our platform? Looking to collaborate or join our team? Please drop us a line at 
              <a style={{color:"white"}} href="mailto:hello@weareimpactful.org"> hello@weareimpactful.org</a>

              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:"120px", marginBottom:"24px"}}>
          <Col  sm={4}>
<a id="footerLink"  href="#jobOpportunities" className="footerLink">Explore Jobs</a>
          </Col><Col sm={4}>
          <a id="footerLink" href="#joinCommunity" className="footerLink">Join Our Community</a>
          </Col>
</Row>
        </Container>
      </div>
    )
  }

}