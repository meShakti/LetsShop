import { createStore } from "redux";

import rootReducer from "./rootReducer";

export default function initializeStore(initialState = {}) {
	return createStore(
		rootReducer,
		initialState
	);
}
