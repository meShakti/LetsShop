import { SAVE_FOR_LATER, ADD_TO_CART, REMOVE_FROM_CART,REMOVE_FROM_LATER,SUBTRACT_ITEM_FROM_CART } from "./types";

const initialState = { 
	cart:[],
	saveForLater:[]
};

export default function(state = initialState, action) {
	// variables to maintain for corner cases if cart is empty or a new item added to cart
	// or if cart's exciting item has to increase

	let isItemAlreadyInCart = false;
	let countReachesZero = false;
	let modifiedCart;
	let newcart;
	switch (action.type) {
	case ADD_TO_CART:
		// adds item to cart and removes the item from save for later if it is there
		newcart =  state.cart.map((item)=>{
			if(item.id===action.payload.id){
				item.quantity+=1;
				isItemAlreadyInCart = true;
			}
			return item;
		});
		//If item is already in cart increment quantity else push new item
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
		// If quantitiy reaches 0 remove the item from count
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
		// removes item from cart
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id)};
	case SAVE_FOR_LATER:
		// removes item from cart and add it to save for later bucket
		return { ...state, cart: state.cart
			.filter((stock)=>stock.id!==action.payload.id),
		saveForLater: state.saveForLater.concat({...action.payload,quantity:1})};
	case REMOVE_FROM_LATER:
		// removes the item from save for later bucket
		return { ...state, saveForLater: state.saveForLater
			.filter((stock)=>stock.id!==action.payload.id)};
	default:
		return state;	
	}
}
