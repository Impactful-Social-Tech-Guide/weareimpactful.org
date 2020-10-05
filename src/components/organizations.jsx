import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (
      <div className="airtTableContent">
        <Container id="landing"  style={{
            paddingTop: 55,
            paddingBottom: 55
          }}>
          <Row>
            <Col>
              <h3 id="teamTitle" >ORGANIZATIONS</h3>
              <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>
              If you'd like to explore the work that socially impactful organizations and companies are doing, here is our recommended list. 
              </p>

            </Col>
            <Col>
            <p style={{fontSize:"24px", marginTop:"40px", textAlign: "left"}}>
            If you would like to publicize an organization on impactful, submit a posting here:
              </p>

                <a class="float-left" href="https://airtable.com/shrMuN5t9SWMLGSiF" target="_blank">
                  <Button bsClass="flat" size="lg">Submit organization</Button>
                </a>
            </Col>
          </Row>

          <br></br>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="airtable-embed">
          <Iframe class="airtable-embed"
              src="https://airtable.com/embed/shrKrkfBWYL8KtAkV?backgroundColor=orange&layout=card&viewControls=on"
              frameborder="0" onmousewheel="" width="100%" height="800" style={{
              background: "transparent",
              border: " 1 solid #ccc"
            }}></Iframe>
          </div>

        </Container>
        <br></br>
      </div>
    )
  }

}