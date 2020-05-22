import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../css/styles.css';
import CollabImage from '../img/illustrations/undraw_shared_workspace_hwky.svg';
import ConferenceCall from '../img/illustrations/undraw_conference_call_b0w6.svg';

export default class Footer extends Component {
    render() {
        return (
            <div  className="jumbotron fluid text-dark" class="container border-top pt-4 ">
                
                <h1>join our community.</h1>
                <br/><br/>

                <div class="row d-flex justify-content-center">
                    <div class="col text-right">
                        <img 
                            class="img-fluid"
                            src={ConferenceCall}
                            alt="For Companies"
                        />
                    </div>

                    <div class="col">

                        <div className="community-blurb" class="text-center">
                            <br/><br/><br/><br/>
                            <p>We are curating a network of technologists who care about tackling the world's most pressing issues</p>
                            <p>Here you share resources, form project groups, engage in meaningful conversation, or whatever you want, really!</p>
                        </div>
                        <br/><br/>
                        <div >
                            <a href="https://airtable.com/shrHRVGAqiv3fVXCH" class="btn btn-default btn-primary btn-lg">sign up here</a>

                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row d-flex justify-content-center">
                    <div class="col">
                        <div class="text-center">
                            <h5><br/><b>Want to get involved? Have Feedback? Questions?</b></h5>
                            <p>Email us at <b>impactful.tech@gmail.com</b> :)!</p>
                        </div>

                    </div>

                </div>
            </div>


        )
    }

}
