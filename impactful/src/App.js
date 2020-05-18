import React from 'react';
import './App.css';
import Iframe from 'react-iframe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span>&nbsp;&nbsp;</span>
      <h style={{fontSize:60}}> Job Opportunities </h>
      <Iframe class="airtable-embed" src="https://airtable.com/embed/shrYHEJU5lTBOA7rk?backgroundColor=orange&layout=card&viewControls=on"
      frameborder="0" onmousewheel="" width="60%" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>

       <span>&nbsp;&nbsp;</span>
       <h style={{fontSize:60}}> Organizations </h>
       <Iframe class="airtable-embed" src="https://airtable.com/embed/shrKrkfBWYL8KtAkV?backgroundColor=orange&layout=card&viewControls=on"
       frameborder="0" onmousewheel="" width="60%" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>

       <span>&nbsp;&nbsp;</span>
       <h style={{fontSize:60}}> Our Reccomendations </h>
       <Iframe class="airtable-embed" src="https://airtable.com/embed/shrEICZt0M8cLf80j?backgroundColor=orange&layout=card&viewControls=on"
        frameborder="0" onmousewheel="" width="60%" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
        <span>&nbsp;&nbsp;</span>

      </header>
    </div>
  );
}

export default App;
