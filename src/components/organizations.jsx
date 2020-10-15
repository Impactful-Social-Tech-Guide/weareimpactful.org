import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class jobOpp extends Component {
  render() {
    return (
      <div className="organizations">
        <Container style={{ paddingTop: 55, paddingBottom: 55 }}>
            <h1 id="page-smallHeading" >ORGANIZATIONS</h1>
          <Row style={{paddingTop: 15, paddingBottom: 35}}>
            <Col style={{minWidth:"350px"}}>
              <p id="page-body" > If you'd like to explore the work that socially impactful organizations and companies are doing, here is our recommended list.</p>
            </Col>
            <Col style={{minWidth:"350px"}}>
            <p id="page-body" > If you would like to publicize an organization on impactful, submit a posting here: </p>
                <a class="float-left" href="https://airtable.com/shrMuN5t9SWMLGSiF" target="_blank">
                  <Button id="page-button" bsClass="flat" size="lg">Submit organization</Button>
                </a>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="airtable-embed">
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
