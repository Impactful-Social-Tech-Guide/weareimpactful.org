import React, {Component} from 'react';
import Iframe from 'react-iframe'

export default class jobOpp extends Component {
  render() {
    return (<div className="App-organizations">
      <br/>
      <div className="airtable-title">
        <h1 style={{
            color: "white"
          }}>organizations</h1>
        <br/>
      </div>

      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} className="airtable-embed">
        <Iframe class="airtable-embed" src="https://airtable.com/embed/shrjElLGi3TuooVVf?backgroundColor=orange&viewControls=on" frameborder="0" onmousewheel="" width="75%" height="800" style={{
            background: "transparent",
            border: " 1 solid #ccc"
          }}></Iframe>
      </div>
      <br></br>
      <h2>Want to add an organization to our database? <a href="https://airtable.com/shrMuN5t9SWMLGSiF" class="btn btn-default btn-primary btn-lg mr-5">Add Organization</a>
      </h2>

      <br></br>

    </div>)
  }

}
