import React from "react";
import PromotionListItem from "./promotion-list-Item";

const PromotionList: React.FC = () => {
  // TODO: 推广列表数据应该来自于查询，然后遍历
  return (
    <div className="text-center bg-blue-50">
      <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">
        物品推广
      </div>
      <div className="p-4 text-left">
        <PromotionListItem
          productName="物品名称sdfsdfsdfsdfsdfsdfsdf"
          productPrice={0}
          category="食物"
        />
        <PromotionListItem
          productName="物品名称sdfsdfsdfsdfsdfsdfsdf"
          productPrice={0}
          category="食物"
        />
        <PromotionListItem
          productName="物品名称sdfsdfsdfsdfsdfsdfsdf"
          productPrice={0}
          category="食物"
        />
      </div>
    </div>
  );
};

export default PromotionList;
