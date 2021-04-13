import React, {Component} from 'react';
import { Container, Row, Button} from 'react-bootstrap';

export default class jobOpp extends Component {
  render() {
    return (<div className="community" id="joinCommunity">
      <Container id="landing" style={{ paddingTop: 76, paddingBottom: 55 }}>
        <h1 id="page-smallHeading">OUR COMMUNITY</h1>

        <Row>
          <div  style={{paddingTop:'20px', paddingBottom:'10px'}} className="col-md-6">
            <h1 id="page-largeheading">Slack Channel</h1>
            <p id="page-body"> Apply to join our active Slack channel where members share resources and discuss social impact and technology. </p>
            <p  id="page-body">You'll have access to our community calls and speaker events, where we discuss social impact topics and careers.</p>
              <a className="float-left" href='https://airtable.com/shrHRVGAqiv3fVXCH' target="_blank"  rel="noopener noreferrer" >

                <Button  style={{width:'140px',   height: '52px'}} id="page-button"  size="lg">Apply</Button></a>
        </div>
        <div  style={{paddingTop:'20px', paddingBottom:'10px'}} className="col-md-6">
            <h1 id="page-largeheading">Mailing List</h1>
            <p  id="page-body"> Sign-up to receive updates about the impactful website and news about social impact opportunites. </p>
            <p  id="page-body"> Anyone can subscribe for free, and you can unsubscribe at any time. </p>
              <a className="float-left" href="https://airtable.com/shrz6v3BtuOsJuQbR" target="_blank"  rel="noopener noreferrer" >

                <Button  style={{width:'140px', height: '52px'}}  id="page-button"  size="lg">Subscribe</Button> </a>
          </div>
        </Row>
      </Container>
      <br></br>
    </div>)
  }

}
