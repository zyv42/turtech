import axios from "axios";
import {
    GET_USER_PAYMENT,
    GET_USER_SHIPPING,
    GET_USER_ORDERS,
    GET_USER_ORDER,
    GET_ERRORS,
    GET_CART_ITEM_LIST_BY_ORDER_ID
} from "./types";

export const updateUserProfile = userProfile => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8111/updateProfile", userProfile);
        if (res.status === 200) {
            this.status.infoUpdated = true;
        }
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        console.log(error);
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
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserPayment = userPayment => async dispatch => {
    try {
        await axios.put("/api/updateUserPayment", userPayment);
        dispatch({
            type: GET_ERRORS,
            payload: {}
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
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserShippingAddress = userShipping => async dispatch => {
    try {
        await axios.put("/api/updateUserShippingAddress", userShipping);
        dispatch({
            type: GET_ERRORS,
            payload: {}
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

export const getUserOrder = userOrderId => async dispatch => {
    try {
        const res = await axios.get(`/api/userOrders/${userOrderId}`);
        dispatch({
            type: GET_USER_ORDER,
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