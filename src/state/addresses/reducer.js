import { UPDATE_ADDRESS_LIST } from "./types";

const initialState = { 
	addresses:[]
};

export default function(state = initialState, action) {

	switch (action.type) {
	case UPDATE_ADDRESS_LIST:
		return {...state,addresses:action.payload};
	default:
		return state;	
	}
}
