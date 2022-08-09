import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { setCurrentProduct } from "../../../../actions/product-actions/dispatcher";
import {
  IProduct,
  useProductContext
} from "../../../../store/product-store/product-provider";

const DetailButton: React.FC<{ currentProduct: IProduct }> = ({
  currentProduct
}) => {
  const history = useHistory();
  const { dispatch } = useProductContext();

  const handleClick = async () => {
    // console.log(currentProduct);
    setCurrentProduct(dispatch, currentProduct);
    history.push({
      pathname: `/products/${currentProduct.productId}`,
      state: currentProduct
    });
  };
  return (
    <button
      className="bg-white border-none mx-2 items-center border-left text-lg"
      onClick={() => handleClick()}
    >
      <InfoCircleOutlined className="mx-2" />
    </button>
  );
};

export default DetailButton;
