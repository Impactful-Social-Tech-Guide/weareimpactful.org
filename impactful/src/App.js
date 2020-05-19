import React from 'react';
import './App.css';
import About from './components/about'
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
import Reccs from './components/reccs.jsx'


function App() {
  return (

    <div className="App">

      <header className="App-header">
      <h1> Impactful </h1>
      </header>

      <header className="App-about">
      <About></About>
      </header>

      <header className="App-jobOpp">
      <JobOpp></JobOpp>
      </header>

      <header className="App-organizations">
      <Organizations></Organizations>
      </header>

      <header className="App-reccs">
      <Reccs></Reccs>
      </header>

      <header className="App-footer">
      <h1> Footercontents </h1>

      </header>



    </div>
  );
}

export default App;
