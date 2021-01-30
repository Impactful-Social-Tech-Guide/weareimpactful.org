import React, {Component} from 'react';
import Iframe from 'react-iframe'
import {Container, Row, Col, Button} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

var Airtable = require('airtable');
var base = new Airtable({apiKey: '9090'}).base('applLdgY5HJ2u1nLN');
var jobRecording = [];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF'
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));

export default function MiddleDividers(props) {
  const classes = useStyles();
  console.log("HELLO");

  base('Opportunities').select({
    maxRecords: 7,
    view: "For Internal Use Only: Do Not Share",
    sort: [
      {
        field: "Modification Times",
        direction: "desc"
      }
    ]
  }).eachPage(function page(records, fetchNextPage) {
    console.log("-------------OPPORTUNITIES -here-----------------");
    // console.log(records)
    records.forEach(function(record) {
      // console.log(record.get('Name'), "ROLE TYPE:", record.get('Role Type'), "OPPORTUNITY TYPE:", record.get("Opportunity Type"), "LOCATION:", record.get("Location"), "MODIFICATION TIME:", record.get("Modification Times"));
    jobRecording.push(record.fields);

    });


    fetchNextPage();
    console.log(jobRecording);

  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  });

  const listItems = jobRecording.map((number) =>
                <> <p id="Position"> { number.Name  }</p>
              <p id="Location" > { number.Location  }</p>
                < Divider variant = "middle" />
              </>
                  );
  return (<div className="jobOpportunities" id="jobOpportunities">
    <Container style={{
        paddingTop: 76,
        paddingBottom: 55
      }}>
      <p id="LatestOpportunities">Latest Opportunities</p>
      <div style={{
          textAlign: "left",
          marginLeft: 40,
          marginBottom: 5
        }}>
        <Chip className={classes.chip} label="Software Engineering"/>
        <Chip className={classes.chip} color="primary" label="Product Manager"/>
        <Chip className={classes.chip} label="Data Science"/>
        <Chip className={classes.chip} label="Research"/>
      </div>

      <Divider variant="middle"/> {listItems}

    </Container>
  </div>);
}
