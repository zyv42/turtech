import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("/accounts/", JSON.stringify({
            username: newUser.username,
            password: newUser.password
        }));
        history.push("/login");
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

export const login = LoginRequest => async dispatch => {
    try {
        // post => Login Request
        const res = await axios.post("/uaa/oauth/token", {
            scope: "ui",
            username: LoginRequest.username,
            password: LoginRequest.password,
            grant_type: "password"
        }, {
            headers: {'Authorization': 'Basic YnJvd3Nlcjo=',
                        'Content-Type': 'application/json'}
        });
        // extract token from response data
        const { token } = res.data;
        // store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        // set out token in the header
        setJWTToken(token);
        // decode token on React
        const decodedToken = jwt_decode(token);
        // dispatch to out securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decodedToken
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};
