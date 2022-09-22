import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionMove";

export default function Filter() {
    const items = useSelector((state) => state.filter);
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterService(items.filter, list));
    }, [list]);


    const handleFilter = (event) => {
        const { value } = event.target;
        dispatch(filterService(value, list));
    };

    return (
        <div className="filter_form">
            <input
                className="form-control"
                onChange={handleFilter}
                value={items.filter}

            />
        </div>
    );
}

