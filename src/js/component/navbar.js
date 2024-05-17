import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/" className="navbar-brand mb-0 h1">
				<img height="75" className="mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuVAb1z5PDQY09j6kWl7iXAMVbD0hhyOnTQ&s" alt="Home" />
			</Link>

			<div className="d-flex justify-content-center flex-grow-1">
				<Link to="/contacts">
					<button type="button" className="btn btn-success mx-2">Contacts</button>
				</Link>

				<Link to="/characters">
					<button type="button" className="btn btn-warning mx-2">Characters</button>
				</Link>

				<Link to="/planets">
					<button type="button" className="btn btn-danger mx-2">Planets</button>
				</Link>

				<Link to="/vehicles">
					<button type="button" className="btn btn-primary mx-2">Vehicles</button>
				</Link>
			</div>

			<div className="dropdown ml-auto">
				<button className="btn btn-outline-success dropdown-toggle mx-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
					{store.favorites.length > 0 ? (
						store.favorites.map((item, index) => (
							<li key={index} className="dropdown-item">
								{item.name}
							</li>
						))
					) : (
						<li className="dropdown-item">No favorites added</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
