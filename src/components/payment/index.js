import React from "react";
import * as Layout from "./index.module.css";
const Payment =() => {

	function toggleHandle(e){
		console.log(e);
		e.target.style.display = "none";
	}
	return ( 
		<div className={Layout.container}  onClick={toggleHandle}>
			<div className={Layout.paymentOption}>
				<div className={Layout.header}>Payment Options</div>
				<div className={Layout.Option} >
					<input type="radio" id="cod" name="pay" value="Cash"/>
					<label htmlFor="cod" className={Layout.label}>Cash On Delivery </label> 
				</div>
				<div className={Layout.Option} >
					<input type="radio" id="net" name="pay" value="Net"/>
					<label htmlFor="net" className={Layout.label}>Net Banking </label> 
				</div>
				<div className={Layout.Option} >
					<input type="radio" id="Pay" name="pay" value="Pay"/>
					<label htmlFor="Pay" className={Layout.label}>PayTM Wallet</label> 
				</div>
                        
			</div>
		</div>
	);
};

export default Payment;