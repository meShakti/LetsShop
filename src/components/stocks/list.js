import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { addToCart } from "../../state/stocks/actions";
import  * as list from  "./list.module.css";
// Renders stock lists

// renders each list item
const ListItem = (props) => {
	const { image, name, description,currency, cost,addToCart } = props; // eslint-disable-line
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
						{currency}
						{cost}
					</p>
				</div>
			</div>
			<button onClick={()=>addToCart({...props,addToCart:null})}className=" bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
   					Add To Cart
			</button>
		</div>
	);
};

const List = ({ products, addToCart }) => { 
	
	return (
		<div className="flex flex-wrap">
			{products.map((product, index) => {
				return (
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4" key={product.id}>
						<ListItem {...product} index={index}  key={product.id} addToCart={addToCart} />
					</div>
				);
			})}
		</div>
	);
};

List.propTypes={
	products:PropTypes.any,
	addToCart: PropTypes.func
	
};

ListItem.propTypes={
	props:PropTypes.any
	
};

//Addition of redux elements
const mapDispatchToProps = dispatch => {
	return {
		addToCart: (payload) => dispatch(addToCart(payload))
	};
};
  
export default connect(
	null,
	mapDispatchToProps
)(List);
