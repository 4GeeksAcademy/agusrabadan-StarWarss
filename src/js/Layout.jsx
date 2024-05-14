import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characterss } from "./Characterss.jsx";
import { UserDetail } from "./UserDetail.jsx";
import { Planets } from "./Planets.jsx";
import { PlanetsDetail } from "./PlanetsDetail.jsx"; 
import { Vehicles } from "./views/Vehicles.jsx"; 
import { VehiclesDetail } from "./views/VehiclesDetail.jsx";  
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/characters" element={<Characterss />} />
						<Route path="/detail-users/:id" element={<UserDetail />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/detail-planets/:id" element={<PlanetsDetail />} /> 
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/detail-vehicles/:id" element={<VehiclesDetail />} />  
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
