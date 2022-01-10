import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer"

export const rootReducers = combineReducers({
    modal: modalReducer,
})