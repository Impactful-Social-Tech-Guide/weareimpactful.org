import React, {Component} from 'react';
import '../App.css';
import {Row, Col,} from 'react-bootstrap';
import TitleWithLogo from '../img/title_with_logo.svg';
import facebookIcon from '../img/social_contact/Icon_Facebook.svg';
import instagramIcon from '../img/social_contact/Icon_Instagram.svg';
import linkedinIcon from '../img/social_contact/Icon_LinkedIn.svg';
import MailIcon from '../img/social_contact/Icon_Mail-03.svg';
import twitterIcon from '../img/social_contact/Icon_Twitter.svg';
import '../css/styles.css'

export default class LandingPage extends Component {
  render() {
    return (<div className="landing">
        <Row style={{maxWidth:"360px", marginLeft:"auto", marginRight:"auto"}} >
          <img class="titleWithLogo" alt="Impactful" src={TitleWithLogo}/>
        </Row>
        <Row id="impactful-is-your-pl" className="justify-content-md-center">
          <p>impactful is your place to search for opportunities in social impact technology. </p>
        </Row>


        <Row id="explore-jobs" className="justify-content-md-center">
          <a style={{ color: "#FFFFFF" }} href="#jobOpportunities">Explore Jobs</a>
        </Row>
        <Row id="explore-jobs" className="justify-content-md-center">
          <a style={{ color: "#FFFFFF" }} href="#joinCommunity">Join Our Community</a>
        </Row>
        <Row id="explore-jobs" className="justify-content-md-center">
          <a style={{ color: "#FFFFFF" }} href="#learnMore">Learn More</a>
        </Row>


      <div className="group-1">
        <Row className="justify-content-md-center">
          <a >FOLLOW US</a>
        </Row>
        <Row style={{
            paddingTop: "10px"
          }} className="justify-content-md-center">
          <Col>
            <a href="https://www.facebook.com/impactful.tech">
            <img style={{
                height: "36.24px",
                width: "35.95px"
              }} alt="Facebook" src={facebookIcon}/>
              </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/impactful.tech/">
            <img style={{
                height: "36.24px",
                width: "35.95px"
              }} alt="Instagram" src={instagramIcon}/>
            </a>

          </Col>
          <Col>
            <a href="https://twitter.com/impactful_tech">
            <img style={{
                height: "36.24px",
                width: "35.95px"
              }} alt="Twitter" src={twitterIcon}/>
            </a>

          </Col>
          <Col>
            <a href="https://www.linkedin.com/company/impactfultech/">
            <img style={{
                height: "36.24px",
                width: "35.95px"
              }} alt="Linkedin" src={linkedinIcon}/>
            </a>

          </Col>
          <Col>
            <a href="mailto:hello@weareimpactful.org">
            <img style={{
                height: "36.24px",
                width: "35.95px"
              }} alt="Mail" src={MailIcon}/>
            </a>
          </Col>
        </Row>
      </div>

    </div>)
  }
}
