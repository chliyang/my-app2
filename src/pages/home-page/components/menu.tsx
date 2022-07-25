import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface IMenuItem {
  href: string;
  value: string;
}

const MenuItems: IMenuItem[] = [
  {
    href: "/home",
    value: "home.menu_home"
  },
  {
    href: "/sell",
    value: "home.menu_sell"
  },
  {
    href: "/buy",
    value: "home.menu_buy"
  },
  {
    href: "/forum",
    value: "home.menu_forum"
  },
  {
    href: "/about",
    value: "home.menu_about"
  }
];

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [currentLink, setCurrentLink] = useState<IMenuItem>(MenuItems[0]);
  return (
    <menu className="w-full flex flex-row space-x-10 bg-white py-4 text-lg">
      {MenuItems.map((menuItem) => (
        <Link
          key={menuItem.value}
          to={menuItem.href}
          onClick={() => setCurrentLink(menuItem)}
          className={`px-4 ${currentLink?.href === menuItem.href ? "text-blue-600 font-medium" : ""}`}
        >
          {t(menuItem.value)}
        </Link>
      ))}
    </menu>
  );
};

export default Menu;
