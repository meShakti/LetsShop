import React from "react";
import PropTypes from "prop-types";
import * as Layout from "./cart.module.css";

// Price card component
const PriceCard = ({className,totalPrice,currency,deleiveryPrice})=>{
	return(
		<div className={className}>
			<div className={Layout.heading}>
        Price Details
			</div>
			<div className={Layout.pricedetails}>
				<span> Price</span>
				<span>{currency} {totalPrice}</span>
				<span> Delivery Fee</span>
				<span>{currency} {deleiveryPrice}</span>
			</div>
			<div className={Layout.total}>
				<span > Total</span>
				<span>{currency} {totalPrice + deleiveryPrice}</span> 
			</div>
			<div >
				<button  className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-56"><a href="/Payment">Place order</a></button>
			</div>
		</div>

	);
};

PriceCard.propTypes = {
	className:PropTypes.string,
	currency:PropTypes.string,
	deleiveryPrice:PropTypes.number,
	totalPrice:PropTypes.number
};


export default PriceCard;