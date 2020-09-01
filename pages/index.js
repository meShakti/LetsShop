import React from "react";

import ProductList from "../components/product/list";
import productList from "../data/data";

export default function Index() {
	return (
		<ProductList products={productList} />
	);
}
