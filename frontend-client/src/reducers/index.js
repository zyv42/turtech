import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
    security: securityReducer,
    products: productReducer,
    reviews: reviewReducer
});