import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form";
import http from "../../../utils/http/request";
import { authenticatedSuccess } from "../../../utils/session";

const useLoginPage = () => {
  const [loading, setLoading] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleLogin = (data: ISubmitData) => {
    setLoading("正在登录...");
    setIsLoading(true);
    http("post", "/users/token", {}, data)
      .then((res) => {
        const data = res.data;
        authenticatedSuccess(data.token);
        setLoading("登录成功");
        setIsLoading(false);
      })
      .then(() => {
        history.push("/home");
        // TODO: 应当自动刷新
        window.location.reload();
      })
      .catch((e) => {
        setLoading("登录失败, " + e);
        setIsLoading(false);
      });
  };

  return {
    loading,
    isLoading,
    handleLogin
  };
};

export default useLoginPage;
