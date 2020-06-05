import React from 'react';
import './css/styles.css';
import './App.css';
import Image1 from './img/illustrations/intro1.svg';


function IntroSlide() {
	return (
		<div id="introslide" className="jumbotron fluid text-dark" class="container border-top pt-4 ">

		<h1><b>Want to use your tech skills to create an impact?</b></h1>
		<h2>this is your source for tech + social impact.</h2>

				<br/><br/>
						<img style = {{ textAlign: "center;",maxWidth:"300px"}}
								class="img-fluid"
								src={Image1}
								alt="For Companies"
						/>
				<br></br>

				</div>
	)
}

export default IntroSlide;
