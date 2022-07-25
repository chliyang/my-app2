import { InfoCircleOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";

export interface IProductListItemProps {
  productImg: string,
  productName: string,
  productPrice: string
}

const ProductListItem: React.FC<IProductListItemProps> = ({ productImg, productName, productPrice }) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-20 border-bottom-default items-center">
      <div className="h-12 w-12 border-solid border-gray-200 p-1">
        <img src={require("../../../assets/" + productImg)} alt={t("home.tile_image")} className="w-full" />
      </div>
      <div className="flex-1 ml-4 font-medium">
        <div>{productName}</div>
        <div>{t("home.tile_description", { price: productPrice })}</div>
      </div>
      <div className="flex space-y-1 flex-row">
        <button className="bg-white border-none items-center text-lg"><StarOutlined className="mt-1 mx-2" /></button>
        <button className="bg-white border-none mx-2 items-center border-left text-lg"><InfoCircleOutlined className="mx-2" /></button>
      </div>
    </div>
  );
};

export default ProductListItem;
