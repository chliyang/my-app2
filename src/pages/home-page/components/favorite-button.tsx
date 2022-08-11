import { StarFilled, StarOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { setProducts } from "../../../actions/product-actions/dispatch-action";
import {
  fetchProduct,
  updateProduct
} from "../../../actions/product-actions/product-api";
import {
  IProduct,
  useProductContext
} from "../../../store/product-store/product-provider";

const FavoriteButton: React.FC<{
  currentProduct: IProduct;
  className?: string;
}> = ({ currentProduct, className }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    currentProduct.isFavorite
  );
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const { t } = useTranslation();
  const { dispatch } = useProductContext();

  const handleClick = async () => {
    setIsDisable(true);
    await updateProduct(currentProduct.productId, {
      isFavorite: !isFavorite
    })
      .then(() => {
        setIsDisable(false);
        setIsFavorite(!isFavorite);
        message.success(t("detail.toast_action_success"), 2);
      })
      .catch(() => {
        setIsDisable(false);
        message.error(t("detail.toast_action_failed"), 2);
      });

    fetchProduct().then((res) => setProducts(dispatch, res.data));
  };
  return (
    <button
      className={`bg-white border-none items-center text-lg ${className}`}
      disabled={isDisable}
      onClick={handleClick}
    >
      {isDisable && <Spin className="mt-2 mx-2" />}
      {!isDisable &&
        (isFavorite ? (
          <StarFilled data-testid="filled-star" className="mt-2 mx-2" />
        ) : (
          <StarOutlined data-testid="outline-star" className="mt-2 mx-2" />
        ))}
    </button>
  );
};

export default FavoriteButton;
