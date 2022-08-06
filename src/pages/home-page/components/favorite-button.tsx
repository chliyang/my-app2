import { StarFilled, StarOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { setProducts } from "../../../actions/product-actions/dispatcher";
import {
  fetchProduct,
  updateProduct
} from "../../../actions/product-actions/product";
import {
  IProduct,
  useProductContext
} from "../../../store/product-store/product-provider";

const FavoriteButton: React.FC<{ currentProduct: IProduct }> = ({
  currentProduct
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    currentProduct.isFavorite
  );
  const { dispatch } = useProductContext();

  const handleClick = async () => {
    await updateProduct(currentProduct.productId, {
      isFavorite: !isFavorite
    });
    fetchProduct.then((res) => setProducts(dispatch, res.data));
    setIsFavorite(!isFavorite);
  };
  return (
    <button
      className="bg-white border-none items-center text-lg"
      onClick={handleClick}
    >
      {isFavorite ? (
        <StarFilled className="mt-2 mx-2" />
      ) : (
        <StarOutlined className="mt-2 mx-2" />
      )}
    </button>
  );
};

export default FavoriteButton;
