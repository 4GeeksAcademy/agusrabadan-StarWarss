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
          <div className="card" style={{ width: "19rem" }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">{store.currentUser.properties.name}</h5>
                  <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">{store.currentUser.properties.height}</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
              </ul>
          </div> 
      
  );
}