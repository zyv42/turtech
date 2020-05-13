import {GET_CART, ADD_TO_CART} from "../actions/types";

const initialState = {
    shoppingCart: {},
    cartItemList: [],
    grandTotal: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                shoppingCart: action.payload,
                cartItemList: action.payload.cartItemList,
                grandTotal: action.payload.grandTotal
            };

        default:
            return state;
    }
}