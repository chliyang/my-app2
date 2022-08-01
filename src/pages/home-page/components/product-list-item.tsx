import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product-store/product-provider";
import DetailButton from "./product-detail/detail-button";

const ProductListItem: React.FC<{ currentProduct: IProduct }> = ({
  currentProduct
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-20 border-bottom-default items-center">
      <div className="h-12 w-12 border-solid border-gray-200 p-1">
        <img
          src={require("../../../assets/" + currentProduct.productImg)}
          alt={t("home.tile_image")}
          className="w-full"
        />
      </div>
      <div className="flex-1 ml-4 font-medium">
        <div>{currentProduct.productName}</div>
        <div>
          {t("home.tile_description", { price: currentProduct.productPrice })}
        </div>
      </div>
      <div className="flex space-y-1 flex-row">
        <button className="bg-white border-none items-center text-lg">
          <StarOutlined className="mt-1 mx-2" />
        </button>
        <DetailButton currentProduct={currentProduct} />
      </div>
    </div>
  );
};

export default ProductListItem;
