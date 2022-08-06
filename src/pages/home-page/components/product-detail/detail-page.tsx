import React from "react";
import { useProductContext } from "../../../../store/product-store/product-provider";
import PageContainer from "../page-container/page-container";
import { useTranslation } from "react-i18next";
import ProductList from "../product-list";

const ProductDetail: React.FC = () => {
  const { state } = useProductContext();
  console.log("state in detail page", state);

  const { t } = useTranslation();
  return (
    <PageContainer>
      <main className="flex drop-shadow-lg bg-white p-8">
        <img
          src={require("../../../../assets/light.jpg")}
          alt={t("home.tile_image")}
          className="h-80 w-80 border-solid border-gray-200 p-3"
        />
        <div className="flex-1 mx-16">
          <div className="my-3 text-2xl">
            物品名称： {"随便随便随便随便随便随便随便"}
          </div>
          <div className="my-3 text-lg">物品编号： {"12345678"}</div>
          <div className="my-3 text-lg">物品类别： {"食物"}</div>
          <div className="my-3 text-lg">交易区域： {"西安"}</div>
          <div className="my-3 text-lg">上传会员： {"啦啦啦啦啦"}</div>
          <div className="my-3 text-lg">上传日期： {"2022-2-22"}</div>
          <div className="my-3 text-lg">物品详情： {"这是一个啥"}</div>
          <button className="mt-3 bg-blue-200 items-center text-lg">
            收藏
          </button>
          <button className="mt-3 ml-16 bg-blue-200 items-center text-lg">
            返回上一层
          </button>
        </div>
      </main>
      <div className="w-full mb-8 bg-white">
        <div className="mx-8 mt-8 inline-block drop-shadow-md text-lg py-1 px-3 bg-blue-200">
          推荐好物
        </div>
        <ProductList />
      </div>
    </PageContainer>
  );
};

export default ProductDetail;
