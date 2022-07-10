import React from "react";
import MessageCard from "./message-card";
import PromotionList from "./promotion-list";

const SideSection: React.FC = () => {
  return (
    <div className="h-full w-1/4 border-solid border-gray-300">
      <MessageCard title="网站简介" message="您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。" buttonText="如何使用本网站" />
      {/* TODO: 消息内容应该来自查询数据 */}
      <MessageCard title="最新消息" message="您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。" buttonText="更多消息" />

      <PromotionList />
    </div>
  );
};

export default SideSection;
