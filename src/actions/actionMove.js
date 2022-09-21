import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE_FIELD,
    EDIT_SERVICE,
    CLEAR_SERVICE_FIELD,

} from './actionType';

export default function addService(name, price) {
    return {
        type: ADD_SERVICE,
        payload: { name, price }
    }
}
export default function removeService({ id }) {
    return {
        type: REMOVE_SERVICE,
        payload: { id }
    }
}
export default function changeServiceField({ name, value }) {
    return {
        type: CHANGE_SERVICE_FIELD,
        payload: { name, value }
    }
}
export default function editServiceField({ id, name, value }) {
    return {
        type: EDIT_SERVICE_FIELD,
        payload: { id, name, value }
    }
}
export default function editService({ id, name, value }) {
    return {
        type: EDIT_SERVICE,
        payload: { id, name, value }
    }
}
export default function clearServiceFiled() {
    return {
        type: CLEAR_SERVICE_FIELD,

    }
}