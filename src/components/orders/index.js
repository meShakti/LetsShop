import React, {useState,useEffect} from "react";
import Rating from "react-star-ratings";
import {FaStar} from "react-icons/fa";
import EmptyMessage from "../EmptyAlert/EmptyAlert";
import {getOrderList} from "../../state/orders/mockQuery";
import AsyncRenderer from "../common/AsyncRenderer";
import PropTypes from "prop-types";
import * as Layout from "./order.module.css";

const OrderItem = ({order})=>{
	const {name,description,status,currency,cost,image} =order; // eslint-disable-line
	return(<div className={Layout.order}>
		<div className={Layout.row}>
			<div className={Layout.title} >{name}
				<p className={Layout.description}>{description}</p>
				<p className={Layout.subtitle}>{status}</p>
				<div className={Layout.reviewNewPage}>
					<FaStar className={Layout.star}
						color= "#28df99" size={15}/> RATE & REVIEW PRODUCT
				</div>
			</div>
			<div className={Layout.price}>{currency} {cost}</div>
			<div className={Layout.col__2}>
				<img  className={Layout.reviewIcon}  src={image}/>
			</div>
		</div>
		<div className={Layout.reviews}>
			<Rating rating={3.5}
				starRatedColor="#ffc107"
				starDimension="30px"
				starSpacing="10px"
				numberOfStars={5}/>
		</div>
	</div>);
};
const Order =() => {
	const [orders,setOrders] = useState([]);
	const [isLoading,setIsLodaing] = useState(false);
	const [error,setError] = useState(false);

	useEffect(()=>{
		setIsLodaing(true);
		getOrderList().then((res)=>{
			setOrders(res);
			setIsLodaing(false);
		}).catch(()=>{
			setError(true);
		});
	},[]);
	return ( 
		<AsyncRenderer isLoading={isLoading} isError={error}>
			<div className={Layout.container}>
				{orders.map((item)=><OrderItem order={item} key={item.id} />)}
				{!orders.length &&<EmptyMessage/>}
			</div>
		</AsyncRenderer>
    
    
	);
};
OrderItem.propTypes = {
	order: PropTypes.any
};
export default Order;