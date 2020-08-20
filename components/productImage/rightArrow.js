import React, { Component } from "react";
import  * as newstyle from "./silderstyle.module.css";
import PropTypes from "prop-types";
class RightArrow extends Component {
	render() {
		return(
			<div className={newstyle.item} onClick={this.props.goToNextSlide}>
		        <span className={newstyle.dot}></span>
			</div>
		);
	}
}
RightArrow.propTypes = {
	goToNextSlide:PropTypes.func,
};

export default RightArrow;