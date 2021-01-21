import React from 'react';
import './App.css';
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
import MetaTags from 'react-meta-tags';
import Landing from './components/landing'
import OurCommunity from './components/ourcommunity'
import AboutUs from './components/aboutUs'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-167361197-1');
ReactGA.pageview(window.location.pathname + window.location.search);


  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyc3AwPXakaUbISa'}).base('applLdgY5HJ2u1nLN');

  base('Opportunities').select({
      // Selecting the first 3 records in For Internal Use Only: Do Not Share:
      maxRecords: 15,
      view: "For Internal Use Only: Do Not Share"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          console.log(record.get('Name'), record.get('Opportunity Type'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

  }, function done(err) {
      if (err) { console.error(err); return; }
  });

class App extends React.Component {

render() {
  return(

    <div className="App">
      <MetaTags>
        <title>impactful</title>
        <meta name="og:description" content="Browse internships, jobs, and projects at the intersection of tech and social impact. Join our invite-only community to network and engage in discussions about ethics, equity, and justice in tech." />
        <meta property="og:title" content="Impactful: Tech + Social Good" />
        <meta property="og:image" content="https://builders.mozilla.community/assets/showcase/Impactful.png"/>
      </MetaTags>

      <div className = "MainPage">
        <Landing></Landing>
        <JobOpp></JobOpp>
        <Organizations></Organizations>
        <OurCommunity></OurCommunity>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
  }
}

export default App;
