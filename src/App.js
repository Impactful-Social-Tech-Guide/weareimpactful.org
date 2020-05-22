import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide'
import Join from './Join';

import './App.css';
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
import Recs from './components/recs.jsx'
import Opportunities from './components/Opportunities.jsx'
import About from './components/about'
import Team from './components/team'
import Footer from './components/footer'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-167361197-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <OurNavBar />

      <div>
        <IntroSlide />
        <br></br>
        <JobOpp></JobOpp>
        <About></About>
        <Join />
        <Organizations></Organizations>
        <Team></Team>

        <Recs></Recs>

      </div>


      <Footer></Footer>

    </div>
  );
}

export default App;
