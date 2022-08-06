import React from "react";
import SideSection from "./components/side-section";
import ProductCLasses from "./components/product-categories";
import ProductList from "./components/product-list";
import { useTranslation } from "react-i18next";
import PageContainer from "./components/page-container/page-container";
import SearchBar from "./components/search-bar";

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
    <PageContainer>
      <main className="flex mb-8 bg-white">
        <div className="w-3/4 border-solid border-gray-200">
          <FuncSection label={t("home.product_category")}>
            {/* TODO: 需要加入种类查询数据作为props */}
            <ProductCLasses />
          </FuncSection>

          <FuncSection label={t("home.product_list")}>
            <SearchBar />
            <ProductList />
          </FuncSection>
        </div>
        <SideSection />
      </main>
    </PageContainer>
  );
};

export default HomePage;
