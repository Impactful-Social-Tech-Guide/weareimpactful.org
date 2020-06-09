import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (
      <div>
        <Container id="landing">
          <Row>
            <Col>
              <h3 id="teamTitle" >socially impactful organizations</h3>

            </Col>
            <Col>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip}
              >
                <a class="float-right" href="https://airtable.com/shrMuN5t9SWMLGSiF" target="_blank">
                  <Button variant="info">+</Button>
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
          <Figure.Caption id="teamTitle"> open website in incognito mode if results don't display</Figure.Caption>
          <br></br>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="airtable-embed">
            <Iframe class="airtable-embed"
              src="https://airtable.com/embed/shrjElLGi3TuooVVf?backgroundColor=orange&viewControls=on" 
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

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      add an organization
    </Tooltip>
  );
}
