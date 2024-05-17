import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { Link } from "react-router-dom";

export const Characterss = () => {
    const { store, actions } = useContext(Context);

    const handleUser = (url) => {
        actions.settingUserUrl(url);
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
                            <img height="280" src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <Link to={`/detail-users/${item.uid}`}
                                    onClick={() => handleUser(item.url)}
                                    className="btn btn-warning">+Info
                                </Link>
                                <span onClick={() => actions.addFavorites({ name: item.name })}>
                                    <i title="Add Favorite" style={{ cursor: "pointer" }} className="far fa-heart text-danger fs-3"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
