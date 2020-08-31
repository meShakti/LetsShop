import React , {Component} from "react";
import  * as mystyle from "./silder.module.css";
import data from "../../data/data";
import PropTypes from "prop-types";
class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = {landing: data};
	}
	render() {
		return(
			<section>
				{
					this.state.landing.map((s, index) =>
						<div className={
							index === this.props.activeIndex ? mystyle.active :  mystyle.slide }
						key={index}>
							<p>	<img src={s.image} alt={s.name} className={mystyle.image} /> </p>
						</div>
					) }
			</section>
		);
	}
}
Slide.propTypes = {
	activeIndex:PropTypes.number
};
export default Slide;