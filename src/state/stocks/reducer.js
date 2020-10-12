import { SAVE_FOR_LATER, ADD_TO_CART, REMOVE_FROM_CART,REMOVE_FROM_LATER,SUBTRACT_ITEM_FROM_CART } from "./types";

const initialState = { 
	cart:[],
	saveForLater:[]
};

export default function(state = initialState, action) {
	let isItemAlreadyInCart = false;
	let countReachesZero = false;
	let modifiedCart;
	let newcart;
	switch (action.type) {
	case ADD_TO_CART:
		newcart =  state.cart.map((item)=>{
			if(item.id===action.payload.id){
				item.quantity+=1;
				isItemAlreadyInCart = true;
			}
			return item;
		});
		!isItemAlreadyInCart && newcart.push(action.payload);
		return { ...state,cart:newcart,
			saveForLater: state.saveForLater
				.filter((stock)=>stock.id!==action.payload.id) };
	
	case SUBTRACT_ITEM_FROM_CART:
		modifiedCart = state.cart.map((item)=>{
			if(item.id===action.payload.id){
				item.quantity-=1;
				countReachesZero = item.quantity===0;
			}
			return item;
		});
		if(countReachesZero){
			return { ...state, cart: state.cart
				.filter((stock)=>stock.id!==action.payload.id)};
		}
		else{
			return { ...state,cart:modifiedCart,
				saveForLater: state.saveForLater
					.filter((stock)=>stock.id!==action.payload.id) };
		}
	case REMOVE_FROM_CART:
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id)};
	case SAVE_FOR_LATER:
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id),
		saveForLater: state.saveForLater.concat({...action.payload,quantity:1})};
	case REMOVE_FROM_LATER:
		return { ...state, saveForLater: state.saveForLater
			.filter((stock)=>stock.id!==action.payload.id)};
	default:
		return state;	
	}
}
