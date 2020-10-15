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

function App() {
  return (

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

export default App;
