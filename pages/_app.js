import "normalize.css";
import "../public/css/tailwind.min.css";
import "../public/css/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
