import React from "react";
import * as Layout from "./cart.module.css";
import data from "../../data/data";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IoMdRemoveCircleOutline} from "react-icons/io";

export default function Cart(){
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
						<span>₹ 100</span>
						<span> Delivery Fee</span>
						<span>₹ 40</span>
					</div>
					<div className={Layout.total}>
						<span > Total</span>
						<span>₹ 140</span> 
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
					<div className={Layout.item}>
						<div className={Layout.image}>
							<img src={data[0].image}></img>
							<div className= {Layout.inputgroup}>
								<IoMdRemoveCircleOutline className={Layout.buttonion} ></IoMdRemoveCircleOutline>
								<div className={Layout.quantity}>1</div>
								<IoMdAddCircleOutline className={Layout.buttonion} ></IoMdAddCircleOutline>
							</div>
                        
						</div>
                    
						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Save For Later</button>
                    
							</div>
						</div>
                  

					</div>
					{/* item 2  */}
					<div className={Layout.item}>
						<div className={Layout.image}>
							<img src={data[1].image}></img>
							<div className={Layout.inputgroup}>
								<IoMdRemoveCircleOutline className={Layout.buttonion} ></IoMdRemoveCircleOutline>
								<div className={Layout.quantity}>1</div>
								<IoMdAddCircleOutline className={Layout.buttonion} ></IoMdAddCircleOutline>
							</div>
                        
						</div>
                    
						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Save For Later</button>
                    
							</div>

						</div>
                   
					</div>

					<div className ={Layout.footer}>
						<button className=" mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-64">Place order</button>
					</div>
				</div>
           
				{/* Price Card  */}
				<div className={Layout.price}>
					<div className={Layout.heading}>
                    Price Details
					</div>
					<div className={Layout.pricedetails}>
						<span> Price</span>
						<span>₹ 100</span>
						<span> Delivery Fee</span>
						<span>₹ 40</span>
					</div>
					<div className={Layout.total}>
						<span > Total</span>
						<span>₹ 140</span> 
					</div>
					<div >
						<button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-56">Place order</button>
					</div>
				</div>


				{/* Save for Later Card */}
				
				<div className={Layout.itemcard}>
					<div className={Layout.itemhead}>
                    Save For Later
					</div>
					<div className={Layout.item}>
						<div className={Layout.image}>
							<img src={data[0].image}></img>
							<div className={Layout.inputgroup}>
								<IoMdRemoveCircleOutline className={Layout.buttonion} ></IoMdRemoveCircleOutline>
								<div className={Layout.quantity}>1</div>
								<IoMdAddCircleOutline className={Layout.buttonion} ></IoMdAddCircleOutline>
							</div>        
						</div>

						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-1  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded w-32">Add to Cart</button>                    
							</div>
						</div>	
						
					</div>
				</div>
			</div>       
		</div>
			
			
				
	
	
     
	);
}