import { combineReducers } from "redux";
import productSlice from "./product";
import userSlice from "./user";

const rootReducer = combineReducers({ 
	userReducer :  userSlice.reducer,
	productReducer : productSlice.reducer
});

export default rootReducer;