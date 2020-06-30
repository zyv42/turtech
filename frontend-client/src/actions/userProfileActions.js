import axios from "axios";
import {
    GET_USER_PROFILE,
    GET_USER_PAYMENT,
    GET_USER_SHIPPING,
    GET_USER_ORDERS,
    GET_ERRORS,
    GET_CART_ITEM_LIST_BY_ORDER_ID
} from "./types";

export const getUserProfile = history => async dispatch => {
    try {
        const res = await axios.get("/api/userProfile/current");
        dispatch({
            type: GET_USER_PROFILE,
            payload: res.data
        });
    } catch (error) {
        history.push("/welcome");
    }
};

export const updateUserProfile = userProfile => async dispatch => {
    try {
        const res = await axios.post("/api/userProfile/current", userProfile);
        if (res.status === 200) {
            this.status.infoUpdated = true;
        }
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getUserPayment = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/userPayment/${userId}`);
        dispatch({
            type: GET_USER_PAYMENT,
            payload: res.data
        });
    } catch (error) {
    }
};

export const addUserPayment = userPayment => async dispatch => {
    try {
        await axios.post("/api/addNewUserPayment", userPayment);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    } catch (error) {

    }
};

export const updateUserPayment = userPayment => async dispatch => {
    try {
        await axios.put("/api/updateUserPayment", userPayment);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    } catch (error) {

    }
};

export const setDefaultUserPayment = userPaymentId => async dispatch => {
    try {
        await axios.get(`/api/setDefaultUserPayment/${userPaymentId}`);
    } catch (error) {

    }
};

export const removeUserPayment = userPaymentId => async dispatch => {
    try {
        await axios.delete(`/api/removeUserPayment/${userPaymentId}`);
    } catch (error) {

    }
};

export const getUserShippingAddresses = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/userShipping/${userId}`);
        dispatch({
            type: GET_USER_SHIPPING,
            payload: res.data
        });
    } catch (error) {
    }
};

export const addUserShippingAddress = userShipping => async dispatch => {
    try {
        await axios.post("/api/addNewUserShippingAddress", userShipping);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    } catch (error) {

    }
};

export const updateUserShippingAddress = userShipping => async dispatch => {
    try {
        await axios.put("/api/updateUserShippingAddress", userShipping);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    } catch (error) {

    }
};

export const setDefaultUserShippingAddress = userShippingId => async dispatch => {
    try {
        await axios.get(`/api/setDefaultUserShippingAddress/${userShippingId}`);
    } catch (error) {

    }
};

export const removeUserShippingAddress = userShippingId => async dispatch => {
    try {
        await axios.delete(`/api/removeUserShippingAddress/${userShippingId}`);
    } catch (error) {

    }
};

export const getUserOrders = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/userOrders/${userId}`);
        dispatch({
            type: GET_USER_ORDERS,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getCartItemListByOrderId = orderId => async dispatch => {
    try {
        const res = await axios.get(`/api/cartItemsByOrderId/${orderId}`);
        dispatch({
            type: GET_CART_ITEM_LIST_BY_ORDER_ID,
            payload: res.data
        });
    } catch (error) {

    }
};