import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { increment } from "../../state/counter/actions";
import  * as list from  "./list.module.css";
// Renders stock lists

// renders each list item
const ListItem = ({ image, name, description, cost,increment }) => {
	
	return (
		
		<div className ={list.itemcard}>
			<div  className="wrapper global-margin-auto  global-margin-top-standard max-w-xs bg-gray-50 rounded-b-md  overflow-hidden">
				<div className={list.itemimage} >
					<img src={image} alt={name}  />
				</div>
				<div className="p-8 space-y-2">
					<h3 className="text-gray-700 text-center font-semibold text-md">
						<a href="/ProductDetail">{name}</a>
					</h3>
					<p className="text-sm text-gray-900 text-center leading-sm">
						{description}
					</p>
					<p className="text-sm text-center text-gray-900 leading-sm">
  ₹
						{cost}
					</p>
				</div>
				<button onClick={increment}className="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
   					Add To Cart
				</button>
			</div>
		</div>
	);
};

const List = ({ products, increment }) => { 
	
	return (
		<div className="flex flex-wrap">
			{products.map((product, index) => {
				return (
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4" key={product.id}>
						<ListItem {...product} index={index}  key={product.id} increment={increment} />
					</div>
				);
			})}
		</div>
	);
};

List.propTypes={
	products:PropTypes.any,
	product:PropTypes.any,
	index:PropTypes.any,
	increment: PropTypes.func
	
};

ListItem.propTypes={
	image: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	cost: PropTypes.number,
	index: PropTypes.number,
	currency: PropTypes.number,
	increment: PropTypes.func
	
};

//Addition of redux elements
const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(increment())
	};
};
  
export default connect(
	null,
	mapDispatchToProps
)(List);
