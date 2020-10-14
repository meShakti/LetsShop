import React from "react";
import PropTypes from "prop-types";
import * as Layout from "./cart.module.css";

// Save for later component
const SaveForLaterItem = (props)=>{
	const {image,name,description,currency,cost,removeFromLaterAction,addToCart} = props; // eslint-disable-line
	return(<div className={Layout.item}>
		<div className={Layout.image}>
			<img src={image}></img>
		
		</div>
	
		<div>
			<p>{name}</p> 
			<p>{description}</p> 
			<p>{currency} {cost}</p>
			<div>
				<button onClick={()=>removeFromLaterAction({...props})} className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
				<button onClick={()=>addToCart({...props})} className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Add to Cart</button>
			</div>
		</div>
	</div>);
};

SaveForLaterItem.propTypes = {
	image:PropTypes.string,
	name:PropTypes.string,
	description:PropTypes.string,
	currency:PropTypes.string,
	cost: PropTypes.number,
	
	removeFromCart: PropTypes.func,
	saveForLaterAction:PropTypes.func,
	removeFromLaterAction: PropTypes.func
};

export default SaveForLaterItem;