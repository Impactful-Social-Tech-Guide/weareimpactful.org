import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {Container} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles';

const handleClick = () => {
   console.info('You clicked the Chip.');

 };

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keygiRMAeJP3E7U18'}).base('applLdgY5HJ2u1nLN');

var windowObjectReference = null; // global variable

function openRequestedPopup(url, windowName) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName,
           'resizable,scrollbars,status');
  } else {
    windowObjectReference.focus();
  };
}

const StyleChip = withStyles({
  root: {
    backgroundColor:'#00b3bf',
  }
})(Chip);

class Opportunities extends Component {

  constructor(props) {
     super(props);
    this.state = {
      recordlist: [],
      roleType: '',
      color: ['secondary','secondary','secondary','secondary','secondary','secondary', 'secondary' ],
      JobsLink:'https://airtable.com/shrUY2UUvj3qsSI8N',
      colorVal:'Red'
    }
    this.listRecords = this.listRecords.bind(this);
}


  componentDidMount() {
    this.listRecords();
}

listRecords(){

  base('Opportunities').select({
      maxRecords: 500,
      view: 'VIEW USED ON SITE',
  }).eachPage((records, fetchNextPage) => {
      this.setState({ recordlist: this.state.recordlist.concat(records) });
    // console.log(this.state.recordlist);
    fetchNextPage();
  }
);

}




  render() {
    let display_val;
    let colorVal='Blue'

    if (this.state.recordlist.length === 0) {
      display_val = <p> Loading...</p>
    } else {
    display_val =  <p></p>
   }

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
          <StyleChip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook', backgroundColor:{colorVal} }} label="All" component="a"  clickable           color={this.state.color[0]}
                  onClick={() => this.setState({ roleType: '', color: ['primary','secondary','secondary','secondary','secondary','secondary', 'secondary' ], JobsLink:'https://airtable.com/shrUY2UUvj3qsSI8N'})}/>

        <StyleChip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Software Engineering" component="a"  clickable           color={this.state.color[1]}
                  onClick={() => this.setState({ roleType: 'software engineering', color: ['secondary','primary','secondary','secondary','secondary','secondary', 'secondary' ], JobsLink:'https://airtable.com/shrX19MB3QbHq1xn2' })}/>

        <StyleChip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Product Manager"  component="a"  clickable           color={this.state.color[2]}
                onClick={() => this.setState({ roleType: 'product', color: ['secondary','secondary', 'primary','secondary','secondary','secondary', 'secondary' ], JobsLink:'https://airtable.com/shrWjgSevDgzwrNCC' })}/>

        <StyleChip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Data Science"  component="a"  clickable            color={this.state.color[3]}
                onClick={() => this.setState({ roleType: 'data', color: ['secondary','secondary','secondary','primary','secondary','secondary', 'secondary' ], JobsLink:'https://airtable.com/shraAZY80n1bKmTQY' })}/>

        <StyleChip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Research"  component="a"  clickable            color={this.state.color[4]}
                onClick={() => this.setState({ roleType: 'research', color: ['secondary','secondary','secondary','secondary','primary','secondary', 'secondary' ], JobsLink:'https://airtable.com/shrRxcrt7gpMdLEft' })}/>

        <StyleChip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Design"  component="a"  clickable            color={this.state.color[5]}
                onClick={() => this.setState({ roleType: 'design', color: ['secondary','secondary','secondary','secondary','secondary', 'primary','secondary' ],JobsLink:'https://airtable.com/shrc53jN6WWJ7h2SR/tblRNKqmtte2IVL7x' })}/>

        <StyleChip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: 'CircularStdBook' }} label="Tech policy"  component="a"  clickable            color={this.state.color[6]}
                onClick={() => this.setState({ roleType: 'tech policy/consulting', color: ['secondary','secondary','secondary','secondary','secondary', 'secondary','primary' ], JobsLink:'https://airtable.com/shrlEa7APK7Y8iNtA' })}/>
        </div>

        <Divider variant="middle"/>

         {this.state.recordlist.filter(obj=>
            {return (!!this.state.roleType ? String(obj.fields['Role Type']).includes(this.state.roleType) : String(obj)
          )}).sort(function(a, b) {return b.fields['Created'] > a.fields['Created'];}).slice(0, 7).map(
            (movie) =>
          <>
          < div className = "container" style = {{marginTop: 13, marginBottom:13, paddingLeft:40}} > <div className="row">
            <div className="col-sm-5" style={{textAlign: 'left'}}>
              <a className="Position" href={movie.fields.Link} target="_blank"  rel="noopener noreferrer">
                {movie.fields.Name}, <strong>{movie.fields['Org Name']? movie.fields['Org Name'] :''}</strong></a>
              <p id="Location">
                {movie.fields.Location} </p>
            </div>
            <div className="col-sm-3" style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className="RoleType" >{(  movie.fields['Role Type']? (movie.fields['Role Type']).map(function(val) {return val;}).join(', ') : '')} </p>
            </div>
            <div className="col-sm-2" style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className="RoleType" >{( movie.fields['Opportunity Type']?  (movie.fields['Opportunity Type']).map(function(val) {return val;}).join(', '):'')} </p>
            </div>
            <div className="col-sm-2" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p id="LastModified">
                { movie.fields['Modification Times']? moment(movie.fields['Created']).startOf('hour').fromNow() : ''}</p>
            </div>
          </div>
        </div>
        <Divider variant="middle"/>
      </>)
        }

        <div style= {{textAlign: 'center', color:'black'}}>

          {display_val}
        </div>

        <div className="seeAllJobs"  style= {{textAlign: 'right'}}>
          <a className="seeAllJobs" href= {this.state.JobsLink}
            target="PromoteFirefoxWindow"
            onClick="openRequestedPopup(this.href, this.target); return false;"
            >
            See All Jobs >>
          </a>


        </div>

      </Container>
    </div>

    );
  }
}



export default Opportunities;
