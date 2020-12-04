import React from "react";
import * as Layout from "./style.module.css";
const ThankYouAlert = () =>{

	return(
		<div className={Layout.empty}>
            Thank you for shopping with us !
			<img className={Layout.dogIcon} src="./images/thank-you.png"/>
			<p className={Layout.homeLink}>Check out our collection <a href="/"> <span className={Layout.highlight}>Here</span></a></p>
		</div>
	);
};

export default ThankYouAlert;
