import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [loading, setLoading] = useState<string>("");
  const history = useHistory();

  const handleRegister = (data: ISubmitData) => {
    setLoading("正在注册...");
    http("post", "/register", {}, data)
      .then(() => {
        setLoading("注册成功, 为您自动跳转登录页面");
      })
      .then(() => {
        history.push("/login");
        window.location.reload();
      })
      .catch((e) => {
        setLoading("注册失败, " + e);
      });
  };
  return {
    loading,
    handleRegister
  };
};

export default useRegisterPage;
