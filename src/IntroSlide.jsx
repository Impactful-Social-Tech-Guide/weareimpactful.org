import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import './css/styles.css';
import './App.css';
import Image1 from './img/illustrations/intro1.svg';
import Image2 from './img/illustrations/intro2.svg';


function IntroSlide() {
	return (
		<div id="intro slide" className="jumbotron fluid text-dark" class="container border-top pt-4 " style = {{maxwidth:"1700px"}}>
		<br></br>

		<h1>We are Impactful.</h1>
		<h1>your space for tech + social impact.</h1>
				<br></br>

				<div class="row d-flex justify-content-center"  style = {{width:"75%;"}}>
				<div class="col text-left ">
						<img style = {{maxWidth:"230px"}}
								class="img-fluid"
								src={Image2}
								alt="For Companies"
						/>
				</div>

						<div class="col" >




								<div className="intro-site" style= {{ textAlign: "left;", maxHeight:"300px"}}>
										<p style={{textAlign: "left;"}}>
												We want to make it easy for technologists at any level of experience to do socially impactful work.
						</p>
										<p>
												<b>Impactful</b> is a platform for technologists to develop their careers in social good by connecting them with socially-impactful opportunities and with other impact-driven technologists.

						</p>

								</div>
						</div>

						<div class="col text-right ">
								<img style = {{ textAlign: "center;",maxWidth:"300px"}}
										class="img-fluid"
										src={Image1}
										alt="For Companies"
								/>
						</div>

				</div>
				<br></br>

				</div>
	)
}

export default IntroSlide;
