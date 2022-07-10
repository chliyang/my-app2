import React from "react";

export interface IProductListItemProps {
  productImg: string,
  productName: string,
  productPrice: string
}

const ProductListItem: React.FC<IProductListItemProps> = ({ productImg, productName, productPrice }) => {
  return (
    <div className="flex h-20 border-bottom-default items-center">
      <div className="h-12 w-12 border-solid border-gray-200 p-1">
        <img src={require("../../../assets/" + productImg)} alt="商品图片" className="w-full" />
      </div>
      <div className="flex-1 ml-4 font-medium">
        <div>{productName}</div>
        <div>{`商品价格：${productPrice}（元）`}</div>
      </div>
      <div className="flex space-y-1 flex-col">
        <button className="bg-blue-100 border-blue-100">详情</button>
        <button className="bg-blue-100 border-blue-100">收藏</button>
      </div>
    </div>
  );
};

export default ProductListItem;
