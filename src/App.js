import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide.jsx'
import './App.css';
import JobOpp from './components/jobOpp.jsx'
import LandingButtons from './components/landingButtons.jsx'

import Organizations from './components/organizations.jsx'
import FooterMinimal from './components/footerMinimal.jsx'
import MetaTags from 'react-meta-tags';

import Recs from './components/recs.jsx'
import About from './components/about'
import Team from './components/team'
import JoinCommunity from './components/joinCommunity'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-167361197-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">
      <MetaTags>
            <title>IMPACTFUL</title>
            <meta name="description" content="Community and Sources for Tech + Social Impact" />
            <meta property="og:title" content="Impactful Community" />
            <meta property="og:image" content="./src/img/illustrations/intro1.svg" />
          </MetaTags>

      <div id="ourHeaderNav">

      <OurNavBar />

      </div>

      <div id="mainContent">

        <IntroSlide />

        <LandingButtons></LandingButtons>
        <About></About>

        <JobOpp></JobOpp>
        <JoinCommunity></JoinCommunity>
        <Organizations></Organizations>
        <Team></Team>
        <Recs></Recs>


      </div>


      <FooterMinimal></FooterMinimal>

    </div>
  );
}

export default App;
