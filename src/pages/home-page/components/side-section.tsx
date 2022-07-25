import React from "react";
import MessageCard from "./message-card";
import PromotionList from "./promotion-list";
import { useTranslation } from "react-i18next";

const SideSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full w-1/4 border-solid border-gray-300">
      <MessageCard
        title={t("home.side_introduction_title")}
        message={t("home.side_introduction_message")}
        buttonText={t("home.side_introduction_button_text")}
      />
      {/* TODO: 消息内容应该来自查询数据 */}
      <MessageCard
        title={t("home.side_message_title")}
        message="您可以发布任何不需要的，但是可以重复使用的物品（除限制物品以外）到本平台进行售卖，也可在本网站搜索您想要购买的物品进行购买。"
        buttonText={t("home.side_message_button_text")}
      />

      <PromotionList />
    </div>
  );
};

export default SideSection;
