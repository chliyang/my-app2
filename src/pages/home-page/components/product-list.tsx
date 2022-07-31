import React from "react";
import { useProductContext } from "../../../store/product-store/product-provider";
import ProductListItem from "./product-list-item";

const ProductList: React.FC = () => {
  // TODO: 加入商品数据后记得给此组件加测试
  const { state } = useProductContext();
  const products = state.filteredProducts;
  return (
    <div className="grid grid-cols-1 divide-y-1 mx-8 pb-8">
      {products.map((product) => (
        <ProductListItem
          key={product.productId}
          productImg={product.productImg}
          productName={product.productName}
          productPrice={product.productPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
