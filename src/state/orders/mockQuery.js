import OrderList from "./mock.js";
//Mock query.js
/**
 * get stock list api
 */
export const getOrderList =()=>{
	return new Promise((resolve)=>{setTimeout(()=>resolve(OrderList),2000);});

};