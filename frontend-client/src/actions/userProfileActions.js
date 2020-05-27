import axios from "axios";
import { GET_USER_PROFILE, GET_ERRORS } from "./types";

export const getUserProfile = (id, history) => async dispatch => {
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