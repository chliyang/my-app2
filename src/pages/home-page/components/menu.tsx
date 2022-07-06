import React from "react";
import { Link } from "react-router-dom";

interface IMenuItem {
  href: string;
  value: string;
}

const MenuItems: IMenuItem[] = [
  {
    href: "/home",
    value: "首页"
  },
  {
    href: "/sell",
    value: "物品提供"
  },
  {
    href: "/buy",
    value: "物品征求"
  },
  {
    href: "/forum",
    value: "讨论区"
  },
  {
    href: "/about",
    value: "关于我们"
  }
];

const Menu: React.FC = () => {
  return (
    <menu className="w-full flex flex-row space-x-10 bg-white py-4 text-lg">
      {MenuItems.map((menuItem) => (
        <Link key={menuItem.value} to={menuItem.href} className="px-4">
          {menuItem.value}
        </Link>
      ))}
    </menu>
  );
};

export default Menu;
