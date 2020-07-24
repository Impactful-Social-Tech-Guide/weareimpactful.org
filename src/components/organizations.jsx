import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (
      <div>
        <Container id="landing"  style={{
            paddingTop: 55,
            paddingBottom: 55
          }}>
          <Row>
            <Col>
              <h3 id="teamTitle" >Socially impactful organizations</h3>

            </Col>
            <Col>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip}
              >
                <a class="float-right" href="https://airtable.com/shrMuN5t9SWMLGSiF" target="_blank">
                  <Button bsClass="flat" size="lg">add an organization</Button>
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
          <p id="teamTitle" >filter results on desktop</p>

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

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      add an organization
    </Tooltip>
  );
}
