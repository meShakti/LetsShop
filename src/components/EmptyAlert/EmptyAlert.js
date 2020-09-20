import React from "react";
import * as Layout from "./empty.module.css";
const EmptyAlert = () =>{

	return(
		<div className={Layout.empty}>
        You haven `&apos` t order anything yet!
			<img className={Layout.dogIcon} src="./images/cartdog.png"/>
			<p className={Layout.homeLink}>Check out our collection <a href="/"> <strong>here</strong></a></p>
		</div>
	);
};

export default EmptyAlert;
