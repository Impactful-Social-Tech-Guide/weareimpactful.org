import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import moment from 'moment'


const handleClick = () => {
   console.info('You clicked the Chip.');

 };

class Opportunities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      roleType: "",
    }
  }

  componentDidMount() {

/* ADD THE API KEY WHERE IT SAYS AAAAAAAAAAAAAAAAAAAAAAA*/
    fetch('https://api.airtable.com/v0/applLdgY5HJ2u1nLN/Opportunities?api_key=keygiRMAeJP3E7U18&filterByFormula=NOT%28%7BName%7D%20%3D%20%27%27%29&sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc').then((resp) => resp.json()).then(data => {
      console.log('Hello!', data);
      this.setState({movies: data.records});
    }).catch(err => {
      this.setState({movies: []});
    });

  }



  render() {
    let display_val;

    if (this.state.movies.length === 0) {
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
          <Chip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="All" component="a"  clickable           color="secondary"     onClick={() => this.setState({ roleType: "" })}/>
          <Chip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Software Engineering" component="a"  clickable           color="secondary"     onClick={() => this.setState({ roleType: "software engineering" })}/>
          <Chip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Product Manager"  component="a"  clickable           color="secondary"     onClick={() => this.setState({ roleType: "product" })}/>
          <Chip  style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Data Science"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "data" })}/>
          <Chip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Research"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "research" })}/>
          <Chip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Design"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "design" })}/>
          <Chip   style={{ marginLeft: 5, justifyContent: 'center',   flexWrap: 'wrap', marginTop:2, marginBottom:2, fontFamily: "CircularStdBook" }} label="Tech policy"  component="a"  clickable            color="secondary"     onClick={() => this.setState({ roleType: "tech policy/consulting" })}/>
        </div>

        <Divider variant="middle"/>

         {this.state.movies.filter(obj=>
            {return (!!this.state.roleType ? String(obj.fields['Role Type']).includes(this.state.roleType) : String(obj)
          )}).sort(function(a, b) {return b.fields['Modification Times'] > a.fields['Modification Times'];}).slice(0, 7).map(
            (movie) =>
          <>
          < div class = "container" style = {{marginTop: 13, marginBottom:13, paddingLeft:40}} > <div class="row">
            <div class="col-sm-5" style={{textAlign: "left"}}>
              <a class="Position" href={movie.fields.Link}>
                {movie.fields.Name}, <strong>{movie.fields['Org Name']? movie.fields['Org Name'] :""}</strong></a>
              <p id="Location">
                {movie.fields.Location} </p>
            </div>
            <div class="col-sm-3" style={{  display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <p class="RoleType" >{(  movie.fields["Role Type"]? (movie.fields['Role Type']).map(function(val) {return val;}).join(', ') : "")} </p>
            </div>
            <div class="col-sm-2" style={{  display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <p class="RoleType" >{( movie.fields["Opportunity Type"]?  (movie.fields['Opportunity Type']).map(function(val) {return val;}).join(', '):"")} </p>
            </div>
            <div class="col-sm-2" style={{ textAlign: 'center', display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <p id="LastModified">
                { movie.fields['Modification Times']? moment(movie.fields['Modification Times']).startOf('hour').fromNow() : ""}</p>
            </div>
          </div>
        </div>
        <Divider variant="middle"/>
      </>)
        }

        <div style= {{textAlign: "center", color:"black"}}>

          {display_val}
        </div>

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
