import React from "react";

const ProductCLasses: React.FC = () => {
  // TODO: 加入数据后记得给组件加测试
  return (
    <div className="m-8 grid grid-cols-4 gap-10 justify-items-center">
      <div>食品</div>
      <div>服装</div>
      <div>家具</div>
      <div>电器</div>
      <div>化妆品</div>
      <div>保健品</div>
      <div>电子产品</div>
      <div>清洁用具</div>
      <div>洗浴用品</div>
    </div>
  );
};

export default ProductCLasses;
