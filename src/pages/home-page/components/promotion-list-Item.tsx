import React from "react";

export interface IPromotionListItemProps {
  productName: string;
  productPrice: number;
  category: string;
}

const PromotionListItem: React.FC<IPromotionListItemProps> = ({
  productName,
  productPrice,
  category
}) => {
  return (
    <div className="p-1 mb-3 rounded-md drop-shadow-md bg-white">
      <div className="w-full flex items-center">
        <div className="h-20 w-20 border-solid border-gray-200 p-1">
          <img
            src={require("../../../assets/light.jpg")}
            alt="Light"
            className="w-full"
          />
        </div>
        <div className="flex-1 overflow-hidden ml-2.5">
          <div className="truncate">{productName}</div>
          <div className="truncate">物品价格：{productPrice}（元）</div>
          <div className="truncate">物品分类：{category}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center mt-2.5">
        <button className="bg-blue-300 border-blue-300">详情</button>
        <button className="bg-blue-300 border-blue-300">收藏</button>
      </div>
    </div>
  );
};

export default PromotionListItem;
