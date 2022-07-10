import React from "react";
import ProductListItem from "./product-list-item";

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 divide-y-1 mx-8 pb-8">
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
      <ProductListItem productImg="light.jpg" productName="商品名称" productPrice="0" />
    </div>
  );
};

export default ProductList;
