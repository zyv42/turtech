import axios from "axios";
import {
    GET_PRODUCT,
    GET_PRODUCTS
} from "./types";

export const getProducts = (category, textInput, page, size) => async dispatch => {
    let url;
    if (category === null || category === "All") {
        if (textInput != null) {
            url = `http://localhost:8112/?name=${textInput}` +
 //               `&manufacturer=${textInput}` +
 //               `&description=${textInput}` +
                `&page=${page}` +
                `&size=${size}`;
        } else {
            url = `http://localhost:8112/?page=${page}` +
                `&size=${size}`;
        }
    } else {
        if (textInput != null) {
            url = `http://localhost:8112/?category=${category}` +
                `&name=${textInput}` +
                `&manufacturer=${textInput}` +
                `&description=${textInput}` +
                `&page=${page}` +
                `&size=${size}`;
        } else {
            url = `http://localhost:8112/?category=${category}` +
                `&page=${page}` +
                `&size=${size}`;
        }
    }

    try {
        const res = await axios.get(url.toString());
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    } catch (error) {
    }
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
