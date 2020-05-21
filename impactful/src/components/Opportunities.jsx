import React from 'react';
import About from './about.jsx'
import JobOpp from './jobOpp.jsx'
import Organizations from './organizations.jsx'
import Recs from './recs.jsx'


function Opportunities() {
  return (

    <div className="App" id="opportunities">

      <header className="App-header">

      <JobOpp></JobOpp>

      <Organizations></Organizations>

      <Recs></Recs>

      </header>
    </div>
  );
}

export default Opportunities;