import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSaveContact = () => {
        actions.addContact(newContact);
        setNewContact({ name: "", email: "", phone: "", address: "" });
    };

    return (
        <div className="container text-center">
            <h1 className="text-white">Contacts</h1>



            <ul className="list-group col-4 mx-auto ">
                {!store.contacts ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    store.contacts.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>{item.name}</strong>

                            <div className="ms-auto">

                                <span

                                    className="btn btn-danger"
                                    onClick={() => actions.deleteContact(item.id)}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </span>

                                <button
                                    type="button"
                                    className="btn btn-success me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#staticBackdrop-${index}`}
                                >
                                    <i className="fas fa-info-circle"></i>
                                </button>


                            </div>

                            <div
                                className="modal fade text-white"
                                id={`staticBackdrop-${index}`}
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby={`staticBackdropLabel-${index}`}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`staticBackdropLabel-${index}`}>
                                                {item.name}
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Email: {item.email}</p>
                                            <p>Phone: {item.phone}</p>
                                            <p>Address: {item.address}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            <button
                type="button"
                className="btn btn-success mt-4"
                data-bs-toggle="modal"
                data-bs-target="#addContactModal"
            >
                Add Contact
            </button>


            <form>
                <div
                    className="modal fade text-white"
                    id="addContactModal"
                    tabIndex="-1"
                    aria-labelledby="addContactModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addContactModalLabel">Add New Contact</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={newContact.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={newContact.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={newContact.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={newContact.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleSaveContact}
                                >
                                    Add Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
