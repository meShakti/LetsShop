import {useState} from "react";
import { updateAddressList } from "./actions";
import {getAddressList} from "./mockQuery"; // Replace with query when query is available
//TODO: update the hooks state pattern
/**
 * Hook which take care of integration of  stock list
 */
export const useAddressList =()=>{
	const[isLoading,setIsLoading] = useState(false);
	const [list,setList] = useState([]);

	const request =  () =>{
		setIsLoading(true);
		getAddressList().then((res)=>{
			updateAddressList(res);
			setList(res);
			setIsLoading(false);
		});
        
	};

	return[list,isLoading,request];

};