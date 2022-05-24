import { Button } from "antd";
import React from "react";
import { logout } from "../../utils/session";

const HomePage = (props: any) => {
  const { history } = props;

  const handleClick = () => {
    logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div>
      <header>The Home Page</header>
      <Button
        onClick={handleClick}
        size="large"
        type="primary"
        block
      >
        退出登录
      </Button>
    </div>
  );
};

export default HomePage;
