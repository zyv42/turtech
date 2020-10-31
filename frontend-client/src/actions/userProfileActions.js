import axios from "axios";
import {
    GET_USER_PAYMENT_OPTIONS,
    GET_USER_SHIPPING_ADDRESSES,
    GET_USER_ORDERS,
    GET_USER_ORDER_DETAILS,
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

export const getUserPaymentOptions = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8114/userPaymentOptions");
        dispatch({
            type: GET_USER_PAYMENT_OPTIONS,
            payload: res.data
        });
    } catch (error) {
    }
};

export const addUserPaymentOption = userPaymentOption => async dispatch => {
    try {
        await axios.post("/api/addNewUserPayment", userPaymentOption);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserPaymentOption = userPaymentOption => async dispatch => {
    try {
        await axios.put("/api/updateUserPayment", userPaymentOption);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const setDefaultUserPaymentOption = userPaymentOptionId => async dispatch => {
    try {
        await axios.get(`/api/setDefaultUserPayment/${userPaymentOptionId}`);
    } catch (error) {

    }
};

export const removeUserPaymentOption = userPaymentOptionId => async dispatch => {
    try {
        await axios.delete(`/api/removeUserPayment/${userPaymentOptionId}`);
    } catch (error) {

    }
};

export const getUserShippingAddresses = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8114/userShippingAddresses");
        dispatch({
            type: GET_USER_SHIPPING_ADDRESSES,
            payload: res.data
        });
    } catch (error) {
    }
};

export const addUserShippingAddress = userShippingAddress => async dispatch => {
    try {
        await axios.post("/api/addNewUserShippingAddress", userShippingAddress);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserShippingAddress = userShippingAddress => async dispatch => {
    try {
        await axios.put("/api/updateUserShippingAddress", userShippingAddress);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const setDefaultUserShippingAddress = userShippingAddressId => async dispatch => {
    try {
        await axios.get(`/api/setDefaultUserShippingAddress/${userShippingAddressId}`);
    } catch (error) {

    }
};

export const removeUserShippingAddress = userShippingAddressId => async dispatch => {
    try {
        await axios.delete(`/api/removeUserShippingAddress/${userShippingAddressId}`);
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

export const getUserOrderDetails = userOrderId => async dispatch => {
    try {
        const res = await axios.get(`/api/userOrders/${userOrderId}`);
        dispatch({
            type: GET_USER_ORDER_DETAILS,
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