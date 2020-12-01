import React  from "react";
import PropTypes from "prop-types";
import * as Layout from "./style.module.css";
import { useState } from "react";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

const Toggle =(props)=>{
	const [showDiv, setvisiblility] = useState(true);
	const toggle = () => {
		setvisiblility(!showDiv);
	};
	return(
		<div className={Layout.container}>
			<div onClick={toggle} className={Layout.header}>{props.name}</div>
			<div onClick={toggle} className={Layout.headIcons} >
				{!showDiv &&<IoIosArrowUp color="gray" size={30}/>}
				{showDiv &&<IoIosArrowDown color="gray" size={30}/>}
			</div>
			{showDiv && <div> {props.children} </div>} 
    
		</div>
	);
};

Toggle.propTypes = {
	
	name:PropTypes.string,
	children : PropTypes.node
};

export default Toggle;
