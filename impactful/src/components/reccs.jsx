import React, { Component } from 'react';
import Iframe from 'react-iframe'


export default class jobOpp extends Component {
    render() {
        return (
            <div>

            <div className="airtable-embed">
            <span>&nbsp;&nbsp;</span>
            <h1> Our Reccomendations </h1>
            <Iframe class="airtable-embed" src="https://airtable.com/embed/shrEICZt0M8cLf80j?backgroundColor=orange&layout=card&viewControls=on"
             frameborder="0" onmousewheel="" width="900" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
             <span>&nbsp;&nbsp;</span>
             </div>

            </div>
        )
    }

}
