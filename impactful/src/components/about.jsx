import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <div id="about">
                <h1>About</h1>
                <div className="about-site">
                    <h2>About the Website</h2>
                    <p>something cool</p>


                </div>

                <div className="about-team">
                    <h2>The Team</h2>

                    <p>We are 3 women of color in tech who spent our college careers wanting to do good by using tech to tackle climate change issues, empower marginalized communities, and help nonprofits, NGOs, etc. work smarter & faster.</p>
                    <p> Now, we’re making Impactful, a platform that makes it easier for us, and college students like us, to tackle issues that matter. We're compiling a list of open career opportunities in social impact technology and building an online community of impact-driven tech folks.</p>
                </div>


                <div className="about-get-involved">
                    <h5>Want to get involved? Or have any questions/comments/concernts?</h5>
                    <p>Email us at [some email] </p>
                </div>

            </div>
        )
    }

}
