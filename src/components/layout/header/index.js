import React, { useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as header from "./index.module.css";
import {IoIosCart} from "react-icons/io";


const Header = ({counter}) => {
	
	const [isExpanded, toggleExpansion] = useState(false);
  
  
	return (
		<nav className="flex items-center justify-between flex-wrap bg-black p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<div>
					<a href="/Cart" className="inline-block text-sm px-4 py-0 leading-none mt-2 lg:mt-0">
						<div className={header.cart_item_bubbles}>{counter}</div>
						<IoIosCart size="2.5rem"></IoIosCart>
					</a>
				</div>
				<a href="/"><span className="font-semibold text-xl tracking-tight">New Abhishek</span></a>
			</div>

			<div className="block lg:hidden">
				<button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
				</button>
			</div>
			<div className={`${isExpanded ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				<div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
					<a href="/Addresses" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">My Addresses</a>
					<a href="/Orders" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">My orders</a>
					<a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">Guest</a>
				</div>


			</div>
		</nav>

			



	);
};

Header.propTypes = {
	children: PropTypes.node,
	counter:PropTypes.number
};

const mapStateToProps = state => ({
	counter: state.stockReducer.cart.reduce((sum,item)=>{return sum + item.quantity;},0)
});

export default connect(
	mapStateToProps,
	null
)(Header);
