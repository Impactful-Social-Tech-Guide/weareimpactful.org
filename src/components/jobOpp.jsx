import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Container, Row, Col, Figure } from 'react-bootstrap';


export default class jobOpp extends Component {
    render() {
        return (
            <div>
                <Container id="landing">
                    <h3 id="teamTitle" >jobs and opportunities </h3>
                    <Figure.Caption id="teamTitle"> open website in incognito Mode if opportunities don't display</Figure.Caption>
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
