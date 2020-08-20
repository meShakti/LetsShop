import  { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import  * as newstyle from ".././silderstyle.module.css";
class LeftArrow extends Component {
	render() {
		return(
			<div  className={newstyle.item} onClick={this.props.goToPrevSlide}>
				 <span className={newstyle.dot}></span>
			</div>
		);
	}
}

LeftArrow.propTypes = {
	goToPrevSlide:PropTypes.func,
};
export default LeftArrow;