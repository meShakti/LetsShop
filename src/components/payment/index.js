import React from "react";
import * as Layout from "./index.module.css";
const Payment = () => {
	return (
		<div className={Layout.container}>
			<div className={Layout.paymentOption}>
				<div className={Layout.Option}>
					<input type="radio" id="cod" name="pay" value="Cash" />
					<label htmlFor="cod" className={Layout.label}>
            Cash On Delivery
					</label>
				</div>
				<div className={Layout.Option}>
					<input type="radio" id="net" name="pay" value="Net" />
					<label htmlFor="net" className={Layout.label}>
            Net Banking
					</label>
				</div>
				<div className={Layout.Option}>
					<input type="radio" id="Pay" name="pay" value="Pay" />
					<label htmlFor="Pay" className={Layout.label}>
            PayTM Wallet
					</label>
				</div>
			</div>
		</div>
	);
};

export default Payment;
