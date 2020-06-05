import React, { Component } from 'react';
import Iframe from 'react-iframe'


export default class jobOpp extends Component {
    render() {
        return (

            <div  className="App-jobOpp" id="opportunities">
            <br/>
            <br/>
                <h1 style={{ color: "white" }} > jobs + fellowships + research </h1>
                <p style={{ fontSize: 20 }}> Open website in Incognito Mode if opportunities don't display </p>

            <div className="airtable-title">

            </div>

            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}   className="airtable-embed">
            <Iframe class="airtable-embed" src="https://airtable.com/embed/shrUY2UUvj3qsSI8N?backgroundColor=orange&viewControls=on"
            frameborder="0" onmousewheel="" width="75%" height="833" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
            </div>
                <br></br>
            <h1>Want to add an opportunity to our database?   <a href="https://airtable.com/shrVNKcOkg25ndQT0" class="btn btn-default btn-primary btn-lg mr-5">Add Opportunity</a></h1>

              <br></br>

            </div>
        )
    }

}
