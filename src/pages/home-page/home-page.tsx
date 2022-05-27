import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../utils/session";

const HomePage = (props: any) => {
  const history = useHistory();

  const handleClick = () => {
    logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div>
      <header className="text-6xl  mb-24">The Home Page</header>
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
