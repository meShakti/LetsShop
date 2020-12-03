import React  from "react";
import PropTypes from "prop-types";
import * as Layout from "./style.module.css";
import { useState } from "react";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

const Toggle =(props)=>{
	const {name , expand} = props;
	const [showDiv, setvisiblility] = useState(expand);
	const toggle = () => {
		setvisiblility(!showDiv);
	};
	return(
		<div className={Layout.container}>
			<div onClick={toggle} className={Layout.header}>{name}</div>
			<div onClick={toggle} className={Layout.headIcons} >
				{!showDiv &&<IoIosArrowUp color="gray" size={30}/>}
				{showDiv &&<IoIosArrowDown color="gray" size={30}/>}
			</div>
			{showDiv && props.children } 
    
		</div>
	);
};

Toggle.propTypes = {
	name:PropTypes.string,
	children : PropTypes.node,
	expand:PropTypes.bool
}
;
export default Toggle;