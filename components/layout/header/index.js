import React, { useState } from "react";
import PropTypes from "prop-types";

import * as header from "./index.module.css";




const Header = () => {
	
	const [isExpanded, toggleExpansion] = useState(false);
  
  
	return (
		<nav className="flex items-center justify-between flex-wrap bg-black p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<div>
					<a href="/Cart" className="inline-block text-sm px-4 py-0 leading-none mt-2 lg:mt-0">
						<svg width="20" height="20" className={header.cart_item_bubbles}>
							<circle cx="10" cy="10" r="10" fill="red" />
							<text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="10px" fontFamily="Arial" dy=".3em">1</text>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="40px" height="40px"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
					</a>
				</div>
				<span className="font-semibold text-xl tracking-tight">New Abhishek</span>
			</div>

			<div className="block lg:hidden">
				<button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
				</button>
			</div>
			<div className={`${isExpanded ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				<div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
					<a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">Item 1</a>
					<a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">Item 2</a>
					<a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center  hover:bg-grey-dark">Item 3</a>
				</div>


			</div>
		</nav>

			



	);
};

Header.propTypes = {
	children: PropTypes.node
};
export default Header;
