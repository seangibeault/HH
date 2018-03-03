import * as types from "../actions/actionTypes";


const initialState = {
    open: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.SIDE_NAV_OPEN:
            return {
                ...state,
                open: true
            };
        case types.SIDE_NAV_CLOSE:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
}

