import React from "react";
import HeaderList from "./header-list";
import Menu from "./menu";

const PageContainer: React.FC = ({ children }) => {
  return (
    <div className="h-full overflow-auto no-scrollbar w-980px min-width-980 mx-auto shrink-0">
      <header className="mt-10">
        <HeaderList />
        <div className="text-2xl font-medium">
          Buy and sell trading platform
        </div>
      </header>
      <Menu />
      {children}
    </div>
  );
};

export default PageContainer;
