import React from "react";
import Layout from "../components/layout";
import ProductList from "../components/product/list";
import productLis from "../data/data";

export default function Index() {
	return (
		<Layout>
			<ProductList products={productLis} />
		</Layout>
	);
}
