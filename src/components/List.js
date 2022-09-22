import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editServiceField } from "../actions/actionMove";

export default function List() {
    const items = useSelector((state) => state.list);
    const filterItems = useSelector((state) => state.filter);
    const [data, setData] = useState(items);
    const dispatch = useDispatch();

    useEffect(() => {

        const result = filterItems.filter ? filterItems.items : items;
        setData(result);
    }, [filterItems, items]);

    const handleRemove = (id) => {
        dispatch(removeService(id));
    };

    const handleEdit = (item) => {
        dispatch(editServiceField(item.id, item.name, item.price));
    };

    return (
        <ul className="list-group">
            {data.map((o) => (
                <li key={o.id} className="list-group-item">
                    {o.name} {o.price}
                    <div>
                        <button className="btn btn-secondary" onClick={() => handleEdit(o)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(o.id)}
                        >
                            X
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

