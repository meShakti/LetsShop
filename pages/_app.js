import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/layout";

import "normalize.css";
import "../public/css/tailwind.output.css";
import "../public/css/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
	return (<Layout><Component {...pageProps} /></Layout>);
}
App.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.node,

};
