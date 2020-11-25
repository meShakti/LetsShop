import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToCart,removeFromCart,saveForLaterAction,removeFromLaterAction,subtractItemFromCart} from "../../state/stocks/actions";
import EmptyAlert from "../EmptyAlert/EmptyAlert";
import CartItem from "./CartItem";
import SaveForLaterItem from "./SaveForLateItem";
import PriceCard from "./PriceCard";
import * as Layout from "./cart.module.css";

export const Cart =({cart,saveForLater,totalPrice,deleiveryPrice,addToCart,removeFromCart,saveForLaterAction,removeFromLaterAction,subtractItemFromCart})=>{
	const currency = cart && cart[0] && cart[0].currency;
	return (
		<div>
			<div className={Layout.container}>

				   {/* Price  topCard  mobileView*/}
				   <PriceCard className={Layout.priceCardTop} goToLink='/Payment' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} currency={currency}/>
				{/* Cart Section  */}
				<div className={Layout.itemcard}>
					<div className={Layout.itemhead}>
                    	My Cart
					</div>
					{cart.map((item)=>{
						return(<CartItem {...item} item={item} addToCart={addToCart} subtractItemFromCart={subtractItemFromCart} saveForLaterAction={saveForLaterAction}removeFromCart={removeFromCart} key={item.id}/>);
					})}
					{/** Footer */}
					{cart.length>0?<div className ={Layout.footer}>
						<a href="/Payment">		<button className=" mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-64">Place order</button>
						</a></div>:<EmptyAlert />}
				</div>
           
				{/* Price Card  Desktop View*/}
				<PriceCard className={Layout.price}  goToLink='/Payment' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} currency={currency}/>


				{/* Save for Later Card */}
		
				<div className={Layout.itemcard}>
					{saveForLater.length>0?	(
						<div className={Layout.itemhead}>
                    Save For Later
						</div>
					) : null}
					{saveForLater.map((item)=>{
						return(<SaveForLaterItem {...item} addToCart={addToCart}removeFromLaterAction={removeFromLaterAction} key={item.id}/>);
					})}
				</div>
			</div>      
		</div>    
	);
};



Cart.propTypes = {
	cart: PropTypes.any,
	saveForLater:PropTypes.any,
	removeFromCart: PropTypes.func,
	saveForLaterAction:PropTypes.func,
	removeFromLaterAction: PropTypes.func,
	addToCart: PropTypes.func,
	subtractItemFromCart:PropTypes.func,
	totalPrice: PropTypes.number,
	deleiveryPrice: PropTypes.number,
	item:PropTypes.any
};

const mapStateToProps = state => ({
	cart: state.stockReducer.cart,
	saveForLater: state.stockReducer.saveForLater,
	totalPrice:state.stockReducer.cart.reduce((sum,stock)=>{ return sum+(stock.quantity*stock.cost);},0),
	deleiveryPrice: state.stockReducer.cart.reduce((sum,stock)=>{ return sum+ stock.delieveryCharge;},0),
});
const mapDispatchToProps = dispatch => {
	return {
		addToCart: (payload) => dispatch(addToCart(payload)),
		removeFromCart: (payload)=> dispatch(removeFromCart(payload)),
		saveForLaterAction: (payload)=> dispatch(saveForLaterAction(payload)),
		removeFromLaterAction:(payload)=> dispatch(removeFromLaterAction(payload)),
		subtractItemFromCart:(payload)=> dispatch(subtractItemFromCart(payload)),
		
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);