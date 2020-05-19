import React from 'react';
import './App.css';
import About from './components/about'
import JobOpp from './components/jobOpp.jsx'
import Organizations from './components/organizations.jsx'
import Recss from './components/recs.jsx'


function Opportunities() {
  return (

    <div className="App">

      <header className="App-header">

      <JobOpp></JobOpp>

      <Organizations></Organizations>

      <Recs></Recs>

      </header>
    </div>
  );
}

export default Opportunities;