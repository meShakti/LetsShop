import React from "react";
import * as Layout from "./cart.module.css";
import data from "../../data/data";
export default function Cart(){
	return (
		<div>
			<div className={Layout.container}>
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
							<div className="input-group">
								<input type="button" value="-" className={Layout.button} data-field="quantity"/>
								<input type="number" step="1" max="" value="1"  className={Layout.quantity}/>
								<input type="button" value="+" className={Layout.button} data-field="quantity"/>
							</div>
                        
						</div>
                    
						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-4  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Save For Later</button>
                    
							</div>
						</div>
                  

					</div>
					{/* item 2  */}
					<div className={Layout.item}>
						<div className={Layout.image}>
							<img src={data[1].image}></img>
							<div className="input-group">
								<input type="button" value="-" className={Layout.button} data-field="quantity"/>
								<input type="number" step="1" max="" value="1"  className={Layout.quantity}/>
								<input type="button" value="+" className={Layout.button} data-field="quantity"/>
							</div>
                        
						</div>
                    
						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-4  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Save For Later</button>
                    
							</div>

						</div>
                   
					</div>

					<div className ={Layout.footer}>
						<button className=" mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-64">Place order</button>
					</div>
				</div>
           





            
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

				</div>
       
			</div>
			<div className={Layout.saveforlater}>
				<div className={Layout.itemcard}>
					<div className={Layout.itemhead}>
                    Save For Later
					</div>
					<div className={Layout.item}>
						<div className={Layout.image}>
							<img src={data[0].image}></img>
							<div className="input-group">
								<input type="button" value="-" className={Layout.button} data-field="quantity"/>
								<input type="number" step="1" max="" value="1"  className={Layout.quantity}/>
								<input type="button" value="+" className={Layout.button} data-field="quantity"/>
							</div>
                        
						</div>
                    
						<div>
							<p>Maya Calendar Pillow </p> 
							<p>Bedding Pillow</p> 
							<p>Size: 3</p> 
							<p> ₹ 100 </p>
							<div>
								<button className ="mr-4  mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Remove</button>
								<button className ="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-orange-500 rounded w-auto">Add to Cart</button>
                    
							</div>
						</div>
                  
               

					</div>
               
            
				</div>
			</div>
		</div>
     
	);
}