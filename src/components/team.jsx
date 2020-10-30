import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import '../css/styles.css';
import Larissa from '../img/team_pics/LarissaCircle.png';
import Ivonne from '../img/team_pics/IvonneCircle.png';
import Nithi from '../img/team_pics/NithiCircle.png';
import Ivy from '../img/team_pics/IvyCircle.png';
import LinkedIn from '../img/social_contact/Icon_LinkedIn.svg';
import Mail from '../img/social_contact/Icon_Mail-03.svg';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container id="landing" style={{
                    paddingTop: 55,
                    paddingBottom: 55
                  }}>
                <h3 id="teamTitle">TEAM</h3><br></br>
                    <Row className="justify-content-md-center">
                        <Col sm={3} style={{
                            paddingBottom: 25,
                          }}>
                            <div class="circular--landscape">
                                <img src={Larissa}
                                    class="rounded img-fluid"
                                    alt="Larissa"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Larissa</h4>
                            <p>Co-Founder</p>

                            <a href="https://www.linkedin.com/in/larissanguyen/">
                                <img border="0"
                                    class=" img-fluid"
                                    alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>
                            <a style={{
                                paddingLeft: 10,
                                paddingBottom: 25,
                              }} href="mailto:larissa@weareimpactful.org">
                                <img border="0"
                                    class=" img-fluid"
                                    alt="Mail Logo" src={Mail} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>
                        </Col>
                        <Col sm={3} style={{
                            paddingBottom: 25,
                          }}>
                            <div class="circular--portrait">
                                <img src={Ivonne}
                                    class="rounded center img-fluid"
                                    alt="Ivonne"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Ivonne</h4>
                            <p>developer • loves birds, visual storytelling, & cooking</p>
                            <a href="https://www.linkedin.com/in/iguzmanl/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>

                            <a style={{
                                paddingLeft: 10,
                              }} href="mailto:ivonne@weareimpactful.org">
                                <img border="0"
                                    class=" img-fluid"
                                    alt="Mail Logo" src={Mail} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>

                        </Col>
                        <Col sm={3} style={{
                            paddingBottom: 25,
                          }}>
                            <div class="circular--portrait">
                                <img src={Nithi}
                                    class="rounded img-fluid" alt="Nithi"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Nithi</h4>
                            <p>developer • loves dancing, traveling, and social impact</p>
                            <a href="https://www.linkedin.com/in/nithi-subbaian/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>
                            <a style={{
                                paddingLeft: 10,
                                paddingBottom: 25,
                              }} href="mailto:nithi@weareimpactful.org">
                                <img border="0"
                                    class=" img-fluid"
                                    alt="Mail Logo" src={Mail} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>

                        </Col>

                        <Col  style={{maxWidth:"400px", paddingBottom: 25,}} sm={3}>
                            <div class="circular--portrait">
                                <img src={Ivy}
                                    class="rounded img-fluid" alt="Ivy"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Ivy</h4>
                            <p>designer •  loves typefaces, kimchi, and triangles</p>
                            <a href="https://www.linkedin.com/in/ivy-l-82214983/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%" style={{height:"30px"}}></img>
                            </a>
                          
                              <a style={{
                                  paddingLeft: 10,
                                  paddingBottom: 25,
                                  height:"30px"
                                  display:"inline-block"
                                }} href="mailto:ivy@weareimpactful.org">
                                  <img border="0"
                                      class=" img-fluid"
                                      alt="Mail Logo" src={Mail} width="10%" height="10%" style={{height:"30px"}}></img>
                              </a>



                        </Col>
                    </Row>
                    <br></br>
                </Container>
            </div>
        )
    }

}
