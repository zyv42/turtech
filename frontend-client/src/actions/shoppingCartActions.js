import axios from "axios";
import {GET_CART, ADD_TO_CART} from "./types";

export const getShoppingCart = () => async dispatch => {
    const res = await axios.get(`http://localhost:8112/cart`);
    dispatch({
        type: GET_CART,
        payload: res.data
    });
};

// TODO properly implement addToCart action
export const addToCart = id => async dispatch => {
    console.log("Added to Cart!");
};