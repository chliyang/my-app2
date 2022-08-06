import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { setFilteredProducts } from "../../../actions/product-actions/dispatcher";
import { useProductContext } from "../../../store/product-store/product-provider";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();

  const { state, dispatch } = useProductContext();

  const handleSearch = (value: string) => {
    const searchProducts = state.filteredProducts.filter((product) =>
      product.productName.includes(value)
    );
    setFilteredProducts(dispatch, searchProducts);
  };

  return (
    <div className="flex w-full py-3  bg-blue-50 justify-center">
      <Input.Search
        className="w-3/4"
        allowClear
        addonBefore={t("home.product_search")}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
