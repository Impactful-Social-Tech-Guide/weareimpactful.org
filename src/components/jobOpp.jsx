import React, { Component } from 'react';
import Iframe from 'react-iframe'


export default class jobOpp extends Component {
    render() {
        return (

            <div  className="App-jobOpp" id="opportunities">
            <br/>
            <h1 > jobs + fellowships + research </h1>
            <br/> 

            <div className="airtable-title">

            </div>

            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}   className="airtable-embed">
            <Iframe class="airtable-embed" src="https://airtable.com/embed/shrUY2UUvj3qsSI8N?backgroundColor=orange&viewControls=on"
            frameborder="0" onmousewheel="" width="75%" height="833" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
            </div>

            </div>
        )
    }

}
