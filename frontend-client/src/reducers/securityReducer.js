import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    userInfo: [],
    validToken: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            console.log(!!action.token);
            return {
                ...state,
                validToken: !!action.payload.token,
                userInfo: action.payload.userInfo
            };
        default:
            return state
    }
}