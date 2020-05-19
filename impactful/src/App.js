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

      <About></About>

      <JobOpp></JobOpp>

      <Organizations></Organizations>

      <Reccs></Reccs>

      </header>
    </div>
  );
}

export default App;
