import React from 'react';
import OurNavBar from './OurNavBar';
import IntroSlide from './IntroSlide'
import Join from './Join';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <OurNavBar/>
        <IntroSlide/>
        <Join/>
      </div>
    </div>
  );
}

export default App;
