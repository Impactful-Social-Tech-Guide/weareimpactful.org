import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';

import '../css/styles.css';
import AboutImage from '../img/illustrations/undraw_online_connection_6778.svg';
import CollabImage from '../img/illustrations/undraw_shared_workspace_hwky.svg';


export default class About extends Component {
    render() {
        return (
            <div id="about" className="jumbotron fluid text-dark" class="container border-top pt-4 ">
            <br></br>
                <h1>your space for tech + social impact.</h1>
                <br/><br/>

                <div class="row d-flex justify-content-center">

                    <div class="col">

                        <div className="about-site text-center">

                            <p>
                                Whether you're an (aspiring) engineer, designer, PM, etc, and you’re looking for your next job, meaningful projects to contribute to, or a community of like-minded technologists, Impactful has the information and resources you need to make it possible.
                    </p>
                      <p>
                      <br>
                      </br>
                      If you'd like to join our mailing list please fill out the form below!
                        </p>
                        <Button size="lg" href="https://airtable.com/shrz6v3BtuOsJuQbR">Mailing List.</Button>

                        </div>
                    </div>
                    <div class="col text-center">
                        <img style = {{maxWidth:"330px"}}
                            class="img-fluid"
                            src={AboutImage}
                            alt="For Companies"
                        />
                    </div>
                </div>
                <br></br>




                {/* <div className="about-team">
                    <h2><br/> <br/>The Team</h2>

                    <p>We are 3 women of color in tech who spent our college careers wanting to do good by using tech to tackle climate change issues, empower marginalized communities, and help nonprofits, NGOs, etc. work smarter & faster.</p>
                    <p> Now, we’re making Impactful, a platform that makes it easier for us, and college students like us, to tackle issues that matter. We're compiling a list of open career opportunities in social impact technology and building an online community of impact-driven tech folks.</p>
                </div> */}





            </div>
        )
    }

}
