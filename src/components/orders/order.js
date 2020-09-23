import React from "react";
import * as Layout from "./order.module.css";
import Rating from "react-star-ratings";
import {FaStar} from "react-icons/fa";
import EmptyMessage from "../EmptyAlert/EmptyAlert";
const Order =() => {
	return ( 
		<div className={Layout.container}>
			{/* item 0 */}
			<div className={Layout.order}>
				<div className={Layout.row}>
					<div className={Layout.col__2 , Layout.title} >Pregnant Woman Slide Sleepers
						<p className={Layout.description}>Color : White  Size : M</p>
						<p className={Layout.subtitle}>Delivered on 5 Aug 2020</p>
						<div className={Layout.reviewNewPage}>
							<FaStar className={Layout.star}
								color= "#28df99" size={15}/> RATE & REVIEW PRODUCT
						</div>
					</div>
					<div className={Layout.price}>₹ 300</div>
					<div className={Layout.col__2}>
						<img  className={Layout.reviewIcon}  src="https://source.unsplash.com/random"/>
					</div>
				</div>
				<div className={Layout.reviews}>
					<Rating rating={3.5}
						starRatedColor="#ffc107"
						starDimension="30px"
						starSpacing="10px"
						numberOfStars={5}/>
				</div>
			</div>
			{/* item 1 */}
			<div className={Layout.order}>
				<div className={Layout.row}>
					<div className={Layout.col__2 , Layout.title} >
                  Pregnant Woman Slide Sleepers
						<p className={Layout.description}>Color : White  Size : M</p>
						<p className={Layout.subtitle}>Delivered on 5 Aug 2020</p>
						<div className={Layout.reviewNewPage}>
							<FaStar className={Layout.star}
								color= "#28df99" size={15}/> RATE & REVIEW PRODUCT
						</div>
					</div>
					<div className={Layout.price}> ₹ 300</div>
					<div className={Layout.col__2}>
						<img  className={Layout.reviewIcon}  src="https://source.unsplash.com/random"/>
					</div>
				</div>
				<div className={Layout.reviews}>
					<Rating rating={3.5}
						starRatedColor="#ffc107"
						starDimension="30px"
						starSpacing="10px"
						numberOfStars={5}/>
				</div>
			</div>
			{/* item 2 */}
			<div className={Layout.order}>
				<div className={Layout.row}>
					<div className={ Layout.title} >Pregnant Woman Slide Sleepers
						<p className={Layout.description}>Color : White  Size : M</p>
						<p className={Layout.subtitle}>Delivered on 5 Aug 2020</p>
						<div className={Layout.reviewNewPage}>
							<FaStar className={Layout.star}
								color= "#28df99" size={15}/>  RATE & REVIEW PRODUCT
						</div>
					</div>
					<div className={Layout.price}>₹ 300</div>
					<div className={Layout.col__2}>
						<img  className={Layout.reviewIcon}  src="https://source.unsplash.com/random"/>
					</div>
				</div>
				<div className={Layout.reviews}>
					<Rating rating={2}
						starRatedColor="#ffc107"
						starDimension="30px"
						starSpacing="10px"
						numberOfStars={5}/>
				</div>
			</div>
			{/* Item 3 */}
			<div className={Layout.order}>
				<div className={Layout.row}>
					<div className={Layout.col__2 , Layout.title} >Pregnant Woman Slide Sleepers
						<p className={Layout.description}>Color : White  Size : M</p>
						<p className={Layout.subtitle}>Delivered on 5 Aug 2020</p>
						<div className={Layout.reviewNewPage}>
							<FaStar className={Layout.star}
								color= "#28df99" size={15}/>RATE & REVIEW PRODUCT
						</div>
					</div>
					<div className={Layout.price}> ₹ 300</div>
					<div className={Layout.col__2}>
						<img  className={Layout.reviewIcon}  src="https://source.unsplash.com/random"/>
					</div>
				</div>
				<div className={Layout.reviews}>
					<Rating rating={2.7}
						starRatedColor="#ffc107"
						starDimension="30px"
						starSpacing="10px"
						numberOfStars={5}/>
				</div>
			</div>
			<EmptyMessage/>
		</div>
    
    
	);
};

export default Order;