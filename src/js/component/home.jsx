import React from "react";
import { SecondsCounter } from "./contador.jsx";
//include images into your bundle





//create your first component
const Home = () => {
	return (
		<div className="text-center" style={{fontSize:'2rem', color: 'black'}}>
				<SecondsCounter></SecondsCounter>
				
		</div>
	);
};

export default Home;
