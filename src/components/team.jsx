import React, { Component } from 'react';
import '../App.css';
import '../css/styles.css';
import Larissa from '../img/larissa.jpg';
import Ivonne from '../img/ivonne.JPG';
import Nithi from '../img/nithi.jpg';
import LinkedIn from '../img/linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <div class="text-center pt-4 border-top container " id="team">
              <br></br>
                <h1>meet the team.</h1>

                <br></br>
                <p>We are 3 women of color in tech who spent our college careers wanting to do good by using tech to tackle climate change issues, empower marginalized communities, and help nonprofits, NGOs, etc. work smarter & faster.</p>
                <p> Now, we’re making <b>Impactful</b>, a platform that makes it easier for us, and college students like us, to tackle issues that matter. We are compiling a list of open career opportunities in social impact technology and building an online community of impact-driven tech folks.</p>
                <br></br>

                <div class="row text-center justify-content-center">


                    <div class="col-md-3">
                        <div class="circular--landscape">
                            <img src={Larissa}
                                class="rounded img-fluid"
                                alt="Larissa"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Larissa</h4>
                        <p>CS @ Yale</p>
                        <p>Developer • Loves to dance, play board games, and garden</p>

                        <a href="https://www.linkedin.com/in/larissanguyen/">
                            <img border="0"
                                class=" img-fluid"
                             alt="LinkedIn Logo"  src={LinkedIn} width="10%" height="10%"></img>
                        </a>

                    </div>

                    <div class="col-md-3">
                        <div class="circular--portrait">
                            <img src={Ivonne}
                                class="rounded center img-fluid"
                                 alt="Ivonne"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Ivonne</h4>
                        <p>CS @ Cal Poly SLO 2019</p>
                        <p>Developer • Loves birds, visual storytelling, & social impact</p>
                        <a href="https://www.linkedin.com/in/iguzmanl/">
                            <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                        </a>
                    </div>

                    <div class="col-md-3">
                <div class="circular--portrait">
                            <img src={Nithi}
                                class="rounded img-fluid" alt="Nithi"></img>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text my-4">Nithi</h4>
                        <p>Electrical engineer @ Cooper Union 2020</p>
                        <p>Developer • Loves dancing, traveling, and social impact</p>
                        <a href="https://www.linkedin.com/in/nithi-subbaian/">
                            <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                        </a>
                    </div>

                </div>
                <br></br>

            </div>


        )
    }

}
