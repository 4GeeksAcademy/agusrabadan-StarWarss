const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }
			],
			users: [""],
			currentUser: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getUsers : async () => {
				
				const response = await fetch ("https://www.swapi.tech/api/people/" )
				if(!response.ok){
					console.log("Error");
					return
				}
				const data= await response.json();
					console.log(data)
					setStore({users:data.results});
			},
			settingUser: (user) => {setStore ({currentUser:user})}

			
		}
	};
};

export default getState;
