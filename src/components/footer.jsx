import React, { Component } from 'react';
import '../App.css';
import '../css/styles.css';

export default class Footer extends Component {
    render() {
        return (
            <footer class="pt-4 border-top" style = {{backgroundColor: "#294126"}}>
                <div class="row">
                    <div class="col-4 col-md">
                        <h2 style={{ color: "white" }}>Impactful</h2>
                        <small class="d-block mb-3 text-muted">© 2020</small>
                        <p>

                            <a href="#mainContent" class="btn btn-default btn-info">Back to top</a>
                        </p>
                    </div>
{/* {/*
                    <div class="col-4 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div> */}
                    <div class="col-4 col-md">
                        <h3 style={{color:"white"}}>relevant links</h3>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-light" href="https://airtable.com/shrz6v3BtuOsJuQbR">mailing list signup</a></li>
                            <li><a class="text-light" href="https://airtable.com/shrHRVGAqiv3fVXCH">join our community!</a></li>
                            <li><a class="text-light" href="https://airtable.com/shrVNKcOkg25ndQT0">add a job opening</a></li>
                            <li><a class="text-light" href="https://airtable.com/shrMuN5t9SWMLGSiF">add an organization</a></li>
                        </ul>
                    </div>

                    <div class="col-4 col-md">
                        <h3 style={{ color: "white" }}>our supporters ♥</h3>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-light" href="https://www.impactlabs.io/">impact labs</a></li>
                            <li><a class="text-light" href="https://builders.mozilla.community/">mozilla builders</a></li>

                        </ul>
                    </div>
                </div>

            </footer>

        )
    }

}
