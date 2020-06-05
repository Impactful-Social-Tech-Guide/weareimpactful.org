import React, {Component} from 'react';

export default class LandingButtons extends Component {
  render() {
    return (<div className="App-landing" id="landingButtons">
      <div id="about" className="jumbotron fluid text-dark" class="container border-top pt-4 ">

        <div class="row d-flex justify-content-center">

          <div class="col">
              <p>Search for Jobs, fellowships, research, volunteering opportunities and more.</p>

              <a href="#opportunities" class="btn btn-default btn-primary btn-lg mr-5">Search Opportunities</a>
              <br/>
              <br/>
          </div>

          <div class="col">
            <p>Join our Slack community for those interested in discussing tech + social impact.</p>
            <a href="#community" class="btn btn-default btn-primary btn-lg mr-5">Community Application</a>
            <br/>
            <br/>
          </div>

        </div>

      </div>
    </div>)
  }

}
