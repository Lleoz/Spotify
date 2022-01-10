import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    data: {}
}

export const modalReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case types.modalOpen:
            return {
                ...state,
                modalOpen: true,
                data: action.payload
            }
        case types.modalClose:
            return {
                ...state,
                modalOpen: false,
                data: {}
            }
        default:
        return state;
    }
}