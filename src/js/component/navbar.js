import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-light mb-3 ">
			<Link to="/">
				<span title="Home" className="navbar-brand mb-0 h1"> <img height="75" className="mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuVAb1z5PDQY09j6kWl7iXAMVbD0hhyOnTQ&s" /> </span>
			</Link>

			<Link to="/contacts"><button type="button" className="btn btn-success mx-2">Contacts</button></Link>


			<Link to="/characters"><button type="button" className="btn btn-warning mx-2">Characters</button></Link>

			<Link to="/planets"><button type="button" className="btn btn-danger mx-2">Planets</button></Link>

			<Link to="/vehicles"><button type="button" className="btn btn-primary mx-2">Vehicles</button></Link>

			<div role="group" aria-label="Basic example">
				<button className="btn btn-outline-success dropdown-toggle mx-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
				<ul className="dropdown-menu dropdown-menu-end">
					<li><a className="dropdown-item" href="#">Acción</a></li>
					<li><a className="dropdown-item" href="#">Otra acción</a></li>
					<li><a className="dropdown-item" href="#">Algo más aquí</a></li>
					<li><hr className="dropdown-divider" /></li>
					<li><a className="dropdown-item" href="#">Enlace separado</a></li>
				</ul>
			</div>
		</nav>
	);
};
