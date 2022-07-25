import { InfoCircleOutlined, StarOutlined } from "@ant-design/icons";
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
      <div className="flex space-y-1 flex-row">
        <button className="bg-white border-none items-center text-lg"><StarOutlined className="mt-1 mx-2" /></button>
        <button className="bg-white border-none mx-2 items-center border-left text-lg"><InfoCircleOutlined className="mx-2" /></button>
      </div>
    </div>
  );
};

export default ProductListItem;
