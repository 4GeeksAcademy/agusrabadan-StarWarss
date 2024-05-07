import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import imgHome from "../../img/Stars1.jpg";

export const Home = () => (
	<div className="text-center mt-2">
		<h1 className="text-warning">Welcome to the dark Side</h1>
			<img height="300" width="1000" src={imgHome} />
	</div>
);
