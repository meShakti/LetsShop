import React, { useState } from "react";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import * as Layout from "./style.module.css";
import Address from "../addresses/index";
import CollapsibleDiv from "../common/Toggle/index";
const PlaceOrder = () => {
	const [showPaymentForm, setPaymentForm] = useState(false);
	const showPayment = () => {
		setPaymentForm(!showPaymentForm);
	};
	return (
		<div className={Layout.container}>
			<div className={Layout.left}>
				<div  className={Layout.Address}>
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
				<PriceCard />
			</div>
			<div>
				<CollapsibleDiv name= {"Payment Options"}>
				 <Payment />	
				</CollapsibleDiv> 
			</div>
		</div>
	);
};

export default PlaceOrder;
