import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import * as Layout from "./index.module.css";


const StarRating = () => {
	const [rating ,setRating] = useState(null);
	const [hover ,setHover] = useState(null);

	return(
		<div> 
			{[...Array(5)].map((star , i)=>{
				const ratingValue = i++;
    
				return  (
					<label key={star} className={Layout.stars}> 
						<input
							type="radio"  
							name="rating" 
							value={ratingValue} 
							onClick={()=> setRating(ratingValue) }
						/>
						<FaStar className={Layout.star}
							onMouseEnter={()=> setHover(ratingValue)}
							onMouseLeave={()=> setHover(null)}
							color={ratingValue<=( hover || rating) ? "#ffc107" : "#e4e5e9"} size={40}
						/>
					</label>
        
   
				);
			})}
   
		</div>
	);
};

export default StarRating;