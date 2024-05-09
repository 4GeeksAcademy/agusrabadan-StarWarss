import React from "react";
import "../../styles/home.css";
import imgHome from "../../img/Stars1.jpg";
import { Users } from "./Users.jsx";

export const Home = () => (
	<div className="text-center mt-2">
		<h1 className="text-warning">Welcome to the dark Side</h1>
		<Users/>
			<img height="300" width="1000" src={imgHome} />
	</div>
);
