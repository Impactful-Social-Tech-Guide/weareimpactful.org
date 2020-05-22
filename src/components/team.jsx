import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../css/styles.css';
import Larissa from '../img/larissa.jpg';
import Ivonne from '../img/ivonne.JPG';
import Nithi from '../img/nithi.jpg';

export default class Footer extends Component {
    render() {
        return (
            <div class="text-center pt-4 border-top container ">
                <h1>meet the team.</h1>
                
                <br></br>
                <p>We are 3 women of color in tech who spent our college careers wanting to do good by using tech to tackle climate change issues, empower marginalized communities, and help nonprofits, NGOs, etc. work smarter & faster.</p>
                <p> Now, we’re making <b>Impactful</b>, a platform that makes it easier for us, and college students like us, to tackle issues that matter. We're compiling a list of open career opportunities in social impact technology and building an online community of impact-driven tech folks.</p>
                <br></br>
                
                <div class="row text-center justify-content-center">

                    
                    <div class="col-md-3">
                        <div class="circular--landscape">
                            <img src={Larissa}
                                class="rounded img-fluid"
                                alt="Picture of Larissa"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Larissa</h4>
                        <p>CS @ Yale</p>
                        <p>Software Engineer Loves to dance, play board games, and garden</p>

                    </div>

                    <div class="col-md-3">
                        <div class="circular--portrait">
                            <img src={Ivonne}
                                class="rounded center img-fluid"
                                 alt="Picture of Ivonne"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Ivonne</h4>
                        <p>CS @ Cal Poly SLO 2019</p>
                        <p>Software Engineer • Loves birds, visual storytelling, & social impact</p>
                    </div>

                    <div class="col-md-3">
                <div class="circular--portrait">
                            <img src={Nithi}
                                class="rounded img-fluid" alt="Picture of Nithi"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Nithi</h4>
                        <p>Electrical engineer @ Cooper Union 2020</p>
                        <p>developer; loves dancing, traveling, and social impact</p>
                    </div>

                </div>
                <br></br>

            </div>


        )
    }

}
