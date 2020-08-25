import axios from "axios";
import {GET_PRODUCT, GET_PRODUCTS} from "./types";

export const getProducts = (page, size) => async dispatch => {
    const res = await axios.get(`http://localhost:8112/?page=${page}&size=${size}`);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};

export const getProduct = (productId, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8112/${productId}`);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        history.push("/products");
    }
};
