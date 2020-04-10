import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProducts = page => async dispatch => {
    const res = await axios.get(`/api/_product/all?page=${page}&size=10`)
        .then( res => {
           const totalPages = res.data.totalPages;
           const itemsCountPerPage = res.data.size;
           const totalItemsCount = res.data.totalElements;

           this.setState({totalPages: totalPages});
           this.setState({totalItemsCount: totalItemsCount});
           this.setState({itemsCountPerPage: itemsCountPerPage});
        });
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};

// TODO properly implement addToCart action
export const addToCart = id => async dispatch => {
    console.log("Added to Cart!");
};