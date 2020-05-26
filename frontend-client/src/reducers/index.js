import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import cartReducer from "./cartReducer";
import userProfileReducer from "./userProfileReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    security: securityReducer,
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer,
    userProfile: userProfileReducer,
    errors: errorReducer
});