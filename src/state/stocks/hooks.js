import {useState} from "react";
import {getStockList} from "./mockQuery"; // Replace with query when query is available
//TODO: update the hooks state pattern
/**
 * Hook which take care of integration of  stock list
 */
export const useStockList =()=>{
	const[isLoading,setIsLoading] = useState(false);
	const [list,setList] = useState([]);

	const request =  () =>{
		setIsLoading(true);
		const newList = getStockList();
		setTimeout(()=>{
			setList(newList);
			setIsLoading(false);
		},3000);
        
	};

	return[list,isLoading,request];

};