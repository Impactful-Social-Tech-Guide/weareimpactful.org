import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../css/styles.css';
import CollabImage from '../img/illustrations/undraw_shared_workspace_hwky.svg';
import ConferenceCall from '../img/illustrations/undraw_conference_call_b0w6.svg';

export default class forCompanies extends Component {
    render() {
        return (
            <div className="jumbotron fluid text-dark" class="container border-top pt-4 ">
                <br></br>
                <h1>is your company hiring?</h1>
                <br></br>

                <div class="row d-flex justify-content-center">

                    <div class="col">

                        <div className="community-blurb">
                            <p>Is your company/organization working on socially impactful work and looking for talented and passionate people? </p>
                            <p>Share any openings you have with us here! We will share them on our site.</p>
                        </div>
                        <br></br><br></br>
                        <div >
                            <a href="https://airtable.com/shrVNKcOkg25ndQT0" class="btn btn-default btn-primary btn-lg">share job opening</a>

                        </div>
                    </div>
                </div>
                <br></br>
            </div>

        )
    }

}
