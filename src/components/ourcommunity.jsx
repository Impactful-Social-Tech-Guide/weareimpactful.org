import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (
      <div className="airtTableContent" id="joinCommunity">
        <Container id="landing"  style={{
            paddingTop: 55,
            paddingBottom: 55
          }}>
          <Row>
            <Col>
            <h5 id="teamTitle" >OUR COMMUNITY</h5>
            <h3 id="teamTitle" >Slack Channel</h3>
              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              Apply to join our active Slack channel where members share resources and discuss social impact and technology. 
              </p>

              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              You'll have access to our community calls and speaker events, where we discuss social impact topics and careers.
              </p>
              <a  class="float-left"  href='https://airtable.com/shrHRVGAqiv3fVXCH'target="_blank">
              <Button bsClass="flat" size="lg">Apply</Button>
              </a>
            </Col>
            <Col>
            <h3 id="teamTitle" >Mailing List</h3>
              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              Sign-up to receive updates about the impactful website and news about social impact opportunites.
              </p>
              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
Anyone can subscribe for free, and you can unsubscribe at any time.

              </p>
              <a  class="float-left"  href="https://airtable.com/shrz6v3BtuOsJuQbR" target="_blank"> 
              <Button bsClass="flat" size="lg">Subscribe</Button>
              </a>

            </Col>
          </Row>
        </Container>
        <br></br>
      </div>
    )
  }

}