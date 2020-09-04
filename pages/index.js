import React from "react";

import ProductList from "../src/components/product/list";
import productList from "../src/data/data";

export default function Index() {
	return (
		<ProductList products={productList} />
	);
}
