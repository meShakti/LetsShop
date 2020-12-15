import React from "react";
import Proptypes from "prop-types";
import * as Layout from "./style.module.css";
const Alert = (props)=>{
	return(
		<div className={Layout.popupBox}>
			<div className={Layout.box}>
				<span className={Layout.closeIcon} onClick={props.handleClose}>x</span>
				<div className={Layout.heading}>Enter Your Mobile Number</div>
				<div className={Layout.content}>+91<input className={Layout.contact} type="tel"/></div> 
				<div className={Layout.content}>OTP <input className={Layout.otp} type="number"/></div> 
				<div > <a href="/SignUp"><button className={Layout.btnSubmit} onClick={props.action}>Submit OTP</button> </a></div> 
			</div>
		</div>
	);
};
Alert.propTypes ={
	handleClose : Proptypes.func,
	action: Proptypes.func,
};


export default Alert;

