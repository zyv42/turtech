import axios from "axios";
import { GET_USER_PROFILE, GET_USER_BILLING, GET_USER_SHIPPING, GET_USER_ORDERS, GET_ERRORS } from "./types";

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

export const getUserBilling = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/userBilling/${userId}`);
        dispatch({
            type: GET_USER_BILLING,
            payload: res.data
        });
    } catch (error) {
    }
};

export const getUserShipping = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/userShipping/${userId}`);
        dispatch({
            type: GET_USER_SHIPPING,
            payload: res.data
        });
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