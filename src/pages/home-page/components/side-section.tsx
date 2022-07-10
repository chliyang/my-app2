import React from "react";
import MessageCard from "./message-card";

const SideSection: React.FC = () => {
  return (
    <div className="h-full w-1/4 border-solid border-gray-300">
      <MessageCard title="网站简介" message="您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。" buttonText="如何使用本网站" />
      {/* TODO: 消息内容应该来自查询数据 */}
      <MessageCard title="最新消息" message="您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。" buttonText="更多消息" />

      <div className="text-center bg-blue-50">
        <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">物品推广</div>
        <div className="p-4 text-left">
          <div className="p-1 mb-3 rounded-md drop-shadow-md bg-white">
            <div className="w-full flex items-center">
              <div className="h-20 w-20 border-solid border-gray-200 p-1">
                <img src={require("../../../assets/light.jpg")} alt="Light" className="w-full" />
              </div>
              <div className="flex-1 overflow-hidden ml-2.5">
                <div className="truncate">物品名称sdfsdfsdfsdfsdfsdfsdf</div>
                <div className="truncate">物品价格</div>
                <div className="truncate">物品分类</div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-items-center mt-2.5">
              <button className="bg-blue-300 border-blue-300">详情</button>
              <button className="bg-blue-300 border-blue-300">收藏</button>
            </div>
          </div>
          <div className="p-1 mb-3 rounded-md drop-shadow-md bg-white">
            <div className="w-full flex items-center">
              <div className="h-20 w-20 border-solid border-gray-200 p-1">
                <img src={require("../../../assets/light.jpg")} alt="Light" className="w-full" />
              </div>
              <div className="flex-1 overflow-hidden ml-2.5">
                <div className="truncate">物品名称sdfsdfsdfsdfsdfsdfsdf</div>
                <div className="truncate">物品价格</div>
                <div className="truncate">物品分类</div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-items-center mt-2.5">
              <button className="bg-blue-300 border-blue-300">详情</button>
              <button className="bg-blue-300 border-blue-300">收藏</button>
            </div>
          </div>
          <div className="p-1 mb-3 rounded-md drop-shadow-md bg-white">
            <div className="w-full flex items-center">
              <div className="h-20 w-20 border-solid border-gray-200 p-1">
                <img src={require("../../../assets/light.jpg")} alt="Light" className="w-full" />
              </div>
              <div className="flex-1 overflow-hidden ml-2.5">
                <div className="truncate">物品名称sdfsdfsdfsdfsdfsdfsdf</div>
                <div className="truncate">物品价格</div>
                <div className="truncate">物品分类</div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-items-center mt-2.5">
              <button className="bg-blue-300 border-blue-300">详情</button>
              <button className="bg-blue-300 border-blue-300">收藏</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
