import "normalize.css";
import "../public/css/tailwind.min.css";
import "../public/css/global.css";
import React from "react";
import PropTypes from "prop-types";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
App.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.node,

};
