import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
// import GreenCityBackground from './img/green_city.jpg';
import './App.css';
import TreeImage from './img/illustrations/undraw_Tree_swing_646s.svg';
import WorkTogetherImage from './img/illustrations/undraw_shared_workspace_hwky.svg';


function IntroSlide() {
	return (
		<div id="container ">
			<div class="row" >
				<div class="col services-section">
					<img
						class="img-fluid"
						src={TreeImage}
						alt="Opening Image"
					/>
				</div>

				<div class="col services-section">
					<h1 className="text-dark">
						<br></br><br></br><br></br>
						<br/>welcome to <b >Impactful</b>: <br /> <br />   <br /> your space for <b > tech</b> +  <b >social impact</b> </h1>
					<h2 className="text-dark">
					</h2>
				</div>
{/* 
				<div class="col services-section">
					<img
						class="img-fluid"
						src={WorkTogetherImage}
						alt="Opening Image"
					/>
				</div> */}

				
			</div>
		</div>
	)
}

export default IntroSlide;
