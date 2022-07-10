import { PictureOutlined } from "@ant-design/icons";
import React from "react";

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 divide-y-1 mx-8 pb-8">
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
      <div className="flex h-20 border-bottom-default items-center ">
        <PictureOutlined className="flex text-5xl items-center" />
        <div className="flex-1 ml-4 font-medium">
          <div>商品名称</div>
          <div>商品价格：（元）</div>
        </div>
        <div className="flex flex-col">
          <button>详情</button>
          <button>收藏</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
