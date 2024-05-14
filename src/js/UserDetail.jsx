import React, { useContext, useEffect } from "react";
import { Context } from "./store/appContext";


export const UserDetail = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
			actions.getCurrentUser();
		}, []);
			
  

    return (
       !store.currentUser ? 
          <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
       :  
       <div className="card mb-3" style={{ maxWidth: "540px" }}>

       <div className="row g-0">
         <div className="col-md-4">
         <img src={`https://starwars-visualguide.com/assets/img/characters/${store.currentUser.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
         </div>
         <div className="col-md-8">
           <div className="card-body">
             <h5 className="card-title text-white">{store.currentUser.properties.name}</h5>
             <p className="card-text text-white">Height: {store.currentUser.properties.height}</p>
             <p className="card-text text-white">Mass: {store.currentUser.properties.mass}</p>
             <p className="card-text text-white">Hair: {store.currentUser.properties.hair_color}</p>
             <p className="card-text"><small className="text-body-secondary">Algo</small></p>
           </div>
         </div>
       </div>
     </div>
      
  );
}