import axios from "axios";
import {GET_CART, ADD_TO_CART, GET_ERRORS} from "./types";

export const getShoppingCart = () => async dispatch => {
    const res = await axios.get(`http://localhost:8112/cart`);
    dispatch({
        type: GET_CART,
        payload: res.data
    });
};

export const addToCart = (productId, qty) => async dispatch => {
    try {
        await axios.get(`http://localhost:8112/addCartItem?productId=${productId}&qty=${qty}`);
        dispatch({
            type: ADD_TO_CART,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};