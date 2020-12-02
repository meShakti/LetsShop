import React, { useState } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import Address from "../addresses/List";
import CartItem from "../cart/CartItem";
import * as Layout from "./style.module.css";

const PlaceOrder = ({totalPrice,deleiveryPrice,cart,currency}) => {
	const [showPaymentForm, setPaymentForm] = useState(true);
	const showPayment = () => {
		setPaymentForm(!showPaymentForm);
	};
	return (
		<div className={Layout.container}>
			{/** Mobile View */}
			<PriceCard className={Layout.priceCardTop} currency={currency} goToLink='/Orders' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			<div className={Layout.left}>
				<div className={Layout.Address}>
					<div className={`bottom-border-1 ${Layout.header}`}>Select Address</div>
					<Address />
				</div>
				<div className={Layout.PaymentCard}>
					<p onClick={showPayment}>
						<div className={Layout.header}>Payment Options</div>
					</p>
					{showPaymentForm && <Payment />}
				</div>
				<div className="mt-10">
					<div className={`bottom-border-1 ${Layout.header}`}>Review Cart</div>
					{cart.map((item) => {
						return (<CartItem {...item}  item={item} key={item.id} />);
					})}
				</div>
			</div>
			
			<div className={Layout.pricecard}>
				{/** Desktop View */}
				<PriceCard  goToLink='/Orders' currency={currency} totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			</div>
		</div>
	);
};

PlaceOrder.propTypes = {
	totalPrice: PropTypes.number,
	deleiveryPrice: PropTypes.number,
	cart: PropTypes.any,
	currency:PropTypes.string
};
const mapStateToProps = state => ({
	cart:state.stockReducer.cart,
	totalPrice:state.stockReducer.cart.reduce((sum,stock)=>{ return sum+(stock.quantity*stock.cost);},0),
	deleiveryPrice: state.stockReducer.cart.reduce((sum,stock)=>{ return sum+ stock.delieveryCharge;},0),
	currency: (state.stockReducer.cart && state.stockReducer.cart[0]?.currency)
});

export default connect(mapStateToProps,null)(PlaceOrder);
