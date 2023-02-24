import { DECREAMENT, INCREAMENT } from "./actionTypes";

const initaialSate = {
    value: 0,
}

const counterReducer = (state = initaialSate, action) => {
    switch (action.type){
        case INCREAMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };

        case DECREAMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };   

        default:
            return state;
    }
}

export default counterReducer;