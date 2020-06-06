import React, {Component} from 'react';
import '../App.css';
import '../css/styles.css';
import ConferenceCall from '../img/illustrations/undraw_conference_call_b0w6.svg';

export default class Footer extends Component {
  render() {
    return (<div className="jumbotron fluid text-dark" class="container border-top pt-4 " id="community">
      <br></br>
      <br></br>
      <h1>join our community.</h1>
      <br/><br/>

      <div class="row d-flex justify-content-center">

        <div class="col">

          <br/><br/>
          <p>We are curating a network of technologists who care about tackling the world's most pressing issues. Through a slack group and weekly video calls, members of the network can choose to discuss interesting articles, project ideas, and much more.</p>

          <br/><br/>
          <a href="https://airtable.com/shrHRVGAqiv3fVXCH" class="btn btn-default btn-primary btn-lg">Sign up for Community</a>
        </div>

        <div class="col text-right">
          <img class="img-fluid" src={ConferenceCall} alt="For Companies"/>
        </div>
      </div>

      <br></br>

      <div class="row d-flex justify-content-center">
        <div class="col">
          <div class="text-center">
            <h5><br/>
              <b>Want to get involved? Have Feedback? Questions? </b>
              Email us at <b>impactful.tech@gmail.com</b>
            </h5>
          </div>

        </div>

      </div>
    </div>)
  }

}
