import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

import * as Renderer from "./index.module.css";

// Component which renderers loading, child or error component depending upon the api response

const AsyncRenderer = ({ isLoading, isError, retry, loaderComponent, errorComponent, children }) => {
	const renderChildComponent = () => {
		if (isError) {
			if (errorComponent) {
				return errorComponent;
			}
			return (
				<div className={Renderer["error-container"]+" flex items-center justify-center"}>
					<div>Something went wrong. </div>
					{retry ? <div onClick={retry}>Click here to try again.</div> : null}
				</div>
			);
		}
		if (isLoading) {
			if (loaderComponent) {
				return loaderComponent;
			}
			return (
				<Spinner />
			);
		}
		return children;
	};

	return (
		<>
			{renderChildComponent()}
		</>
	);
};

AsyncRenderer.propTypes = {
	children: PropTypes.node,
	isLoading:PropTypes.bool,
	isError:PropTypes.bool,
	loaderComponent: PropTypes.node,
	errorComponent: PropTypes.node,
	retry:PropTypes.func
};

AsyncRenderer.defaultProps = {
	children: null,
	isLoading:false,
	isError:null,
	loaderComponent: null,
	errorComponent: null,
	retry:()=>{}
};
  
export default AsyncRenderer;
