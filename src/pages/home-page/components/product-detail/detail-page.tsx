import React from "react";
import { useProductContext } from "../../../../store/product-store/product-provider";
import PageContainer from "../page-container/page-container";

const ProductDetail: React.FC = () => {
  const { state } = useProductContext();
  console.log(state);
  return <PageContainer>{state.currentProduct.productName}</PageContainer>;
};

export default ProductDetail;
