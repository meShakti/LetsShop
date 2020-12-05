import React from "react";
import * as Layout from "./index.module.css";
const Payment = () => {
	return (
		<div className={Layout.container}>
			<div className={Layout.paymentOption}>
				<div className={Layout.Option}>
					<input type="radio" id="cod" name="pay" value="Cash" checked/>
					<label htmlFor="cod" className={Layout.label}>
            Cash On Delivery
					</label>
				</div>
			</div>
		</div>
	);
};

export default Payment;
