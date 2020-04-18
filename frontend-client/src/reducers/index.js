import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import productReducer from "./productReducer";

export default combineReducers({
    security: securityReducer,
    products: productReducer
});