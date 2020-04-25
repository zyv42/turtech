import axios from "axios";
import { GET_REVIEWS, LEAVE_REVIEW, GET_ERRORS } from "./types";

export const leaveReview = (review, history) => async dispatch => {
  try {
      await axios.post("", review);
      history.push("");
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

export const getReviews = page => async dispatch => {
    const res = await axios.get("");
    dispatch({
       type: GET_REVIEWS,
       payload: res.data
    });
};