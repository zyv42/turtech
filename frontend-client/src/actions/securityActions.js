import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8111/users", newUser);
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
    history.push("/login");
};

export const login = LoginRequest => async dispatch => {
    try {
        // As it is said in axios wiki, by default, axios serializes JavaScript objects to JSON.
        // So to send data in the application/x-www-form-urlencoded you need to use params
        const params_token = new URLSearchParams();

        params_token.append('grant_type', 'password');
        params_token.append('client_id', 'turtech-browser-client');
        params_token.append('username', LoginRequest.username);
        params_token.append('password', LoginRequest.password);

        const res_token = await axios.post(
            "http://localhost:8103/auth/realms/turtech/protocol/openid-connect/token",
                params_token);
        // store the token in the localStorage
        localStorage.setItem("jwtToken", res_token.data.access_token);
        localStorage.setItem("refreshToken", res_token.data.refresh_token);
        // set out token in the header
        setJWTToken(res_token.data.access_token);

        const res_user_info = await axios.get(
            "http://localhost:8103/auth/realms/turtech/protocol/openid-connect/userinfo"
        );

        localStorage.setItem("userInfo", JSON.stringify(res_user_info.data));
        const current_user = {
            token: {},
            userInfo: []
        }
        current_user.token = res_token.data.access_token;
        current_user.userInfo = res_user_info.data;

        dispatch({
            type: SET_CURRENT_USER,
            payload: current_user,
        });
    } catch (error) {
  //      dispatch({
 //           type: GET_ERRORS,
  //          payload: error.response.data
  //      });
    }
};
/*
export const refreshTokenAction = (refresh_token) => async dispatch => {
    try{
        const params = new URLSearchParams();

        params.append('grant_type', 'refresh_token');
        params.append('client_id', 'turtech-browser-client');
        params.append('refresh_token', refresh_token);

        const res = await axios.post(
            "http://localhost:8103/auth/realms/turtech/protocol/openid-connect/token",
            params);

        localStorage.setItem("jwtToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);

    } catch (error) {

    }
}
*/
export const logout = () => async dispatch => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
    window.location.replace("http://localhost:8103/auth/realms/turtech/protocol/openid-connect/logout?redirect_uri=http://localhost:3000/");
};
