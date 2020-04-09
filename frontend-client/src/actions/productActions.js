import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProducts = () => async dispatch => {
    const res = await axios.get("/api/_product/all");
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};