import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Users = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className="container text-center">
            <h1 className="text-white">{store.nombre}</h1>
            <h2 className="text-white">{store.city}
                {store.deportes.map((item) => <p> { item } </p>
                )}
            </h2>
            


        </div>

    )
}