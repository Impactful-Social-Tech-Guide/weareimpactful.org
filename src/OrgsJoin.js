import React from 'react';
import ReactDOM from 'react-dom';
import chaos from './img/techgood-evil-796x530.jpg'
import Image from 'react-bootstrap/Image';
import './App.css';

function OrgsJoin() {
  return (
  	<div className="jumbotron fluid">
  	  <Image src={chaos} fluid/>
	  <div className="container">
	    <h1>Fluid jumbotron</h1>
	    <p>
	      OrgsJoin
	      This is a modified jumbotron that occupies the entire horizontal space of
	      its parent.
	    </p>
	  </div>
	</div>
  )
}

export default OrgsJoin;
