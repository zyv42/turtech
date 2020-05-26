import axios from "axios";
import { GET_USER_PROFILE, GET_ERRORS } from "./types";

export const getUserProfile = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/userProfile/${id}`);
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
        await axios.post("/api/userProfile", userProfile);
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