import React from "react";
import PropTypes from "prop-types";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import * as Layout from "./cart.module.css";

const CartItem = (props)=>{
	const {image,name,description,currency,cost,removeFromCart,saveForLaterAction,quantity,subtractItemFromCart,addToCart} = props; // eslint-disable-line
	return(<div className={Layout.item}>
		<div className={Layout.image}>
			<img src={image}></img>
			<div className= {Layout.inputgroup}>
				<IoMdRemoveCircleOutline className={Layout.button}onClick={()=>subtractItemFromCart(props.item)} ></IoMdRemoveCircleOutline>
				<div className={Layout.quantity}>{quantity}</div>
				<IoMdAddCircleOutline className={Layout.button} onClick={()=>addToCart(props.item)} ></IoMdAddCircleOutline>
			</div>
		
		</div>
	
		<div>
			<p>{name}</p> 
			<p>{description}</p> 
			<p>{currency} {cost}</p>
			<div>
				<button onClick={()=>removeFromCart({...props})} className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
				<button onClick={()=>saveForLaterAction({...props})} className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Save For Later</button>
			</div>
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
	item: PropTypes.any
};

export default CartItem;