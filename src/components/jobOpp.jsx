import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';


export default class jobOpp extends Component {
    render() {
        return (
            <div>
                <Container id="landing">
<<<<<<< HEAD
                    <h3 id="teamTitle" >jobs and opportunities </h3>
                    <p  id="teamTitle" >  open website in incognito Mode if opportunities don't display</p>
=======
                    <Row>
                        <Col>
                            <h3 id="teamTitle" >jobs and opportunities </h3>

                        </Col>
                        <Col>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderTooltip}
                        >
                            <a class="float-right" href="https://airtable.com/shrVNKcOkg25ndQT0" target="_blank">
                                <Button variant="info">+</Button>
                            </a>
                        </OverlayTrigger>
                        </Col>
                    </Row>


                    <Figure.Caption id="teamTitle"> open website in incognito mdde if results don't display</Figure.Caption>
>>>>>>> 4e559dff389753394a949b54cd167026fd2bcf4d
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

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            add a job opportunity
        </Tooltip>
    );
}