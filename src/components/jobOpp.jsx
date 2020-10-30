import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class jobOpp extends Component {
    render() {
        return (
            <div className = "jobOpportunities" id="jobOpportunities">
                <Container style={{ paddingTop: 55, paddingBottom: 55}}>
                    <h1 id="page-smallHeading" >JOBS AND OPPORTUNITIES </h1>
                    <Row style={{paddingTop: 15, paddingBottom: 35}}>
                      <Col style={{minWidth:"350px"}}>
                        <p id="page-body"> Whether you're just starting out or are looking
                          for your next job, we have opportunities for engineers, designers, and product managers.</p>
                      </Col>
                      <Col style={{minWidth:"350px"}}>
                      <p id="page-body" >If you are an organization or business looking for talent, submit a posting here: </p>
                          <a class="float-left" href="https://airtable.com/shrVNKcOkg25ndQT0" target="_blank">
                              <Button id="page-button"  bsClass="flat" size="lg">Submit opportunity</Button>
                          </a>
                      </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="airtable-embed">
                        <Iframe class="airtable-embed" src="https://airtable.com/embed/shrUY2UUvj3qsSI8N?backgroundColor=orange&viewControls=on"
                            frameborder="0" onmousewheel="" width="100%" height="833" style={{ background: "transparent", border: " 1 solid #ccc" }}></Iframe>
                    </div>
                </Container>
            </div>
        )
    }

}
