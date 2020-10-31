import React from "react";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import * as Layout from "./style.module.css";
import Address from "../addresses/index";
const PlaceOrder =() => {
	return ( 
		<div className={Layout.container}>
			<div className={Layout.left}>
				<div className={Layout.Address}>
					<Address/>
				</div>
				<div className={Layout.PaymentCard}>
					<Payment/>
				</div>
			</div>
			<div className={Layout.pricecard}>
				<PriceCard/>
			</div>
		</div>
	);
};

export default PlaceOrder;