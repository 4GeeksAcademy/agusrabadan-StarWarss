import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState(store.favorites.map(item => item.name));

    const toggleFavorite = (name) => {
        if (favorites.includes(name)) {
            const updatedFavorites = favorites.filter(item => item !== name);
            setFavorites(updatedFavorites);
            actions.removeFavorite(name);
        } else {
            setFavorites([...favorites, name]);
            actions.addFavorites({ name });
        }
    };
    
    const isFavorite = (name) => favorites.includes(name);

    const handleVehicle = (url) => {
        actions.settingVehicleUrl(url);
    };

    return (
        <div className="container text-center text-white">
            <div className="row">
                {store.vehicles.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-3">
                        <div className="card my-4" style={{ width: "19rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <img height="280" src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <Link to= {`/detail-vehicles/${item.uid}`}
                                    onClick={() => handleVehicle(item.url)} 
                                    className="btn btn-warning">+Info
                                </Link>
                                <span onClick={() => toggleFavorite(item.name)}>
                                    <i title="Add Favorite" style={{ cursor: "pointer" }} className={isFavorite(item.name) ? "fas fa-heart text-danger fs-3" : "far fa-heart text-danger fs-3"}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};