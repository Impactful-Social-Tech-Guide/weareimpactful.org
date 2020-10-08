import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';


export default class jobOpp extends Component {
    render() {
        return (
            <div className="airtTableContent" id="jobOpportunities">
                <Container id="landing" style={{
                    paddingTop: 55,
                    paddingBottom: 55
                  }}>
                    <Row>
                        <Col >
                          <h3 id="teamTitlewo" >JOBS AND OPPORTUNITIES </h3>
                          <p style={{ fontSize:"24px", marginTop:"20px", textAlign: "left"}}>Whether you're just starting out or are looking for your next job, we have opportunities for engineers, designers, and product managers.</p>
                        </Col>
                        <Col >
                        <p style={{fontSize:"24px", marginTop:"40px", textAlign: "left"}}>If you are an organization or business looking for talent, submit a posting here: </p>
                            <a class="float-left" href="https://airtable.com/shrVNKcOkg25ndQT0" target="_blank">
                                <Button style={{ boxShadow: "5px", padding:"10px"}}  bsClass="flat" size="lg">Submit opportunity</Button>
                            </a>
                        </Col>
                    </Row>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="airtable-embed">
                        <Iframe class="airtable-embed" src="https://airtable.com/embed/shrUY2UUvj3qsSI8N?backgroundColor=orange&viewControls=on"
                            frameborder="0" onmousewheel="" width="100%" height="833" style={{ background: "transparent", border: " 1 solid #ccc" }}></Iframe>
                    </div>
                </Container>


                {/* <h2>Want to add an opportunity to our database?   <a href="https://airtable.com/shrVNKcOkg25ndQT0" class="btn btn-default btn-primary btn-lg mr-5">Add Opportunity</a></h2> */}
                <br></br>
            </div>
        )
    }

}
