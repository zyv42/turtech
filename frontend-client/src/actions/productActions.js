import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProducts = page => async dispatch => {
    const res = await axios.get(`http://localhost:8112/all?page=${page}&size=10`);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};

// TODO properly implement addToCart action
export const addToCart = id => async dispatch => {
    console.log("Added to Cart!");
};