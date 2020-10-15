import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import facebookIcon from '../img/social_contact/Icon_Facebook.svg';
import instagramIcon from '../img/social_contact/Icon_Instagram.svg';
import linkedinIcon from '../img/social_contact/Icon_LinkedIn.svg';
import MailIcon from '../img/social_contact/Icon_Mail-03.svg';
import twitterIcon from '../img/social_contact/Icon_Twitter.svg';

export default class LandingPage extends Component {
  render() {
    return (<div className="aboutUs" id="learnMore" >
      <Container id="rectangle-2" style={{
          paddingTop: 55,
          paddingBottom: 55
        }}>
        <h5 id="aboutUs-heading">ABOUT US</h5>
        <Row>
          <Col style={{
              minWidth: "350px"
            }}>
            <p id="aboutUs-body">
              Impactful bridges the gap between job-seekers and opportunities in public interest technology, and brings together a group of like-minded thinkers interested in exploring and learning more about technology and social impact.</p>
            <p id="aboutUs-body">
              Founded in 2020, we are backed by Mozilla's Spring MVP Lab and The New America Foundation.
            </p>
          </Col>
          <Col style={{
              minWidth: "350px"
            }}>
            <p id="aboutUs-body">
              Have any feedback, questions, or comments about our platform? Looking to collaborate or join our team? Please drop us a line at
              <a style={{
                  color: "white"
                }} href="mailto:hello@weareimpactful.org">
                hello@weareimpactful.org</a>
            </p>
            <p id="aboutUs-body" style={{
                paddingTop: "30px"
              }}>Find us on socials:</p>

            <Row style={{width:"250px",
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
                  }} alt="LinkedIn" src={linkedinIcon}/>
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
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{
            marginTop: "120px",
            marginBottom: "24px"
          }}>
          <Col  style={{minWidth:"350px", paddingBottom:"15px"}}>
            <a id="aboutUs-heading" href="#jobOpportunities" className="footerLink">Explore Jobs</a>
          </Col>
          <Col style={{minWidth:"350px"}} >
            <a id="aboutUs-heading" href="#joinCommunity" className="footerLink">Join Our Community</a>
          </Col>
        </Row>
      </Container>
    </div>)
  }

}
