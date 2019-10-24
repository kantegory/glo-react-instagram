import React from 'react';
import img from '../preloader.gif';


const Preloader = () => {
	return (
	   <img className="container preloader" src={img} alt="loading..."></img>
	)
}

export default Preloader;
