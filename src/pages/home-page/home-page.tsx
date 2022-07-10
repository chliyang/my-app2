import { Input } from "antd";
import React from "react";
import HeaderList from "./components/header-list";
import Menu from "./components/menu";
import ProductCLasses from "./components/product-categories";
import ProductList from "./components/product-list";

const FuncSection: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <div className="mt-4">
      <div className="w-auto inline-block drop-shadow-md text-lg p-3 px-10 bg-blue-50">
        {label}
      </div>
      {children}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="h-full overflow-auto no-scrollbar w-980px min-width-980 mx-auto shrink-0">
      <header className="mt-10">
        <HeaderList />
        <div className="text-2xl font-medium">Buy and sell trading platform</div>
      </header>
      <Menu />
      <main className="flex mb-8 bg-white">
        <div className="w-3/4 border-solid border-gray-200">
          <div className="flex w-full py-8  bg-blue-50 justify-center">
            <Input.Search className="w-3/4" addonBefore="物品搜索" />
          </div>

          <FuncSection label="物品类别">
            {/* TODO: 需要加入种类查询数据作为props */}
            <ProductCLasses />
          </FuncSection>

          <FuncSection label="商品列表">
            {/* TODO: 需要加入所有商品查询数据作为props */}
            <ProductList />
          </FuncSection>
        </div>
        <div className="h-full w-1/4 border-solid border-gray-300">
          <div className="text-center bg-blue-50">
            <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">网站简介</div>
            <div className="p-4 text-left">
              您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。
            </div>
            <button className="bg-blue-300 border-blue-300  mb-6">如何使用本网站</button>
          </div>
          <div className="text-center bg-blue-50">
            <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">最新消息</div>
            <div className="p-4 text-left">
              您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。
            </div>
            <button className="bg-blue-300 border-blue-300 mb-6">更多消息</button>
          </div>
          <div className="text-center bg-blue-50">
            <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">物品推广</div>
            <div className="p-4 text-left">
              <div className="p-1 mb-3 rounded-md drop-shadow-md bg-white">
                <div className="w-full flex items-center">
                  <div className="h-20 w-20 border-solid border-gray-200 p-1">
                    <img src={require("../../assets/light.jpg")} alt="Light" className="w-full" />
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
                    <img src={require("../../assets/light.jpg")} alt="Light" className="w-full" />
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
                    <img src={require("../../assets/light.jpg")} alt="Light" className="w-full" />
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
      </main>
    </div>
  );
};

export default HomePage;
