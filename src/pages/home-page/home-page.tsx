import { LogoutOutlined, ProfileOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../utils/session";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className="container w-980px min-w-980px min-h-screen mx-auto flex flex-col">
      <header className="mt-10">
        <ul className="list-none flex flex-row-reverse space-x-8 space-x-reverse">
          <li className="flex text-lg"><LogoutOutlined className="flex items-center" /><span onClick={handleClick}>Logout</span></li>
          <li className="flex text-lg"><ShoppingCartOutlined className="flex items-center" /><span>Shopping cart</span></li>
          <li className="flex text-lg"><ProfileOutlined className="flex items-center" /><span>Order</span></li>
        </ul>
        <div className="text-2xl font-medium">Buy and sell trading platform</div>
      </header>

      <menu className="w-full flex flex-row space-x-10 bg-white py-4 text-lg">
        <div className="px-4">首页</div>
        <div className="px-4">物品提供</div>
        <div className="px-4">物品征求</div>
        <div className="px-4">讨论区</div>
        <div className="px-4">关于我们</div>
      </menu>

      <main className="h-full bg-white flex-1">
        <div>search space</div>
        <div>type space</div>
        <div>product space</div>
      </main>
    </div>
  );
};

export default HomePage;
