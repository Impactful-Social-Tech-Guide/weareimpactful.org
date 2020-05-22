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
import Footer from './components/footer'


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <OurNavBar/>

      <div>

        <IntroSlide/>
        <br></br>
        <About></About>
        <Join/>
        <Opportunities/>

      </div>


      <Footer></Footer>

    </div>
  );
}

export default App;
