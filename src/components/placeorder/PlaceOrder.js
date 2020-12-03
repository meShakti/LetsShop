import React from "react";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import * as Layout from "./style.module.css";
import Address from "../addresses/index";
import CollapsibleWrapper from "../common/CollapsibleWrapper/index";
const PlaceOrder = () => {
	return (
		<div className={Layout.container}>
			<div className={Layout.left}>
				<div  className={Layout.address}>
					<Address />
				</div>
				<div>
					<CollapsibleWrapper expand={false} name= {"Payment Options"}>
				 		<Payment />	
					</CollapsibleWrapper> 
				</div>
			</div>
			<div className={Layout.priceCard}>
				<PriceCard />
			</div>
			
		</div>
	);
};

export default PlaceOrder;
