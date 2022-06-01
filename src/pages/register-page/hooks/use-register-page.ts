import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [loading, setLoading] = useState<string>("");
  const [isEmailVerifyStep, setIsEmailVerifyStep] = useState<boolean>(true);
  const [verifyResultMessage, setVerifyResultMessage] = useState<string>("");
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

  const handleEmailVerify = (email: string) => {
    http("get", "/users/email", {}, { email })
      .then(() => {
        setVerifyResultMessage("验证成功，请前往邮箱查看验证码");
        setIsEmailVerifyStep(false);
      })
      .catch((e) => {
        setVerifyResultMessage("验证失败，" + e);
      });
  };
  return {
    loading,
    handleRegister,
    verifyResultMessage,
    isEmailVerifyStep,
    handleEmailVerify
  };
};

export default useRegisterPage;
