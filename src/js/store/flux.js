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
			currentVehicleUrl: "",
			apiContact: "https://playground.4geeks.com/contact/",
			agenda: "Agus",
			contacts: [],
			favorites: []
		},

		actions: {
			// Lógica para Characters
			getUsers: async () => {
				const response = await fetch("https://www.swapi.tech/api/people/");
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ users: data.results });
			},

			settingUser: (user) => { setStore({ currentUser: user }); },
			settingUserUrl: (text) => { setStore({ currentUserUrl: text }); },

			getCurrentUser: async () => {
				const uri = getStore().currentUserUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentUser: data.result });
			},

			// Lógica para Planetas
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ planets: data.results });
			},

			settingPlanet: (planet) => { setStore({ currentPlanet: planet }); },
			settingPlanetUrl: (text) => { setStore({ currentPlanetUrl: text }); },

			getCurrentPlanet: async () => {
				const uri = getStore().currentPlanetUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentPlanet: data.result });
			},

			// Lógica para Vehículos
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ vehicles: data.results });
			},

			settingVehicle: (vehicle) => { setStore({ currentVehicle: vehicle }); },
			settingVehicleUrl: (text) => { setStore({ currentVehicleUrl: text }); },

			getCurrentVehicle: async () => {
				const uri = getStore().currentVehicleUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentVehicle: data.result });
			},


			//Logica para contacts
			getContacts: async () => {
				const uri = `${getStore().apiContact}agendas/${getStore().agenda}/contacts`
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error", response.status, response.statusText);
					return;
				}
				const data = await response.json();

				console.log(data.contacts)
				setStore({ contacts: data.contacts });
			},

			//Lógica para añadir contactos
			addContact: async (contact) => {
				const store = getStore();
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().agenda}/contacts`, {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					const newContact = await response.json();
					setStore({ contacts: [...store.contacts, newContact] });
				}
			},
			deleteContact: async (id) => {
				const store = getStore();
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().agenda}/contacts/${id}`, {
					method: "DELETE"
				});
				if (response.ok) {
					setStore({ contacts: store.contacts.filter(contact => contact.id !== id) });
				}
			},


			//Lógica para favoritos

			
			addFavorites: (favorite) => {
				const store = getStore();
				const existingFavorites = store.favorites;
				const isAlreadyFavorite = existingFavorites.some(item => item.name === favorite.name && item.type === favorite.type);
				if (!isAlreadyFavorite) {
					setStore({ favorites: [...existingFavorites, favorite] });
				}
			},

			// Función para borrar el favorito
			removeFavorite: (name) => {
				const existingFavorites = getStore().favorites;
				const updatedFavorites = existingFavorites.filter(item => item.name !== name);
				setStore({ favorites: updatedFavorites });
			}

		}
	};
};

export default getState;
