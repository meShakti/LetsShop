import React from "react";
import * as layout from "./index.module.css";
import PropTypes from "prop-types";
import Header from "./header";
import { Provider } from "react-redux";
import initializeStore from "../../state/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = initializeStore();
const Layout = ({ children }) => {

	return (
		<Provider store={store}> {/* Adds provider and persistor support */}
			<PersistGate loading={null} persistor={persistor}>
				<div className={layout.layout}>
					<Header />
					<div className={layout.body}>{children}</div>
					<div className={layout.footer}>
						©2020 by New Abhishek. Proudly Created by meShakti, meMeenakshi and meSaikat
					</div>
				</div>
			</PersistGate>
		</Provider>



	);
};

Layout.propTypes = {
	children: PropTypes.node
};
export default Layout;
