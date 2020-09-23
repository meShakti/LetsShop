import { SAVE_FOR_LATER, ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const initialState = { 
	cart:[],
	saveForLater:[]
};

export default function(state = initialState, action) {
	switch (action.type) {
	case ADD_TO_CART:
		return { ...state,cart:state.cart.concat(action.payload) };
	case REMOVE_FROM_CART:
		return { ...state,counter: state.counter + 1 };
	case SAVE_FOR_LATER:
		return { ...state,counter: state.counter + 1 };
	default:
		return state;
	}
}
