import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);

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

    ]

    const getCharacters = async () => {
        const url = "https://www.swapi.tech/api/people/";
        const options = {
            method: "GET"
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        setCharacters(data.results); // Aquí asumo que los personajes están en la propiedad 'results' del objeto de respuesta.
        console.log(data);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="container text-center text-white">
            <div className="row">
                {characters.map((character, index) => (
                    <div key={index} className="col-lg-4 mb-3">
                        <div className="card my-4" style={{ width: "19rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
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

