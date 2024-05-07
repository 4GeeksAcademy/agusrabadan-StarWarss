import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {
    const [planets, setPlanets] = useState([]);

    const images = [
        "https://starwars-visualguide.com/assets/img/planets/11.jpg",
        "https://starwars-visualguide.com/assets/img/planets/2.jpg",
        "https://starwars-visualguide.com/assets/img/planets/3.jpg",
        "https://starwars-visualguide.com/assets/img/planets/4.jpg",
        "https://starwars-visualguide.com/assets/img/planets/5.jpg",
        "https://starwars-visualguide.com/assets/img/planets/6.jpg",
        "https://starwars-visualguide.com/assets/img/planets/7.jpg",
        "https://starwars-visualguide.com/assets/img/planets/8.jpg",
        "https://starwars-visualguide.com/assets/img/planets/9.jpg",
        "https://starwars-visualguide.com/assets/img/planets/10.jpg",

    ]

    const getPlanets = async () => {
        const url = "https://www.swapi.tech/api/planets/";
        const options = {
            method: "GET"
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        setPlanets(data.results); 
        console.log(data);
    };

    useEffect(() => {
        getPlanets();
    }, []);

    return (
        <div className="container text-center text-white">
            <div className="row">
                {planets.map((item, index) => (
                    <div key={index} className="col-lg-4 mb-3">
                        <div className="card my-4" style={{ width: "19rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <img height="280" src={images[index]} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <button type="button" class="btn btn-warning">+Info</button>
                                <i title="Add Favorite" style={{ cursor: "pointer" }} className="far fa-heart text-danger fs-3 "></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

