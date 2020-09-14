import React, { useEffect } from "react";
import ProductList from "../src/components/stocks/list";
import AsyncRenderer from "../src/components/common/AsyncRenderer";
import { useStockList } from "../src/state/stocks/hooks";
// Page which render stock list

const Index=()=> {
	
	const [list,isLoading,getList] = useStockList();
	
	useEffect(()=>{
		getList();
	},[]);

	return (<AsyncRenderer isLoading={isLoading}>
		<ProductList products={list} />
	</AsyncRenderer>
	);
};
export default Index;
