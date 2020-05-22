import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../css/styles.css';

export default class Footer extends Component {
    render() {
        return (
            <footer class="pt-4 border-top" style = {{backgroundColor: "#294126"}}>
                <div class="row">
                    <div class="col-4 col-md">
                        <h2 >Impactful</h2>
                        <small class="d-block mb-3 text-muted">© 2020</small>
                        <p>

                            <a href="#" class="btn btn-default btn-info">Back to top</a>
                        </p>
                    </div>

                    <div class="col-4 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-4 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Team</a></li>
                            <li><a class="text-muted" href="#">Locations</a></li>
                            <li><a class="text-muted" href="#">Privacy</a></li>
                            <li><a class="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>

            </footer>

        )
    }

}
