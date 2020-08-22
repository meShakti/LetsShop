import  React ,{ Component } from "react";
import Slide from "./slider";
import LeftArrow from "./leftarrow/leftarrow";
import RightArrow from "./rightarrow";
import data from "../../data/data";
import  * as newstyle from "./silder.module.css";


class Slider extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			activeIndex: 0,
			length: data.length
	  };
	}
	goToPrevSlide() {
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
	goToNextSlide() {
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
		  <div className='slider'>
				<div className='slider-items'>
			  
					<div className='slider-text'>
			  			<Slide activeIndex={this.state.activeIndex}/>
					</div>
					<div className={newstyle.buttons}>
						<RightArrow  className={newstyle.item} goToNextSlide={() => this.goToNextSlide()}/>
			  			<LeftArrow  className={newstyle.item} goToPrevSlide={() => this.goToPrevSlide()}/>
					</div>
			  
				</div>
		  </div>
		);
	  }
}

export default Slider;