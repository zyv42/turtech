import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8111/newUser", newUser);
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
        // As it is said in axios wiki, by default, axios serializes JavaScript objects to JSON.
        // So to send data in the application/x-www-form-urlencoded you need to use params
        const params = new URLSearchParams();

        params.append('grant_type', 'password');
        params.append('client_id', 'turtech-browser-client');
        params.append('username', LoginRequest.username);
        params.append('password', LoginRequest.password);
        const res = await axios.post(
            "http://localhost:8103/auth/realms/turtech/protocol/openid-connect/token",
                params);
        // store the token in the localStorage
        localStorage.setItem("jwtToken", res.data.access_token);
        // set out token in the header
        setJWTToken(res.data.access_token);
        // decode token on React
        const decodedToken = jwt_decode(res.data.access_token);
        // dispatch to out securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decodedToken
        });
    } catch (error) {
  //      dispatch({
 //           type: GET_ERRORS,
  //          payload: error.response.data
  //      });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    //dispatch({
    //    type: SET_CURRENT_USER,
    //    payload: {}
    //});
    window.location.href= "/";
};
