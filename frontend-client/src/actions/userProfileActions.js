import axios from "axios";
import {
    GET_USER_PAYMENT_OPTIONS,
    GET_USER_SHIPPING_ADDRESSES,
    GET_USER_ORDERS,
    GET_USER_ORDER_DETAILS,
    GET_ERRORS,
    GET_CART_ITEM_LIST_BY_ORDER_ID, GET_USER_PAYMENT_OPTION, GET_USER_SHIPPING_ADDRESS, GET_USER_BILLING_ADDRESS
} from "./types";

export const updateUserProfile = (userId, userProfile) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8111/users/${userId}`, userProfile);
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

export const getUserPaymentOptions = userId => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8111/users/${userId}/payment-options`);
        dispatch({
            type: GET_USER_PAYMENT_OPTIONS,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getUserPaymentOption = (userId, userPaymentOptionId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8111/users/${userId}/payment-options/${userPaymentOptionId}`);
        dispatch({
            type: GET_USER_PAYMENT_OPTION,
            payload: res.data
        });
    } catch (error) {

    }
};

export const addUserPaymentOption = (userId, userPaymentOption) => async dispatch => {
    try {
        await axios.post(`http://localhost:8111/users/${userId}/payment-options`, userPaymentOption);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserPaymentOption = (userId, paymentOptionId, userPaymentOption) => async dispatch => {
    try {
        await axios.put(`http://localhost:8111/users/${userId}/payment-options/${paymentOptionId}`, userPaymentOption);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const setDefaultUserPaymentOption = (userId, paymentOptionId) => async dispatch => {
    try {
        await axios.put(`http://localhost:8111/users/${userId}/payment-options/${paymentOptionId}/set-default`);
    } catch (error) {

    }
};

export const removeUserPaymentOption = (userId, paymentOptionId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:8111/users/${userId}/payment-options/${paymentOptionId}`);
    } catch (error) {

    }
};

export const getUserBillingAddress = (userId, userBillingAddressId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8111/users/${userId}/payment-options/${userBillingAddressId}`);
        dispatch({
            type: GET_USER_BILLING_ADDRESS,
            payload: res.data
        });
    } catch (error) {

    }
};

export const getUserShippingAddresses = userId => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8111/users/${userId}/shipping-addresses`);
        dispatch({
            type: GET_USER_SHIPPING_ADDRESSES,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getUserShippingAddress = (userId, userShippingAddressId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8111/users/${userId}/payment-options/${userShippingAddressId}`);
        dispatch({
            type: GET_USER_SHIPPING_ADDRESS,
            payload: res.data
        });
    } catch (error) {

    }
};

export const addUserShippingAddress = (userId, userShippingAddress) => async dispatch => {
    try {
        await axios.post(`http://localhost:8111/users/${userId}/shipping-addresses`, userShippingAddress);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const updateUserShippingAddress = (userId, shippingAddressId, userShippingAddress) => async dispatch => {
    try {
        await axios.put(`http://localhost:8111/users/${userId}/shipping-addresses/${shippingAddressId}`, userShippingAddress);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {

    }
};

export const setDefaultUserShippingAddress = (userId, shippingAddressId) => async dispatch => {
    try {
        await axios.get(`http://localhost:8111/users/${userId}/shipping-addresses/${shippingAddressId}/set-default`);
    } catch (error) {

    }
};

export const removeUserShippingAddress = (userId, shippingAddressId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:8111/users/${userId}/shipping-addresses/${shippingAddressId}`);
    } catch (error) {

    }
};

export const getUserOrders = userId => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8114/users/${userId}/orders`);
        dispatch({
            type: GET_USER_ORDERS,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getUserOrderDetails = (userId, orderId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8114/users/${userId}/orders/${orderId}`);
        dispatch({
            type: GET_USER_ORDER_DETAILS,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getCartItemListByOrderId = (userId, orderId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8114/users/${userId}/orders/${orderId}/cart-items`);
        dispatch({
            type: GET_CART_ITEM_LIST_BY_ORDER_ID,
            payload: res.data
        });
    } catch (error) {

    }
};