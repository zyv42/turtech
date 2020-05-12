import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    security: securityReducer,
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer,
    errors: errorReducer
});