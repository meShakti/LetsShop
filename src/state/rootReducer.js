import { combineReducers } from "redux";
import stockReducer from "./stocks/reducer";
import addressReducer from "./addresses/reducer";

export default combineReducers({
	stockReducer,
	addressReducer

});
