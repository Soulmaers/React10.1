import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeServiceField,
    addService,
    editService,
    clearServiceField,
} from "../actions/actionMove";

export default function Add() {
    const item = useSelector((state) => state.add);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.name === "") return;

        if (item.id) {
            dispatch(editService(item.id, item.name, item.price));
        } else {
            dispatch(addService(item.name, item.price));
        }
    };

    const handleClear = (event) => {
        event.preventDefault();
        dispatch(clearServiceField());
    };

    return (
        <div className="add_form">
            <input
                className="form-control"
                name="name"
                onChange={handleChange}
                value={item.name}
                placeholder="Наименование"
            />
            <input
                className="form-control"
                name="price"
                type="number"
                onChange={handleChange}
                value={item.price}
                placeholder="Стоимость"
            />
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            {item.id && <button className="btn btn-secondary" onClick={handleClear}>Cancel</button>}
        </div>
    );
}

