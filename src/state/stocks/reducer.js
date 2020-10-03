import { SAVE_FOR_LATER, ADD_TO_CART, REMOVE_FROM_CART,REMOVE_FROM_LATER } from "./types";

const initialState = { 
	cart:[],
	saveForLater:[]
};

export default function(state = initialState, action) {
	console.log(action);
	console.log(state);
	switch (action.type) {
	case ADD_TO_CART:
		return { ...state,cart:state.cart.concat(action.payload),
			saveForLater: state.saveForLater
				.filter((stock)=>stock.id!==action.payload.id) };
	case REMOVE_FROM_CART:
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id)};
	case SAVE_FOR_LATER:
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id),
		saveForLater: state.saveForLater.concat(action.payload)};
	case REMOVE_FROM_LATER:
		return { ...state, saveForLater: state.saveForLater
			.filter((stock)=>stock.id!==action.payload.id)};
	default:
		return state;	
	}
}
