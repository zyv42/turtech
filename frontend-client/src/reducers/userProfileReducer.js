import {GET_USER_PAYMENT, GET_USER_ORDERS, GET_USER_PROFILE, GET_USER_SHIPPING} from "../actions/types";

const initialState = {
    userProfile: {},
    userPayment: [],
    userShipping: [],
    userOrders: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            };

        case GET_USER_PAYMENT:
            return {
                ...state,
                userPayment: action.payload
            };

        case GET_USER_SHIPPING:
            return {
                ...state,
                userShipping: action.payload
            };

        case GET_USER_ORDERS:
            return {
                ...state,
                userOrders: action.payload
            };

        default:
            return state;
    }
}