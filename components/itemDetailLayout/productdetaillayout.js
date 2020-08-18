import React from "react";
import productList from "../../data/data";
import * as detail from "./itemdetail.module.css";

const productLayout = ()=> {
	return (
		<div className={detail.content}>
			<div >
				<img src={productList[0].image} alt={productList[0].name}  />
			</div>

			<div className={detail.text}>
				<div className="p-1 space-y-5">
					<h1 className="text-gray-700 text-center text-3xl font-bold text-md">
						{productList[0].name}
						<hr></hr>
					</h1>
					<p className="text-sm text-gray-900 text-left leading-sm">
						Rate : 4
					</p>
					<p className="text-lg text-gray-900 text-left leading-sm">
						{productList[0].description}
					</p>

					<p className="text-lg text-left text-gray-900 leading-lg">
                      Size :
					 <select name="size" className="mr-4">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					Quantity :
						<select name="quantity">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p className="text-lg text-left text-gray-900  leading-lg">
                     Price :  ₹
						{productList[0].cost}
					</p>
					
				</div>
				<button className="mt-10 bg-teal-600 rounded-lg w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
   					Add To Cart
				</button>
			</div>
	
						
		</div>
			
	
	
	);
};
export default productLayout;