import { DECREAMENT, INCREAMENT } from "./actionTypes"

export const increament = (value) => {
    return {
        type: INCREAMENT,
        payload: value,
    }
}

export const decreament = (value) => {
    return {
        type: DECREAMENT,
        payload: value,
    }
}