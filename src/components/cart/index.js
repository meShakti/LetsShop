import React from "react";
import * as Layout from "./cart.module.css";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {connect} from "react-redux";
import {addToCart,removeFromCart,saveForLaterAction,removeFromLaterAction,subtractItemFromCart} from "../../state/stocks/actions";
import PropTypes from "prop-types";
import EmptyAlert from "../EmptyAlert/EmptyAlert";

const CartItem = (props)=>{
	const {image,name,description,currency,cost,removeFromCart,saveForLaterAction,quantity,subtractItemFromCart,addToCart} = props; // eslint-disable-line
	return(<div className={Layout.item}>
		<div className={Layout.image}>
			<img src={image}></img>
			<div className= {Layout.inputgroup}>
				<IoMdRemoveCircleOutline className={Layout.button}onClick={()=>subtractItemFromCart(props.item)} ></IoMdRemoveCircleOutline>
				<div className={Layout.quantity}>{quantity}</div>
				<IoMdAddCircleOutline className={Layout.button} onClick={()=>addToCart(props.item)} ></IoMdAddCircleOutline>
			</div>
		
		</div>
	
		<div>
			<p>{name}</p> 
			<p>{description}</p> 
			<p>{currency} {cost}</p>
			<div>
				<button onClick={()=>removeFromCart({...props})} className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
				<button onClick={()=>saveForLaterAction({...props})} className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Save For Later</button>
			</div>
		</div>
	</div>);
};
const SaveForLaterItem = (props)=>{
	const {image,name,description,currency,cost,removeFromLaterAction,addToCart} = props; // eslint-disable-line
	return(<div className={Layout.item}>
		<div className={Layout.image}>
			<img src={image}></img>
		
		</div>
	
		<div>
			<p>{name}</p> 
			<p>{description}</p> 
			<p>{currency} {cost}</p>
			<div>
				<button onClick={()=>removeFromLaterAction({...props})} className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
				<button onClick={()=>addToCart({...props})} className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Add to Cart</button>
			</div>
		</div>
	</div>);
};
export const Cart =({cart,saveForLater,totalPrice,deleiveryPrice,addToCart,removeFromCart,saveForLaterAction,removeFromLaterAction,subtractItemFromCart})=>{
	const currency = cart && cart[0] && cart[0].currency;
	return (
		<div>
			<div className={Layout.container}>

				   {/* Price  topCard  */}
				   <div className={Layout.priceCardTop}>
					<div className={Layout.heading}>
                    Price Details
					</div>			
					<div className={Layout.pricedetails}>
						<span> Price</span>
						<span>{currency} {totalPrice}</span>
						<span> Delivery Fee</span>
						<span>{currency} {deleiveryPrice}</span>
					</div>
					<div className={Layout.total}>
						<span > Total</span>
						<span>{currency} {totalPrice + deleiveryPrice}</span> 
					</div>
					<div >
						<button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-56">Place order</button>
					</div>
				</div>
				{/* item 1 */}
				<div className={Layout.itemcard}>
					<div className={Layout.itemhead}>
                    	My Cart
						<div className={Layout.deliveraddress}>
							<p> Deliver At :
								<select >
									<option value="myaddress ">B-3/252 Sudershana Nagar</option>
									<option value="newaddress">Bangalore</option>
								</select>
							</p>
						</div>
					</div>
					{cart.map((item)=>{
						return(<CartItem {...item} item={item} addToCart={addToCart} subtractItemFromCart={subtractItemFromCart} saveForLaterAction={saveForLaterAction}removeFromCart={removeFromCart} key={item.id}/>);
					})}
					{/** Footer */}
					{cart.length>0?<div className ={Layout.footer}>
						<button className=" mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-64">Place order</button>
					</div>:<EmptyAlert />}
				</div>
           
				{/* Price Card  */}
				<div className={Layout.price}>
					<div className={Layout.heading}>
                    Price Details
					</div>
					<div className={Layout.pricedetails}>
						<span> Price</span>
						<span>{currency} {totalPrice}</span>
						<span> Delivery Fee</span>
						<span>{currency} {deleiveryPrice}</span>
					</div>
					<div className={Layout.total}>
						<span > Total</span>
						<span>{currency} {totalPrice + deleiveryPrice}</span> 
					</div>
					<div >
						<button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-56">Place order</button>
					</div>
				</div>


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

CartItem.propTypes = {
	image:PropTypes.string,
	name:PropTypes.string,
	description:PropTypes.string,
	currency:PropTypes.string,
	cost: PropTypes.number,
	subtractItemFromCart:PropTypes.func,
	removeFromCart: PropTypes.func,
	saveForLaterAction:PropTypes.func,
	removeFromLaterAction: PropTypes.func,
	item: PropTypes.any
};

SaveForLaterItem.propTypes = {
	image:PropTypes.string,
	name:PropTypes.string,
	description:PropTypes.string,
	currency:PropTypes.string,
	cost: PropTypes.number,
	
	removeFromCart: PropTypes.func,
	saveForLaterAction:PropTypes.func,
	removeFromLaterAction: PropTypes.func
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