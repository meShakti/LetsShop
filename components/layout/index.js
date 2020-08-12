import React from "react";
import * as layout from "./index.module.css";
import PropTypes from "prop-types";

import Header from "./header";

const Layout = ({ children }) => {

	return (

		<div className={layout.layout}>
			<Header/>
			<div className={layout.body}>{children}</div>
			<div className={layout.footer}>
        		©2020 by New Abhishek. Proudly Created by meShakti, meMeenakshi and meSaikat
			</div>
		</div>



	);
};

Layout.propTypes = {
	children: PropTypes.node
};
export default Layout;
