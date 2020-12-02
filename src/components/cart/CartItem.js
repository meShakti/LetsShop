import React from "react";
import PropTypes from "prop-types";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import * as Layout from "./cart.module.css";
// Cart Item component
const CartItem = (props)=>{
	const {image,name,description,currency,cost,removeFromCart,saveForLaterAction,quantity,subtractItemFromCart,addToCart,writemode=false} = props; // eslint-disable-line
	return(<div className={Layout.item}>
		<div className={Layout.image}>
			<img src={image}></img>
			{writemode && (<div className= {Layout.inputgroup}>
				<IoMdRemoveCircleOutline className={Layout.button} onClick={()=>subtractItemFromCart(props.item)} disabled={!writemode} ></IoMdRemoveCircleOutline>
				<div className={Layout.quantity}>{quantity}</div>
				<IoMdAddCircleOutline className={Layout.button} onClick={()=>addToCart(props.item)}disabled={!writemode} ></IoMdAddCircleOutline>
			</div>) }	
		
		</div>
	
		<div>
			<p>{name}</p> 
			<p>{description}</p>
			{!writemode && (<p>Qt. {quantity}</p>)} 
			<p>{currency} {cost}</p>
			{writemode && (<div>
				<button onClick={()=>removeFromCart({...props})} className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
				<button onClick={()=>saveForLaterAction({...props})} className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Save For Later</button>
			</div>)}
		</div>
	</div>);
};

CartItem.propTypes = {
	image:PropTypes.string,
	name:PropTypes.string,
	description:PropTypes.string,
	currency:PropTypes.string,
	cost: PropTypes.number,
	subtractItemFromCart:PropTypes.func,
	removeFromCart: PropTypes.func,
	saveForLaterAction:PropTypes.func,
	removeFromLaterAction: PropTypes.func,
	item: PropTypes.any,
	writemode:PropTypes.bool
};

export default CartItem;