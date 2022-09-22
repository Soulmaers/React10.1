import { createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/list";
import serviceAddReducer from "../reducers/add";
import serviceFilterReducer from "../reducers/filter";

const reducer = combineReducers({
    list: serviceListReducer,
    add: serviceAddReducer,
    filter: serviceFilterReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;