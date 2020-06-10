import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import '../css/styles.css';
import Larissa from '../img/LarissaCircle.png';
import Ivonne from '../img/IvonneCircle.png';
import Nithi from '../img/NithiCircle.png';
import Ivy from '../img/IvyCircle.png';
import LinkedIn from '../img/linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container id="landing" style={{
                    paddingTop: 55,
                    paddingBottom: 55
                  }}>
                <h3 id="teamTitle">About the team</h3><br></br>
                    <Row className="justify-content-md-center">
                        <Col sm={3}>
                            <div class="circular--landscape">
                                <img src={Larissa}
                                    class="rounded img-fluid"
                                    alt="Larissa"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Larissa</h4>
                            <p>Developer • Loves to dance, play board games, and garden</p>

                            <a href="https://www.linkedin.com/in/larissanguyen/">
                                <img border="0"
                                    class=" img-fluid"
                                    alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                            </a>
                        </Col>
                        <Col sm={3}>
                            <div class="circular--portrait">
                                <img src={Ivonne}
                                    class="rounded center img-fluid"
                                    alt="Ivonne"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Ivonne</h4>
                            <p>Developer • Loves birds, visual storytelling, & social impact</p>
                            <a href="https://www.linkedin.com/in/iguzmanl/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                            </a>
                        </Col>
                        <Col sm={3}>
                            <div class="circular--portrait">
                                <img src={Nithi}
                                    class="rounded img-fluid" alt="Nithi"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Nithi</h4>
                            <p>Developer • Loves dancing, traveling, and social impact</p>
                            <a href="https://www.linkedin.com/in/nithi-subbaian/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                            </a>

                        </Col>

                        <Col sm={3}>
                            <div class="circular--portrait">
                                <img src={Ivy}
                                    class="rounded img-fluid" alt="Ivy"></img>
                            </div>
                            <h4 class="font-weight-bold dark-grey-text my-4">Ivy</h4>
                            <p>Designer </p>
                            <a href="https://www.linkedin.com/in/ivy-l-82214983/">
                                <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                            </a>

                        </Col>
                    </Row>
                    <br></br>
                </Container>
            </div>
        )
    }

}
