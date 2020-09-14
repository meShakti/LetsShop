import  React ,{ Component } from "react";
import Slide from "./Slider";
import data from "../../../state/stocks/mock";
import  * as newstyle from "./index.module.css";


class Slider extends Component {
	constructor(props)
	{
		super(props);
		this.state = 
		{
			activeIndex: 0,
			length: data.length
		};
	}

	goToPrevSlide=()=> {
		let index = this.state.activeIndex;
		let length = this.state.length;
		if(index < 1) {
			index = length - 1;
		}
		else {
			index--;
		}
		this.setState({
			activeIndex: index
		});
	}
	goToNextSlide = ()=> {
		let index = this.state.activeIndex;
		let length = this.state.length;
		if(index === length - 1) {
			index = 0;
		}
		else {
			index++;
		}
		this.setState({
			activeIndex: index
		});
	}
	render() {
		return (
			<div >
				<div >
					<div >
						<Slide activeIndex={this.state.activeIndex}/>
					</div>
					<div className = {newstyle.buttons}>
						<div className = {newstyle.item} onClick={this.goToNextSlide}>
							<span> &#8592; </span>
						</div>
						<div className={newstyle.item}  onClick={this.goToPrevSlide}>
							<span>&#8594;</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Slider;