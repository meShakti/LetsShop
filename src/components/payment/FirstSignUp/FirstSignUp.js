import React from "react";
import * as Layout from "./firstSignUp.module.css";
const SignUp = () =>{

	return(
		<div className={Layout.container}>
		    <div className={Layout.title}>
                Thank you for shopping with us!
			</div>
			<div className={Layout.subline}>
                We have created an account for you with the following details.
			</div>
			<form className={Layout.userDetails}> 
				<div>
					<label className={Layout.label} htmlFor="name"> Name </label>
					<input className={Layout.input} type="text" name="name" placeholder="Your Name"/>
				</div>
				<div>
					<label  className={Layout.label} htmlFor="contact"> Contact </label>
					<input className={Layout.input} type="tel" name="contact" placeholder="Your Number"/>
				</div>
				<div>
					<label className={Layout.label} htmlFor="password"> Password </label>
					<input className={Layout.input} type="password" name="password" placeholder="Password"/>
				</div>
				<div>
					<label className={Layout.label} htmlFor="Password"> Confirm Password </label>
					<input className={Layout.input} type="password" name="setPassword" placeholder="Confirm Password"/>
				</div>
				<div>
					<button  className = " float-right mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Update</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
