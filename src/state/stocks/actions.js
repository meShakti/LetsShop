import { ADD_TO_CART, SAVE_FOR_LATER, REMOVE_FROM_CART, REMOVE_FROM_LATER,SUBTRACT_ITEM_FROM_CART } from "./types";

export const addToCart = (stock) => {
	return ({ type: ADD_TO_CART,payload: stock });
};
export const removeFromCart = (stock) => {
	return ({ type: REMOVE_FROM_CART,payload: stock });
};
export const saveForLaterAction = (stock) => {
	return ({ type: SAVE_FOR_LATER,payload: stock });
};

export const removeFromLaterAction = (stock) => {
	return ({ type: REMOVE_FROM_LATER,payload: stock });
};
export const subtractItemFromCart = (stock) => {
	return ({ type: SUBTRACT_ITEM_FROM_CART,payload: stock });
};