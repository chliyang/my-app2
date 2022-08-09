import React from "react";
import { IProduct } from "../../../../store/product-store/product-provider";
import PageContainer from "../page-container/page-container";
import { useTranslation } from "react-i18next";
import ProductList from "../product-list";
import { useHistory, useLocation } from "react-router-dom";
import FavoriteButton from "../favorite-button";

const ProductDetail: React.FC = () => {
  const location = useLocation<IProduct>();
  const currentProduct = location.state;
  const { t } = useTranslation();
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };
  return (
    <PageContainer>
      <main className="flex drop-shadow-lg bg-white p-8">
        <img
          src={require("../../../../assets/light.jpg")}
          alt={t("home.tile_image")}
          className="h-80 w-80 border-solid border-gray-200 p-3"
        />
        <div className="flex-1 mx-16">
          <div className="flex my-3 text-2xl">
            <div className="flex-1">
              {t("detail.main_product_name") + currentProduct.productName}
            </div>
            <FavoriteButton
              currentProduct={currentProduct}
              className="text-2xl"
            />
          </div>
          <div className="my-3 text-lg">
            {t("detail.main_product_id") + currentProduct.productId}
          </div>
          <div className="my-3 text-lg">
            {t("detail.main_product_category") + currentProduct.category}
          </div>
          <div className="my-3 text-lg">
            {t("detail.main_create_by") + currentProduct.createdBy}
          </div>
          <div className="my-3 text-lg">
            {t("detail.main_create_at") + currentProduct.createdAt}
          </div>
          <div className="my-3 text-lg">
            {t("detail.main_product_description") + currentProduct.description}
          </div>
          <button
            className="mt-3 bg-blue-200 items-center text-lg"
            onClick={goHome}
          >
            {t("detail.button_go_back")}
          </button>
        </div>
      </main>
      <div className="w-full mb-8 bg-white">
        <div className="mx-8 mt-8 inline-block drop-shadow-md text-lg py-1 px-3 bg-blue-200">
          {t("detail.promotion_list")}
        </div>
        <ProductList />
      </div>
    </PageContainer>
  );
};

export default ProductDetail;
