import axios from "axios";
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_TEXT_INPUT
} from "./types";

export const getProducts = (page, size) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8112/?page=${page}&size=${size}`);
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

export const getProductsByCategory = category => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8112/?category=${category}`);
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            payload: res.data
        });
    } catch (error) {

    }
};

export const getProductsByTextInput = input => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8112/?name=${input}
            &manufacturer=${input}
            &description=${input}`);
        dispatch({
            type: GET_PRODUCTS_BY_TEXT_INPUT,
            payload: res.data
        })
    } catch (error) {

    }
};
