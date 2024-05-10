import React, { useContext } from "react";
import { Context } from "./store/appContext";


export const UserDetail = () => {

    const { store, actions } = useContext(Context);
  

    return (
        <div className="card" style={{ width: "19rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{store.currentUser.name}</h5>
    <p className="card-text">{store.currentUser.name}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  
</div>
    )
}