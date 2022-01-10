import { type } from "@testing-library/user-event/dist/type"
import { types } from "../types/types"


export const modalOpen = (payload) => ({
    type: types.modalOpen,
    payload
})
export const modalClose = () => ({type: types.modalClose})

