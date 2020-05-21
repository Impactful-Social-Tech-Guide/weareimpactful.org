import React, { Component } from 'react';
import Iframe from 'react-iframe'



export default class jobOpp extends Component {
    render() {
        return (
            <div id="recs">

            <div className="airtable-title">
            <h1> Our Recommendations</h1>
            </div>

            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}   className="airtable-embed">
            <Iframe class="airtable-embed" src="https://airtable.com/embed/shryXnxCMjOg7EDtH?backgroundColor=orange&viewControls=on"
             frameborder="0" onmousewheel="" width="900" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
             <span>&nbsp;&nbsp;</span>
             </div>

            </div>
        )
    }

}
