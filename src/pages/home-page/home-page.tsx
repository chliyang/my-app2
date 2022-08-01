import { Input } from "antd";
import React from "react";
import HeaderList from "./components/page-container/header-list";
import Menu from "./components/page-container/menu";
import SideSection from "./components/side-section";
import ProductCLasses from "./components/product-categories";
import ProductList from "./components/product-list";
import ProductProvider from "../../store/product-store/product-provider";
import { useTranslation } from "react-i18next";

const FuncSection: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <div className="mt-4">
      <div className="w-auto inline-block drop-shadow-md text-lg p-3 px-10 bg-blue-50">
        {label}
      </div>
      {children}
    </div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ProductProvider>
      <div className="h-full overflow-auto no-scrollbar w-980px min-width-980 mx-auto shrink-0">
        <header className="mt-10">
          <HeaderList />
          <div className="text-2xl font-medium">
            Buy and sell trading platform
          </div>
        </header>
        <Menu />
        <main className="flex mb-8 bg-white">
          <div className="w-3/4 border-solid border-gray-200">
            <FuncSection label={t("home.product_category")}>
              {/* TODO: 需要加入种类查询数据作为props */}
              <ProductCLasses />
            </FuncSection>

            <FuncSection label={t("home.product_list")}>
              <div className="flex w-full py-3  bg-blue-50 justify-center">
                <Input.Search
                  className="w-3/4"
                  addonBefore={t("home.product_search")}
                />
              </div>
              <ProductList />
            </FuncSection>
          </div>
          <SideSection />
        </main>
      </div>
    </ProductProvider>
  );
};

export default HomePage;
