import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import moment from 'moment'



var Airtable = require('airtable');
var base = new Airtable({apiKey: '89076543245678'}).base('applLdgY5HJ2u1nLN');
var jobRecording = [];

const handleClick = () => {
   console.info('You clicked the Chip.');

 };

class Opportunities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      roleType: "software engineering",
    }
  }

  componentDidMount() {

    fetch('https://api.airtable.com/v0/applLdgY5HJ2u1nLN/Opportunities?api_key=keyc3AwPXakaUbISa').then((resp) => resp.json()).then(data => {
      console.log('Hello', data);
      this.setState({movies: data.records});
    }).catch(err => {
      this.setState({movies: []});
    });

  }

  render() {
    return (<div className="jobOpportunities" id="jobOpportunities">
      <Container style={{
          paddingTop: 76,
          paddingBottom: 55
        }}>
        <p id="LatestOpportunities">Latest Opportunities</p>
        <div style={{
            textAlign: 'left',
            marginLeft: 40,
            marginBottom: 15
          }}>
          <Chip  style={{
              marginLeft: 5,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop:2, marginBottom:2,
              fontFamily: "CircularStdBook"
            }} label="Software Engineering" component="a"  clickable           color="secondary"     onClick={() => this.setState({ roleType: "software engineering" })}/>
          <Chip style={{
              marginLeft: 5,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop:2, marginBottom:2,
              fontFamily: "CircularStdBook"
            }} label="Product Manager"  component="a"  clickable           color="secondary"     onClick={() => this.setState({ roleType: "product" })}/>
          <Chip style={{
              marginLeft: 5,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop:2, marginBottom:2,
              fontFamily: "CircularStdBook"
            }} label="Data Science"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "data" })}/>
          <Chip  style={{
              marginLeft: 5,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop:2, marginBottom:2,
              fontFamily: "CircularStdBook"
            }} label="Research"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "research" })}/>
            <Chip  style={{
                marginLeft: 5,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop:2, marginBottom:2,
                fontFamily: "CircularStdBook"
              }} label="Design"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "design" })}/>

              <Chip  style={{
                  marginLeft: 5,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginTop:2, marginBottom:2,
                  fontFamily: "CircularStdBook"
                }} label="Tech policy"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "tech policy/consulting" })}/>
        </div>

        <Divider variant="middle"/>

         this.state.movies && {
          this.state.movies.filter(obj=> String(obj.fields['Role Type']).includes(this.state.roleType)).sort(function(a, b) {
    return b.fields['Modification Times'] > a.fields['Modification Times'];
  }).slice(0, 7).map((movie) =>
          <> < div class = "container" style = {{marginTop: 13, marginBottom:13, marginLeft:40}} > <div class="row">
            <div class="col-sm-6" style={{textAlign: "left"}}>
              <a class="Position" href={movie.fields.Link}> {movie.fields.Name},  <strong>{movie.fields['Org Name']}</strong></a>
              <p id="Location">
                {movie.fields.Location} </p>
            </div>

            <div class="col-sm-3" style={{  display: "flex",
            flexDirection: "column",
            justifyContent: "center"}}>
              <p class="RoleType" >
                {
                (movie.fields['Role Type']).map(function(val) {
    return val;
  }).join(', ')}

</p>
            </div>
            <div class="col-sm-3" style={{
                textAlign: 'center', display: "flex",
                flexDirection: "column",
                justifyContent: "center"

              }}>
              <p id="LastModified">
                {
              moment(movie.fields['Modification Times']).startOf('hour').fromNow()}</p>

            </div>

          </div>


        </div>
        <Divider variant="middle"/>
      </>)
        }
        <div class="seeAllJobs"  style= {{textAlign: "right"}}>
          <a class="seeAllJobs" href="https://airtable.com/shrYHEJU5lTBOA7rk/tblRNKqmtte2IVL7x">
            See all Jobs >>
          </a>
        </div>

      </Container>
    </div>

    );
  }
}



export default Opportunities;
