import {
    GET_USER_PAYMENT_OPTIONS,
    GET_USER_ORDERS,
    GET_USER_ORDER_DETAILS,
    GET_USER_PROFILE,
    GET_USER_SHIPPING_ADDRESSES,
    GET_CART_ITEM_LIST_BY_ORDER_ID
} from "../actions/types";

const initialState = {
    userProfile: {},
    userPaymentOptions: [],
    userShippingAddresses: [],
    userOrders: [],
    userOrderDetails: {},
    cartItems: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            };

        case GET_USER_PAYMENT_OPTIONS:
            return {
                ...state,
                userPaymentOptions: action.payload
            };

        case GET_USER_SHIPPING_ADDRESSES:
            return {
                ...state,
                userShippingAddresses: action.payload
            };

        case GET_USER_ORDERS:
            return {
                ...state,
                userOrders: action.payload
            };

        case GET_USER_ORDER_DETAILS:
            return {
                ...state,
                userOrderDetails: action.payload
            };

        case GET_CART_ITEM_LIST_BY_ORDER_ID:
            return {
                ...state,
                cartItems: action.payload
            };

        default:
            return state;
    }
}