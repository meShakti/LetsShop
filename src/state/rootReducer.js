import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import stockReducer from "./stocks/reducer";
export default combineReducers({
	counterReducer,
	stockReducer

});
