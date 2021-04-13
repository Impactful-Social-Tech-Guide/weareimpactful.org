import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Button } from 'react-bootstrap';


export default class jobOpp extends Component {
  render() {
    return (
      <div className="organizations">
        <Container style={{ paddingTop: 76, paddingBottom: 55 }}>
            <h1 id="page-smallHeading" >ORGANIZATIONS</h1>
          <Row style={{paddingTop: 15, paddingBottom: 64}}>
            <div className="col-md-6">
              <p id="page-body" > If you'd like to explore the work that socially impactful organizations and companies are doing, here is our recommended list.</p>
            </div>
            <div className="col-md-6">
            <p id="page-body" > If you would like to publicize an organization on Impactful, submit a posting here: </p>
                <a className="float-left" href="https://airtable.com/shrMuN5t9SWMLGSiF" target="_blank"  rel="noopener noreferrer" >
                  <Button id="page-button" size="lg">Submit organization</Button>
                </a>
            </div>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="airtable-embed">
          <Iframe className="airtable-embed"
              src="https://airtable.com/embed/shrKrkfBWYL8KtAkV?backgroundColor=orange&layout=card&viewControls=on"
              frameborder="0" onmousewheel="" width="100%" height="800" style={{
              background: 'transparent',
              border: ' 1 solid #ccc'
            }}></Iframe>
          </div>

        </Container>
        <br></br>
      </div>
    )
  }

}
