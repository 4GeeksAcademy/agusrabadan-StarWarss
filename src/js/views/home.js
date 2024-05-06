import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import imgHome from "../../img/StarWarsFondo.jpg";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Welcome to the dark Side</h1>
		<p>
			<img src={imgHome} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
