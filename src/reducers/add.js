import {
    CHANGE_SERVICE_FIELD,
    ADD_SERVICE,
    EDIT_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    EDIT_SERVICE,
    REMOVE_SERVICE,
} from '../actions/actionType';


const initialState = {
    name: '',
    price: ''
}


export default function addReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const { name, value } = action.payload;
            return { ...state, [name]: value }
        }
        case EDIT_SERVICE_FIELD: {
            return action.payload;
        }
        case ADD_SERVICE, CLEAR_SERVICE_FIELD, EDIT_SERVICE, REMOVE_SERVICE: {
            return initialState
        }
        default:
            return state
    }

}