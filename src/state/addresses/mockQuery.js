import AddressList from "./mock.js";
//Mock query.js
/**
 * get stock list api
 */
export const getAddressList =()=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(AddressList);
		},2000);
	});

};