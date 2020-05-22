import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide.jsx'
import './App.css';
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
import Recs from './components/recs.jsx'
import Opportunities from './components/Opportunities.jsx'
import About from './components/about'
import Team from './components/team'
import Footer from './components/footer'
import JoinCommunity from './components/joinCommunity'
import ForCompanies from './components/forCompanies'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-167361197-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">
      {/* <header className="App-header">

      </header> */}
      soft β launch
      <OurNavBar />

      <div>
        <IntroSlide />
        <JobOpp></JobOpp>
        <About></About>
        <JoinCommunity></JoinCommunity>
        <ForCompanies></ForCompanies>
        <Organizations></Organizations>
        <Team></Team>

        <Recs></Recs>

      </div>


      <Footer></Footer>

    </div>
  );
}

export default App;
