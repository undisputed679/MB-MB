import { combineReducers } from "redux";

import userReducer from "./user/User.Reducer";
import cartReducer from "./cart/cart.reducer";


export default combineReducers({
    user : userReducer,
    cart:cartReducer

}); 