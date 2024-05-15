import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);


    return (
        <div className="container text-center">
            <h1 className="text-white">Contactos</h1>

            <ul className="list-group">

                {!store.contacts ? <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                        </div> :
                    store.contacts.map((item, index) =>
                        
                        <li key={index} className="list-group-item"> 
                            {item.name}
                        </li>
                    )
                }


            </ul>
        </div>
    );
};
