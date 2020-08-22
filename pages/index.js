import React from "react";
import Layout from "../components/layout";
import ProductList from "../components/product/list";
import productList from "../data/data";

export default function Index() {
	return (
		<Layout>
			<ProductList products={productList} />
		</Layout>
	);
}
