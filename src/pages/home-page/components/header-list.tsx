import {
  LogoutOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  TranslationOutlined
} from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../../utils/session";
import { useTranslation } from "react-i18next";

interface IListItem {
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
}

const HeaderList: React.FC = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  const HeaderListItems: IListItem[] = [
    {
      icon: <LogoutOutlined className="flex items-center" />,
      description: "home.header_list_logout",
      onClick: handleLogout
    },
    {
      icon: <ShoppingCartOutlined className="flex items-center" />,
      description: "home.header_list_cart",
      onClick: () => { }
    },
    {
      icon: <ProfileOutlined className="flex items-center" />,
      description: "home.header_list_order",
      onClick: () => { }
    },
    {
      icon: <TranslationOutlined className="flex items-center" />,
      description: i18n.language === "en"
        ? "中文"
        : "English",
      onClick: () => i18n.changeLanguage(i18n.language === "en"
        ? "zh"
        : "en")
    }
  ];

  return (
    <ul className="list-none flex flex-row-reverse space-x-8 space-x-reverse">
      {HeaderListItems.map((listItem) => (
        <li
          key={listItem.description}
          className="flex text-lg"
          onClick={listItem.onClick}
        >
          {listItem.icon}
          <span> {t(listItem.description)}</span>
        </li>
      ))}
    </ul>
  );
};

export default HeaderList;
