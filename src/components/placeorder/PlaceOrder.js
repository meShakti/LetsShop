import React, { useState }  from  "react";
import {connect} from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Payment from "../payment/index";
import PriceCard from "../cart/PriceCard";
import Address from "../addresses/List";
import CartItem from "../cart/CartItem";
import CollapsibleWrapper from "../common/CollapsibleWrapper/index";
import Popup from "../common/Alert/index";
import * as Layout from "./style.module.css";

const PlaceOrder = ({totalPrice,deleiveryPrice,cart,currency}) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	const redirectToOrders = () => {
		router.push("/Orders");
	};
	return (
		<div className={Layout.container}>
			{/** Mobile View */}
			<PriceCard className={Layout.priceCardTop} currency={currency} goToLink='/Orders' totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			<div className={Layout.left}>
				<CollapsibleWrapper expand={false} name= {"Select Address"}>
					<div  className={Layout.address}>
						<Address />
					</div>
				</CollapsibleWrapper>
				<div className="mt-10">
					<CollapsibleWrapper expand={false} name= {"Payment Options"}>
				 		<Payment />	
					</CollapsibleWrapper> 
				</div>
				<div className="mt-10">
					<CollapsibleWrapper expand={false} name= {"Review Cart"}>
						{cart.map((item) => {
							return (<CartItem {...item}  item={item} key={item.id} />);
						})}
					</CollapsibleWrapper> 

					
				</div>
			</div>
			
			<div className={Layout.pricecard}>
				{/** Desktop View */}
				<PriceCard  onAction={togglePopup} currency={currency} totalPrice={totalPrice} deleiveryPrice={deleiveryPrice} />
			</div>
			<div>
				{isOpen && <Popup
					handleClose={togglePopup}
					action={redirectToOrders}
				/>}
			</div>
		</div>
	);
};

PlaceOrder.propTypes = {
	totalPrice: PropTypes.number,
	deleiveryPrice: PropTypes.number,
	cart: PropTypes.any,
	currency:PropTypes.string
};
const mapStateToProps = state => ({
	cart:state.stockReducer.cart,
	totalPrice:state.stockReducer.cart.reduce((sum,stock)=>{ return sum+(stock.quantity*stock.cost);},0),
	deleiveryPrice: state.stockReducer.cart.reduce((sum,stock)=>{ return sum+ stock.delieveryCharge;},0),
	currency: (state.stockReducer.cart && state.stockReducer.cart[0]?.currency)
});

export default connect(mapStateToProps,null)(PlaceOrder);
