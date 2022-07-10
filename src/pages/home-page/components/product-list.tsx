import React from "react";
import ProductListItem from "./product-list-item";

const ProductList: React.FC = () => {
  // TODO: 加入商品数据后记得给此组件加测试
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
