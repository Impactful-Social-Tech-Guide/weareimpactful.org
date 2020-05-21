import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide'
import Join from './Join';

import './App.css';
import About from './components/about'
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
// import Recs from './components/recs.jsx'


function App() {
  return (

    <div className="App">
      <div>
        <OurNavBar/>
        <IntroSlide/>
        <Join/>
      </div>


      <header className="App-header">

      <About></About>

      <JobOpp></JobOpp>

      <Organizations></Organizations>


      </header>
    </div>
  );
}

export default App;
