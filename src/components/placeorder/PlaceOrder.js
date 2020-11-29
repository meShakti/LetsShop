import React, { useState } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import * as Layout from "./style.module.css";
import Address from "../addresses/List";
const PlaceOrder = ({totalPrice,deleiveryPrice}) => {
	const [showPaymentForm, setPaymentForm] = useState(true);
	const showPayment = () => {
		setPaymentForm(!showPaymentForm);
	};
	return (
		<div className={Layout.container}>
			{/** Mobile View */}
			<PriceCard className={Layout.priceCardTop} goToLink='/Orders' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			<div className={Layout.left}>
				<div className={Layout.Address}>
					<p>
						<div className={`bottom-border-1 ${Layout.header}`}>Select Address</div>
					</p>
					<Address />
				</div>
				<div className={Layout.PaymentCard}>
					<p onClick={showPayment}>
						<div className={Layout.header}>Payment Options</div>
					</p>
					{showPaymentForm && <Payment />}
				</div>
			</div>
			<div className={Layout.pricecard}>
				{/** Desktop View */}
				<PriceCard  goToLink='/Orders' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			</div>
		</div>
	);
};

PlaceOrder.propTypes = {
	totalPrice: PropTypes.number,
	deleiveryPrice: PropTypes.number,
};
const mapStateToProps = state => ({
	totalPrice:state.stockReducer.cart.reduce((sum,stock)=>{ return sum+(stock.quantity*stock.cost);},0),
	deleiveryPrice: state.stockReducer.cart.reduce((sum,stock)=>{ return sum+ stock.delieveryCharge;},0),
});

export default connect(mapStateToProps,null)(PlaceOrder);
