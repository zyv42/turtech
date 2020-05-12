import {GET_CART, ADD_TO_CART} from "../actions/types";

const initialState = {
    shoppingCart: {},
    cartItemList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                shoppingCart: action.payload,
                cartItemList: action.payload.cartItemList
            };

        default:
            return state;
    }
}