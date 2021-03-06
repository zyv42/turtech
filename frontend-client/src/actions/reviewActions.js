import axios from "axios";
import { GET_REVIEWS, LEAVE_REVIEW, GET_ERRORS } from "./types";

export const leaveReview = (productId, review, history) => async dispatch => {
  try {
      await axios.post(`http://localhost:8112/products/${productId}/user-reviews`, review);
      dispatch({
         type: GET_ERRORS,
         payload: {}
      });
  } catch(error) {
      dispatch({
          type: GET_ERRORS,
          payload: error.response.data
      });
  }
};

export const getReviewsByProduct = (productId, page) => async dispatch => {
    const res = await axios.get(`http://localhost:8112/products/${productId}/user-reviews?page=${page}&size=10`);
    dispatch({
       type: GET_REVIEWS,
       payload: res.data
    });
};