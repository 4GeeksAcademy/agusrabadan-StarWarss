import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { Link } from "react-router-dom";

export const Prueba = () => {
    const images = [
        "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        "https://starwars-visualguide.com/assets/img/characters/2.jpg",
        "https://starwars-visualguide.com/assets/img/characters/3.jpg",
        "https://starwars-visualguide.com/assets/img/characters/4.jpg",
        "https://starwars-visualguide.com/assets/img/characters/5.jpg",
        "https://starwars-visualguide.com/assets/img/characters/6.jpg",
        "https://starwars-visualguide.com/assets/img/characters/7.jpg",
        "https://starwars-visualguide.com/assets/img/characters/8.jpg",
        "https://starwars-visualguide.com/assets/img/characters/9.jpg",
        "https://starwars-visualguide.com/assets/img/characters/10.jpg",
    ];

    const { store, actions } = useContext(Context);

    const handleButton = (user) => {
        actions.settingUser(user);
    };

    return (
        <div className="container text-center text-white">
            <div className="row">
                {store.users.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-3">
                        <div className="card my-4" style={{ width: "19rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <img height="280" src={images[index]} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <Link to="/user/detail">
                                    <button type="button" onClick={() => handleButton(item.uid)} className="btn btn-warning">+Info</button>
                                </Link>
                                <i title="Add Favorite" style={{ cursor: "pointer" }} className="far fa-heart text-danger fs-3 "></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
