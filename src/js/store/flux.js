const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			users: [],
			currentUser: null,
			currentUserUrl: ""

		},

		actions: {

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

			}
		}
	};
};

export default getState;
