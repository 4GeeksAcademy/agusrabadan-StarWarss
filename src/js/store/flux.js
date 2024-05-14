const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			users: [],
			currentUser: null,
			currentUserUrl: "",
			planets: [],
			currentPlanet: null,
			currentPlanetUrl: "",
			vehicles: [],
			currentVehicle: null,
			currentVehicleUrl: ""

		},

		actions: {

			//Lógica para Characters
			getUsers: async () => {
				const response = await fetch("https://www.swapi.tech/api/people/")
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ users: data.results });
			},

			settingUser: (user) => { setStore({ currentUser: user }) },

			settingUserUrl: (text) => { setStore({ currentUserUrl: text }) },

			getCurrentUser: async () => {
				const uri = getStore().currentUserUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ currentUser: data.result });

			},

			//Lógica para Planetas

			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/")
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ planets: data.results });
			},

			settingPlanet: (planet) => { setStore({ currentPlanet: planet }) },

			settingPlanetUrl: (text) => { setStore({ currentPlanetUrl: text }) },

			getCurrentPlanet: async () => {
				const uri = getStore().currentPlanetUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ currentPlanet: data.result });

			},

			//Lógica para Vehículos

			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/")
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ vehicles: data.results });
			},

			settingVehicle: (vehicle) => { setStore({ currentVehicle: vehicle }) },

			settingVehicleUrl: (text) => { setStore({ currentVehicleUrl: text }) },

			getCurrentVehicle: async () => {
				const uri = getStore().currentVehicleUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({ currentVehicle: data.result });

			}
		}
	};
};



export default getState;
