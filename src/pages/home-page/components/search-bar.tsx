import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { setSearchKey } from "../../../actions/product-actions/dispatch-action";
import { useProductContext } from "../../../store/product-store/product-provider";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();

  const { dispatch } = useProductContext();

  const handleSearch = (value: string) => {
    setSearchKey(dispatch, value);
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
